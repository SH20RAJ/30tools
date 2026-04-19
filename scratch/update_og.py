import os
import re
import urllib.parse

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the title to use for the OG image
    # Looks for: title: "Something Here",
    title_match = re.search(r'title:\s*["\']([^"\']+)["\']', content)
    
    if not title_match:
        return False
        
    title_raw = title_match.group(1)
    # Let's clean the title to just the tool name if it has a pipe
    title_clean = title_raw.split('|')[0].strip()
    encoded_title = urllib.parse.quote(title_clean)
    new_url = f"/api/og?title={encoded_title}"
    
    # We want to replace any occurrence of "/og-image.jpg" or '/og-image.jpg'
    # with the new API url.
    if '"/og-image.jpg"' in content or "'/og-image.jpg'" in content:
        content = content.replace('"/og-image.jpg"', f'"{new_url}"')
        content = content.replace("'/og-image.jpg'", f'"{new_url}"')
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    root_dir = 'src/app'
    updated_files = 0
    for subdir, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith(('page.js', 'page.tsx', 'layout.tsx', 'layout.js')):
                filepath = os.path.join(subdir, file)
                if process_file(filepath):
                    updated_files += 1

    print(f"OG URLs updated in {updated_files} files.")

if __name__ == "__main__":
    main()
