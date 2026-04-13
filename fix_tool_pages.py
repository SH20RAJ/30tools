import os
import re

def update_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update import
    old_import = 'import ToolLayout from "@/components/tools/shared/ToolLayout";'
    new_import = 'import ToolLayout from "@/components/tools/shared/ToolLayout";\nimport ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";'
    
    if old_import in content and 'import ToolPlaceholderPage' not in content:
        content = content.replace(old_import, new_import)

    # 2. Replace <PremiumToolPage toolId={TOOL_ID} /> with <ToolPlaceholderPage toolId={tool.id} />
    content = content.replace('<PremiumToolPage toolId={TOOL_ID} />', '<ToolPlaceholderPage toolId={tool.id} />')

    # 3. Replace <PremiumToolPage toolId="some-id" /> with <ToolPlaceholderPage toolId="some-id" />
    content = re.sub(r'<PremiumToolPage toolId="([^"]+)" />', r'<ToolPlaceholderPage toolId="\1" />', content)

    # 4. Handle other PremiumToolPage usages just in case
    content = content.replace('PremiumToolPage', 'ToolPlaceholderPage')

    # 5. Replace TOOL_ID with tool.id if TOOL_ID is used but not defined
    # We only want to replace it if it's NOT defined in the file.
    if 'const TOOL_ID' not in content and 'let TOOL_ID' not in content and 'var TOOL_ID' not in content:
        # Avoid replacing TOOL_ID if it's part of another word, but here it's likely standing alone as a variable
        content = re.sub(r'\bTOOL_ID\b', 'tool.id', content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    # Find all files with PremiumToolPage
    import glob
    files = glob.glob('src/app/**/page.tsx', recursive=True)

    for file_path in files:
        if file_path.endswith('page.tsx'):
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            if 'PremiumToolPage' in content:
                print(f"Updating {file_path}")
                update_file(file_path)

if __name__ == "__main__":
    main()
