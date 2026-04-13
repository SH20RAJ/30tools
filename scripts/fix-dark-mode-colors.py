import os
import re

# Configuration
DIRECTORIES = ['src/app', 'src/components']
EXCLUDED_FILES = [
    'src/components/tools/seo/SerpSimulator.jsx',
    'src/components/tools/image/FaviconGeneratorTool.jsx',
    'src/components/tools/design/FaviconGeneratorTool.jsx'
]

REPLACEMENTS = {
    'text-slate-900': 'text-foreground',
    'border-slate-200': 'border-border',
    'bg-slate-50': 'bg-secondary'
}

def process_class_string(class_string):
    # Split classes by whitespace (handles newlines, multiple spaces, etc.)
    try:
        classes = re.split(r'(\s+)', class_string)
    except Exception:
        return class_string
        
    actual_classes = [cls for cls in classes if cls.strip()]
    has_dark_bg = any(cls.startswith('dark:bg-') for cls in actual_classes)
    
    new_parts = []
    for cls in classes:
        if not cls.strip():
            new_parts.append(cls)
            continue
            
        if cls == 'bg-white' and not has_dark_bg:
            new_parts.append('bg-card')
        elif cls in REPLACEMENTS:
            new_parts.append(REPLACEMENTS[cls])
        else:
            new_parts.append(cls)
            
    return "".join(new_parts)

def process_file(file_path):
    rel_path = os.path.relpath(file_path, os.getcwd())
    if any(rel_path == excluded or rel_path.endswith(excluded) for excluded in EXCLUDED_FILES):
        print(f"Skipping excluded file: {rel_path}")
        return

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # 1. First, handle the unconditional replacements globally with word boundaries
    for old, new in REPLACEMENTS.items():
        content = re.sub(r'\b' + re.escape(old) + r'\b', new, content)

    # 2. Handle bg-white with the dark: check within quoted strings
    # This covers className="...", className={`...`}, and other string usages
    def replace_quoted_bg_white(match):
        quote = match.group(1)
        inner = match.group(2)
        if 'bg-white' in inner:
            return f'{quote}{process_class_string(inner)}{quote}'
        return match.group(0)

    # Match single quotes, double quotes, and backticks
    content = re.sub(r'([\"\'`])(.*?)\1', replace_quoted_bg_white, content, flags=re.DOTALL)

    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated: {rel_path}")

def main():
    for directory in DIRECTORIES:
        full_dir_path = os.path.abspath(directory)
        if not os.path.exists(full_dir_path):
            continue
        for root, _, files in os.walk(full_dir_path):
            for file in files:
                if file.endswith(('.js', '.jsx', '.ts', '.tsx')):
                    file_path = os.path.join(root, file)
                    process_file(file_path)

if __name__ == "__main__":
    main()
