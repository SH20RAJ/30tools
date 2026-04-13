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
    # Split classes by whitespace
    classes = class_string.split()
    
    # Check for bg-white and dark: equivalent
    has_bg_white = 'bg-white' in classes
    has_dark_bg = any(cls.startswith('dark:bg-') for cls in classes)
    
    new_classes = []
    for cls in classes:
        if cls == 'bg-white' and not has_dark_bg:
            new_classes.append('bg-card')
        elif cls in REPLACEMENTS:
            new_classes.append(REPLACEMENTS[cls])
        else:
            new_classes.append(cls)
            
    return ' '.join(new_classes)

def process_file(file_path):
    if any(file_path.endswith(excluded) for excluded in EXCLUDED_FILES):
        print(f"Skipping excluded file: {file_path}")
        return

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    # Replace classes in className="..." or class="..."
    def replace_in_match(match):
        prefix = match.group(1)
        class_str = match.group(2)
        suffix = match.group(3)
        return f'{prefix}{process_class_string(class_str)}{suffix}'

    # Regex to find className="..." or class="..."
    # Handles both single and double quotes
    content = re.sub(r'(class(?:Name)?=(["\']))(.*?)\2', replace_in_match, content)

    # Also handle some replacements outside of className if they are literal strings (rare but possible in template literals)
    # But usually the above covers most cases in React/Next.js
    
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated: {file_path}")

def main():
    for directory in DIRECTORIES:
        full_dir_path = os.path.abspath(directory)
        for root, _, files in os.walk(full_dir_path):
            for file in files:
                if file.endswith(('.js', '.jsx', '.ts', '.tsx')):
                    file_path = os.path.join(root, file)
                    # Check relative path for exclusion
                    rel_path = os.path.relpath(file_path, os.getcwd())
                    process_file(file_path)

if __name__ == "__main__":
    main()
