import json
import os
from urllib.parse import urlparse

base_path = '/Users/shaswatraj/Desktop/earn/30tools'
urls_path = os.path.join(base_path, 'scripts/urls.txt')
tools_path = os.path.join(base_path, 'src/constants/tools.json')

with open(urls_path, 'r') as f:
    target_urls = [line.strip() for line in f if line.strip()]

with open(tools_path, 'r') as f:
    tools_data = json.load(f)

valid_slugs = set()
for cat in tools_data['categories'].values():
    if 'tools' in cat:
        for tool in cat['tools']:
            # Main route
            route = tool.get('route', '').strip('/')
            if route:
                valid_slugs.add(route)
            # Extra slugs
            for s in tool.get('extraSlugs', []):
                valid_slugs.add(s.strip('/'))

missing = []
for url in target_urls:
    slug = urlparse(url).path.strip('/')
    if not slug: continue
    if slug not in valid_slugs:
        missing.append(slug)

print(f"Total Slugs Checked: {len(target_urls)}")
print(f"Valid Slugs in tools.json: {len(valid_slugs)}")
print(f"Missing (404 candidates): {len(missing)}")

if missing:
    print("\n--- FIRST 20 MISSING ---")
    for m in missing[:20]:
        print(m)
else:
    print("\nSUCCESS: All URLs are now covered in tools.json!")
