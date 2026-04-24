#!/usr/bin/env python3
"""
Temporary hook to protect the root README.md during setup.

It blocks:
- Deleting root README.md
- Full overwrite writes to root README.md

This hook is intended to be removed by scripts/setup-cleanup.mjs.
"""

import json
import os
import sys
from pathlib import Path


WRITE_LIKE_TOOLS = {"Write", "create_file", "str_replace"}
DELETE_LIKE_TOOLS = {"Delete"}


def emit(decision: str, reason: str) -> None:
    print(json.dumps({"decision": decision, "reason": reason}))


def is_root_readme(path_value: str) -> bool:
    try:
        target = Path(path_value).expanduser().resolve()
    except Exception:
        return False
    return target.name.lower() == "readme.md" and target.parent.name.lower() != "docs"


def main() -> None:
    try:
        hook_input = json.load(sys.stdin)
    except json.JSONDecodeError:
        return

    tool_name = hook_input.get("tool_name", "")
    tool_input = hook_input.get("tool_input", {}) or {}
    file_path = tool_input.get("path") or tool_input.get("file_path")
    if not file_path or not is_root_readme(file_path):
        return

    if tool_name in DELETE_LIKE_TOOLS:
        emit(
            "block",
            "Blocked: root README.md is protected during setup and cannot be deleted.",
        )
        return

    if tool_name in WRITE_LIKE_TOOLS:
        emit(
            "block",
            "Blocked: root README.md is protected during setup and cannot be rewritten.",
        )
        return


if __name__ == "__main__":
    main()
