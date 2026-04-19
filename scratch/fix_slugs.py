import json
import os

def fix_slugs():
    file_path = 'src/constants/tools.json'
    if not os.path.exists(file_path):
        print(f"Error: {file_path} not found.")
        return

    with open(file_path, 'r', encoding='utf-8') as f:
        try:
            data = json.load(f)
        except json.JSONDecodeError as e:
            print(f"Error decoding JSON: {e}")
            return

    count = 0
    modified = False

    if 'categories' in data:
        for cat_id, cat_data in data['categories'].items():
            if 'tools' in cat_data:
                for tool in cat_data['tools']:
                    if 'extraSlugs' in tool:
                        new_slugs = []
                        tool_modified = False
                        for slug in tool['extraSlugs']:
                            if ' ' in slug:
                                new_slug = slug.replace(' ', '-')
                                # Avoid duplicate slugs for the same tool
                                if new_slug not in new_slugs and new_slug not in tool['extraSlugs']:
                                    new_slugs.append(new_slug)
                                    count += 1
                                    tool_modified = True
                                elif new_slug in new_slugs:
                                    # Already added the hypenated version
                                    tool_modified = True
                                    continue
                                else:
                                    # Hypothetically, new_slug is already in the original list but without spaces
                                    # We still "modify" by excluding the space version
                                    tool_modified = True
                                    continue
                            else:
                                new_slugs.append(slug)
                        
                        if tool_modified:
                            tool['extraSlugs'] = new_slugs
                            modified = True

    if modified:
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print(f"Successfully updated {count} slugs in {file_path}.")
    else:
        print("No slugs with spaces found.")

if __name__ == "__main__":
    fix_slugs()
