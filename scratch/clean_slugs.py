import json
import os

def clean_tools_json():
    file_path = 'src/constants/tools.json'
    if not os.path.exists(file_path):
        print(f"Error: {file_path} not found.")
        return

    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    global_seen_slugs = set()
    cleaned_count = 0
    removed_sitemap = 0

    if 'categories' in data:
        for cat_id, cat_data in data['categories'].items():
            if 'tools' in cat_data:
                for tool in cat_data['tools']:
                    tool_id = tool.get('id', '')
                    
                    if 'extraSlugs' in tool:
                        new_slugs = []
                        for slug in tool['extraSlugs']:
                            # Rule 1: Remove "sitemap-url-downloader" if this is NOT that tool
                            if slug == "sitemap-url-downloader" and tool_id != "sitemap-url-downloader":
                                removed_sitemap += 1
                                continue
                            
                            # Rule 2: Remove duplicates globally, unless it's the tools explicit ID
                            # Actually, maybe the user meant deduplicate within the array? 
                            # But if multiple tools claim the same extraSlug, it's a conflict.
                            # We should enforce global uniqueness for slugs mapped to tools.
                            if slug not in global_seen_slugs:
                                global_seen_slugs.add(slug)
                                new_slugs.append(slug)
                            else:
                                cleaned_count += 1
                                
                        tool['extraSlugs'] = new_slugs
                    
                    # Ensure the tool's main ID is in global_seen too
                    if tool_id:
                        global_seen_slugs.add(tool_id)

    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        
    print(f"Cleaned {cleaned_count} duplicate slugs.")
    print(f"Removed 'sitemap-url-downloader' from {removed_sitemap} incorrect tools.")

if __name__ == "__main__":
    clean_tools_json()
