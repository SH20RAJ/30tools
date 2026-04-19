import json
import os
import copy

def expand_slugs():
    file_path = 'src/constants/tools.json'
    if not os.path.exists(file_path):
        print(f"Error: {file_path} not found.")
        return

    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Keywords to append/prepend for massive expansion (legal doorway approach)
    modifiers = [
        "for-pc", "for-mac", "for-iphone", "for-android", "for-windows",
        "no-watermark", "online", "free", "2026", "hd", "high-quality",
        "without-signup", "fast", "pro", "best"
    ]

    total_added = 0
    
    if 'categories' in data:
        for cat_id, cat_data in data['categories'].items():
            if 'tools' in cat_data:
                for tool in cat_data['tools']:
                    base_slugs = copy.deepcopy(tool.get('extraSlugs', []))
                    if tool['id'] not in base_slugs:
                        base_slugs.append(tool['id'])
                        
                    new_slugs = set(tool.get('extraSlugs', []))
                    
                    # Generate somewhat conservative variants to avoid blowing up the JSON size *too* much initially,
                    # but enough to show the 'programmatic' scaling pattern.
                    for slug in base_slugs:
                        if slug == "": continue
                        
                        # Add top 3 highest intent modifiers to the original ID and existing slugs
                        for mod in ["free", "online", "no-signup"]:
                            combinations = [
                                f"{slug}-{mod}",
                                f"{mod}-{slug}"
                            ]
                            for combo in combinations:
                                if combo not in new_slugs:
                                    new_slugs.add(combo)
                                    total_added += 1

                    # Keep it sorted to avoid weird merge conflicts
                    tool['extraSlugs'] = sorted(list(new_slugs))

    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        
    print(f"Successfully added {total_added} new programmatic long-tail extraSlugs to {file_path}.")

if __name__ == "__main__":
    expand_slugs()
