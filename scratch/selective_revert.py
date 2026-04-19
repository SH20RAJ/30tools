import os
import re
import subprocess

TYPESCRIPT_PATTERNS = [
    (r':\s*(?:string|number|boolean|any|unknown|void|never|object|null|undefined|Tool|Tool\[\]|Category|RootLayoutProps|Metadata|StructuredDataProps|FAQ|FAQSchemaProps)(?=\s*[;,\)\{\n])', ''), # Simple types
    (r'as\s+(?:string|number|boolean|any|unknown|Tool|Tool\[\]|Record<[^>]+>)', ''), # Type assertions
    (r'interface\s+\w+\s*{[^}]*}', ''), # Interfaces
    (r'type\s+\w+\s*=\s*[^;]+;', ''), # Type aliases
    (r'<\w+>', ''), # Generics
]

def strip_types(content):
    for pattern, replacement in TYPESCRIPT_PATTERNS:
        content = re.sub(pattern, replacement, content)
    # Remove remaining imports of types if any
    content = re.sub(r'import\s+type\s+{[^}]+}\s+from\s+["\'][^"\']+["\'];?', '', content)
    return content

def main():
    if not os.path.exists('js_files.txt'):
        print("Error: js_files.txt not found.")
        return

    with open('js_files.txt', 'r') as f:
        js_files = [line.strip() for line in f if line.strip()]

    print(f"Total targets: {len(js_files)}")
    
    count = 0
    for target_path in js_files:
        # 1. Try to find native version in current working tree
        source_path = None
        if target_path.endswith('.js'):
            ts_ver = target_path[:-3] + '.ts'
            if os.path.exists(ts_ver): source_path = ts_ver
        elif target_path.endswith('.jsx'):
            ts_ver = target_path[:-4] + '.tsx'
            if os.path.exists(ts_ver): source_path = ts_ver

        if source_path:
            print(f"Converting native TS: {source_path} -> {target_path}")
            with open(source_path, 'r', encoding='utf-8') as f:
                content = f.read()
            clean_content = strip_types(content)
            with open(target_path, 'w', encoding='utf-8') as f:
                f.write(clean_content)
            os.remove(source_path)
            count += 1
        else:
            # 2. If not found as TS, it might be a newly created JS file from today
            # Try to checkout from HEAD (6a81e58)
            try:
                subprocess.run(['git', 'checkout', 'HEAD', '--', target_path], 
                               stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
                if os.path.exists(target_path):
                    print(f"Restored new JS: {target_path}")
                    count += 1
            except subprocess.CalledProcessError:
                # print(f"File {target_path} not found in current or HEAD.")
                pass

    print(f"Selective restoration complete. {count} files processed.")

if __name__ == "__main__":
    main()
