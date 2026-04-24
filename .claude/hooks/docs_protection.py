#!/usr/bin/env python3
"""
Generic docs protection hook for Claude Code.

Project-agnostic behavior:
- Only runs on write/edit tools.
- Only inspects files under the configured docs directory.
- Optionally blocks creating new docs not indexed in docs README.
- Warns for large docs without a table of contents.
- Optionally blocks oversized docs README.

Configuration via environment variables:
- DOCS_DIR_NAME (default: "docs")
- DOCS_INDEX_FILE (default: "README.md")
- DOCS_INDEX_MAX_LINES (default: 200)
- DOCS_TOC_THRESHOLD_LINES (default: 150)
- DOCS_BLOCK_UNINDEXED_NEW_FILES (default: "true")
- DOCS_ALWAYS_SHOW_REMINDER (default: "false")
"""

from __future__ import annotations

import json
import os
import re
import sys
from pathlib import Path


WRITE_TOOLS = {"Write", "Edit", "MultiEdit", "create_file", "str_replace"}

DOCS_DIR_NAME = os.getenv("DOCS_DIR_NAME", "docs")
DOCS_INDEX_FILE = os.getenv("DOCS_INDEX_FILE", "README.md")
DOCS_INDEX_MAX_LINES = int(os.getenv("DOCS_INDEX_MAX_LINES", "200"))
DOCS_TOC_THRESHOLD_LINES = int(os.getenv("DOCS_TOC_THRESHOLD_LINES", "150"))
DOCS_BLOCK_UNINDEXED_NEW_FILES = (
    os.getenv("DOCS_BLOCK_UNINDEXED_NEW_FILES", "true").strip().lower() == "true"
)
DOCS_ALWAYS_SHOW_REMINDER = (
    os.getenv("DOCS_ALWAYS_SHOW_REMINDER", "false").strip().lower() == "true"
)


def emit(decision: str, reason: str = "") -> None:
    print(json.dumps({"decision": decision, "reason": reason}))


def to_path(raw_path: str) -> Path:
    return Path(raw_path).expanduser().resolve()


def find_docs_root(target_path: Path) -> Path | None:
    for candidate in [target_path.parent, *target_path.parents]:
        if candidate.name == DOCS_DIR_NAME:
            return candidate
    return None


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="ignore")


def count_lines(path: Path) -> int:
    if not path.exists():
        return 0
    with path.open("r", encoding="utf-8", errors="ignore") as handle:
        return sum(1 for _ in handle)


def has_table_of_contents(path: Path) -> bool:
    if not path.exists():
        return False
    header = read_text(path)[:5000].lower()
    return "table of contents" in header


def load_indexed_docs(docs_root: Path) -> set[str]:
    index_path = docs_root / DOCS_INDEX_FILE
    if not index_path.exists():
        return set()

    content = read_text(index_path)
    matches = re.findall(r"`([^`]+\.md)`", content, flags=re.IGNORECASE)
    indexed = {Path(name).name.lower() for name in matches}

    # Also support markdown links without backticks: [Title](FILE.md)
    link_matches = re.findall(r"\[[^\]]+\]\(([^)]+\.md)\)", content, flags=re.IGNORECASE)
    indexed.update(Path(name).name.lower() for name in link_matches)
    indexed.add(Path(DOCS_INDEX_FILE).name.lower())
    return indexed


def build_reminder() -> str:
    return (
        "Documentation reminder:\n"
        "- Prefer updating an existing doc before creating a new one.\n"
        f"- Keep `{DOCS_INDEX_FILE}` as a lightweight index.\n"
        "- Ensure long docs include a table of contents.\n"
        "- Review documentation changes before committing."
    )


def main() -> None:
    try:
        hook_input = json.load(sys.stdin)
    except json.JSONDecodeError:
        return

    tool_name = hook_input.get("tool_name", "")
    if tool_name not in WRITE_TOOLS:
        return

    tool_input = hook_input.get("tool_input", {}) or {}
    raw_path = tool_input.get("path") or tool_input.get("file_path")
    if not raw_path:
        return

    file_path = to_path(raw_path)
    docs_root = find_docs_root(file_path)
    if not docs_root:
        return

    issues: list[str] = []
    warnings: list[str] = []
    filename = file_path.name
    is_docs_index = filename.lower() == Path(DOCS_INDEX_FILE).name.lower()

    # Rule 1: Optional block for oversized docs index.
    if is_docs_index:
        estimated_lines = count_lines(file_path)
        new_content = tool_input.get("content") or tool_input.get("new_str")
        if isinstance(new_content, str) and new_content:
            estimated_lines = max(estimated_lines, len(new_content.splitlines()))

        if estimated_lines > DOCS_INDEX_MAX_LINES:
            issues.append(
                f"Blocked: `{DOCS_INDEX_FILE}` is too long ({estimated_lines} lines). "
                f"Keep it under {DOCS_INDEX_MAX_LINES} lines."
            )

    # Rule 2: Optional block for new markdown docs not indexed.
    is_new_file = not file_path.exists()
    if (
        DOCS_BLOCK_UNINDEXED_NEW_FILES
        and is_new_file
        and file_path.suffix.lower() == ".md"
        and not is_docs_index
    ):
        indexed_docs = load_indexed_docs(docs_root)
        if filename.lower() not in indexed_docs:
            issues.append(
                f"Blocked: `{filename}` is not listed in `{DOCS_INDEX_FILE}`. "
                "Add it to the index first."
            )

    # Rule 3: Warn for long docs without ToC.
    if (
        file_path.exists()
        and file_path.suffix.lower() == ".md"
        and not is_docs_index
        and count_lines(file_path) > DOCS_TOC_THRESHOLD_LINES
        and not has_table_of_contents(file_path)
    ):
        warnings.append(
            f"Warning: `{filename}` is over {DOCS_TOC_THRESHOLD_LINES} lines "
            "without a table of contents."
        )

    reminder = build_reminder()
    if issues:
        emit("block", "\n".join(issues + [reminder]))
        return
    if warnings:
        emit("warn", "\n".join(warnings + [reminder]))
        return
    if DOCS_ALWAYS_SHOW_REMINDER:
        emit("allow", reminder)


if __name__ == "__main__":
    main()
