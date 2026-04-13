import json
import os

base_path = '/Users/shaswatraj/Desktop/earn/30tools'
tools_json_path = os.path.join(base_path, 'src/constants/tools.json')

with open(tools_json_path, 'r', encoding='utf-8') as f:
    tools_data = json.load(f)

summary = []
for cat_id, category in tools_data['categories'].items():
    cat_name = category.get('name', cat_id)
    if 'tools' in category:
        for tool in category['tools']:
            summary.append({
                "id": tool.get('id'),
                "name": tool.get('name'),
                "route": tool.get('route'),
                "category": cat_id,
                "extraSlugs": tool.get('extraSlugs', [])
            })

with open(os.path.join(base_path, 'tools_summary.json'), 'w') as f:
    json.dump(summary, f, indent=2)

print(f"Summarized {len(summary)} tools.")
