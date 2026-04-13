import os
import re

def migrate_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replacement for import statement
    old_import = 'import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";'
    new_import = 'import PremiumToolPage from "@/components/seo/PremiumToolPage";'
    
    # Replacement for component usage
    # Matches <ToolPlaceholderPage toolId={TOOL_ID} /> or variations
    old_usage = r'<ToolPlaceholderPage\s+toolId={([^}]+)}\s*/>'
    new_usage = r'<PremiumToolPage toolId={\1} />'
    
    changed = False
    
    # Step 1: Replace Import
    if old_import in content:
        content = content.replace(old_import, new_import)
        changed = True
    else:
        # Handle cases with single quotes or slightly different spacing
        content = re.sub(r"import\s+ToolPlaceholderPage\s+from\s+['\"]@/components/tools/ToolPlaceholderPage['\"];?", new_import, content)
        if new_import in content:
            changed = True

    # Step 2: Replace Usage
    new_content, count = re.subn(old_usage, new_usage, content)
    if count > 0:
        content = new_content
        changed = True
        
    if changed:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def main():
    base_dir = '/Users/shaswatraj/Desktop/earn/30tools/src/app'
    migrated_count = 0
    total_files = 0
    
    for root, dirs, files in os.walk(base_dir):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.js'):
                total_files += 1
                file_path = os.path.join(root, file)
                if migrate_file(file_path):
                    migrated_count += 1
                    # print(f"Migrated: {file_path}")
                    
    print(f"Total files checked: {total_files}")
    print(f"Successfully migrated: {migrated_count} files.")

if __name__ == "__main__":
    main()
