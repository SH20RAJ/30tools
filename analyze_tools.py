#!/usr/bin/env python3
"""
Analyze all tools from tools.json and check:
- Has dedicated page component
- Uses generic RegisteredToolMount or ToolPageContent
- Has tool component file
- Tool implementation status
"""

import json
import os
from pathlib import Path

BASE = Path("/Users/shaswatraj/Desktop/earn/30tools/src")
TOOLS_JSON = BASE / "constants" / "tools.json"

with open(TOOLS_JSON) as f:
    data = json.load(f)

tools = []
for cat_key, cat_val in data["categories"].items():
    for tool in cat_val.get("tools", []):
        tools.append({
            "id": tool["id"],
            "name": tool["name"],
            "route": tool["route"],
            "category": cat_key,
        })

print(f"Total tools: {len(tools)}")
print("-" * 100)

# Group by category
from collections import defaultdict
by_category = defaultdict(list)
for t in tools:
    by_category[t["category"]].append(t)

for category, cat_tools in sorted(by_category.items()):
    print(f"\n{'='*60}")
    print(f"CATEGORY: {category} ({len(cat_tools)} tools)")
    for t in cat_tools:
        # Check for dedicated page component
        route_path = t["route"].lstrip("/")
        page_path = BASE / "app" / f"({category})" / route_path / "page.tsx"
        page_exists = page_path.exists()

        # Check if page uses RegisteredToolMount or direct component
        uses_generic = False
        if page_exists:
            content = page_path.read_text()
            if "RegisteredToolMount" in content or "ToolPageContent" in content:
                uses_generic = True

        # Check for dedicated tool component
        component_paths = [
            BASE / "components" / "tools" / category / f"{t['id'].replace('-', ' ').title().replace(' ', '')}.jsx",
            BASE / "components" / "tools" / category / f"{t['id'].replace('-', ' ').title().replace(' ', '')}.tsx",
            BASE / "components" / "tools" / "image" / f"{t['id'].replace('-', ' ').title().replace(' ', '')}.jsx",
            BASE / "components" / "tools" / "pdf" / f"{t['id'].replace('-', ' ').title().replace(' ', '')}.jsx",
        ]
        component_exists = any(p.exists() for p in component_paths)

        # Also check if it's handled by shared built-in components
        is_builtin = False
        builtin_patterns = [
            "UniversalUnitConverter", "BaseConverter", "BuiltInCalculators",
            "BuiltInMarkup", "BuiltInSerialization", "BuiltInSafeHttp"
        ]
        if page_exists:
            if any(p in page_path.read_text() for p in builtin_patterns):
                is_builtin = True

        print(f"  [{'X' if page_exists else ' '}] {t['id']:45} route: {t['route']}")
        if uses_generic:
            print(f"      ⚠️  Uses generic RegisteredToolMount – needs direct component")
        if not component_exists and not is_builtin:
            print(f"      ❌ No dedicated component found")
            # Try to guess where it might be
            reg_path = BASE / "components" / "tools" / "shared" / "RegisteredToolMount.tsx"
            reg_content = reg_path.read_text()
            if t['id'] in reg_content:
                print(f"      → Handled by RegisteredToolMount dispatcher")

print("\n\nDone.")
