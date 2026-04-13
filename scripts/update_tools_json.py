import json
import os

base_path = '/Users/shaswatraj/Desktop/earn/30tools'
mapping_path = os.path.join(base_path, 'mapping_results.json')
tools_path = os.path.join(base_path, 'src/constants/tools.json')

with open(mapping_path, 'r') as f:
    mapping = json.load(f)

with open(tools_path, 'r') as f:
    original_tools_data = json.load(f)

def slug_to_title(slug):
    return ' '.join(word.capitalize() for word in slug.split('-'))

category_actions = {
    'image': 'compress, convert, and edit images',
    'pdf': 'manage PDF documents',
    'video': 'process video files',
    'text': 'transform and analyze text',
    'developer': 'format and convert code data',
    'downloaders': 'save social media content',
    'seo': 'optimize your website',
    'audio': 'edit audio files',
    'youtube': 'download YouTube content',
    'generators': 'generate random content',
    'utilities': 'perform helpful calculations',
    'others': 'perform online tasks'
}

# 1. Update existing tools with extra Slugs
tools_lookup = {}
for cat_id, category in original_tools_data['categories'].items():
    for tool in category['tools']:
        tools_lookup[tool['id']] = tool

for tool_id, extra in mapping['extraSlugsMapping'].items():
    if tool_id in tools_lookup:
        existing_extra = set(tools_lookup[tool_id].get('extraSlugs', []))
        existing_extra.update(extra)
        tools_lookup[tool_id]['extraSlugs'] = sorted(list(existing_extra))

# 2. Create new tools
for item in mapping['newTools']:
    master = item['master']
    extra = item['extraSlugs']
    category = item['category']
    name = slug_to_title(master)
    action = category_actions.get(category, 'perform online tasks')
    
    new_tool = {
        "id": master,
        "name": name,
        "description": f"Free {name} online. {name} allows you to {action} quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
        "route": f"/{master}",
        "extraSlugs": sorted(list(set(extra))),
        "category": category,
        "seoTitle": f"{name} - Free Online {category.capitalize()} Tool | 30tools",
        "seoDescription": f"Use our free {name} to {action} instantly. No registration needed, high quality results, and secure browser-based processing. Try {master} now!",
        "keywords": [master] + [w for w in master.split('-') if len(w) > 3],
        "features": [
            "100% Free to use",
            "No registration or signup required",
            "Fast browser-based processing",
            "Privacy-focused - data stays on your device",
            "Works on all modern browsers"
        ],
        "faqs": [
            {
                "question": f"Is this {name} free?",
                "answer": f"Yes, our {name} is completely free to use with no hidden costs or limits."
            },
            {
                "question": "Is my data secure?",
                "answer": "Absolutely. All processing happens locally in your browser. We never store or transmit your data to any server."
            }
        ],
        "howTo": {
            "name": f"How to use {name}",
            "steps": [
                {
                    "name": "Input Data",
                    "text": "Provide your input or upload your file to the tool.",
                    "url": f"/{master}#step1",
                    "position": 1
                },
                {
                    "name": "Process",
                    "text": "Click the process button to start the tool.",
                    "url": f"/{master}#step2",
                    "position": 2
                },
                {
                    "name": "Save Results",
                    "text": "Download or copy your results instantly.",
                    "url": f"/{master}#step3",
                    "position": 3
                }
            ]
        }
    }
    
    # Add to original data
    if category in original_tools_data['categories']:
        original_tools_data['categories'][category]['tools'].append(new_tool)
    else:
        # others is a fallback
        original_tools_data['categories']['others']['tools'].append(new_tool)

with open(os.path.join(base_path, 'src/constants/tools.json'), 'w') as f:
    json.dump(original_tools_data, f, indent=2)

print(f"Updated tools.json with {len(mapping['newTools'])} new tools and {len(mapping['extraSlugsMapping'])} slug updates.")
