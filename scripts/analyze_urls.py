import json
import os
from urllib.parse import urlparse

base_path = '/Users/shaswatraj/Desktop/earn/30tools'
tools_json_path = os.path.join(base_path, 'src/constants/tools.json')
urls_txt_path = os.path.join(base_path, 'scripts/urls.txt')

# Load tools
with open(tools_json_path, 'r', encoding='utf-8') as f:
    tools_data = json.load(f)

# Extract existing slugs
existing_slugs = {} # slug -> tool_object
all_tools = []

for cat_id, category in tools_data['categories'].items():
    if 'tools' in category:
        for tool in category: # Wait, tools_data structure check
            pass

# Re-checking tools_data structure from previous view_file
# tools_data['categories'] is a dict where values have a 'tools' list.
for cat_id, category in tools_data['categories'].items():
    if 'tools' in category:
        for tool in category['tools']:
            all_tools.append(tool)
            # Add main route
            route = tool.get('route', '').strip('/')
            if route:
                existing_slugs[route] = tool
            # Add extra slugs
            extra = tool.get('extraSlugs', [])
            for s in extra:
                existing_slugs[s] = tool

# Load URLs
with open(urls_txt_path, 'r', encoding='utf-8') as f:
    urls = [line.strip() for line in f if line.strip()]

results = {
    "existing": [],
    "missing": []
}

for url in urls:
    if url.startswith('Created At:') or url.startswith('Completed At:') or url.startswith('File Path:'):
        continue
    try:
        parsed = urlparse(url)
        slug = parsed.path.strip('/')
        if not slug:
            continue
        if slug in existing_slugs:
            results["existing"].append((slug, existing_slugs[slug]['id']))
        else:
            results["missing"].append(slug)
    except:
        pass

print(f"Total processed: {len(urls)}")
print(f"Existing: {len(results['existing'])}")
print(f"Missing: {len(results['missing'])}")

# Output missing slugs to a file for review
with open(os.path.join(base_path, 'missing_slugs_report.txt'), 'w') as f:
    for slug in results["missing"]:
        f.write(slug + '\n')
