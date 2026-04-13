import os
import re

def fix_file(path):
    with open(path, 'r') as f:
        content = f.read()

    # Pattern to find the JSON.stringify block with SoftwareApplication and HowTo
    # We want to remove the SoftwareApplication part if it's the first element in the array
    pattern = r'(__html:\s*JSON\.stringify\(\[)\s*{\s*"@context":\s*"https://schema\.org",\s*"@type":\s*"SoftwareApplication",.*?(},\s*{\s*"@context":\s*"https://schema\.org",\s*"@type":\s*"HowTo")'
    
    # We use re.DOTALL to match across lines
    new_content = re.sub(pattern, r'\1\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t"@context": "https://schema.org",\n\t\t\t\t\t\t\t"@type": "HowTo"', content, flags=re.DOTALL)

    # Alternative pattern for when it's JUST SoftwareApplication (and we might want to remove the whole script tag or just the schema)
    # But since ToolSeoStructuredData handles it globally, we should ideally remove the local one if it's redundant.
    # If the script tag only has SoftwareApplication:
    # pattern_single = r'<script\s+type="application/ld\+json"\s+dangerouslySetInnerHTML={{[^}]*"@type":\s*"SoftwareApplication"[^}]*}}\s*/>'
    # new_content = re.sub(pattern_single, '', new_content)

    if new_content != content:
        with open(path, 'w') as f:
            f.write(new_content)
        return True
    return False

def main():
    root = '/Users/shaswatraj/Desktop/earn/30tools/src/app'
    files_to_fix = [
        "(image)/logo-generator/page.js",
        "(image)/image-converter/page.js",
        "(image)/favicon-generator/page.js",
        "(image)/photo-enhancer/page.js",
        "(image)/exif-reader/page.js",
        "(pdf)/pdf-to-word/page.js",
        "(developer)/json-formatter/page.js",
        "(developer)/base64-tool/page.js",
        "(pdf)/pdf-editor/page.js",
        "(pdf)/image-to-pdf/page.js",
        "(pdf)/pdf-protect/page.js",
        "(pdf)/pdf-to-image/page.js",
        "(pdf)/word-to-pdf/page.js",
        "(utilities)/password-generator/page.js",
        "(generators)/lorem-ipsum-generator/page.js",
        "(generators)/ai-voice-generator/page.js"
    ]
    
    count = 0
    for f_path in files_to_fix:
        full_path = os.path.join(root, f_path)
        if os.path.exists(full_path):
            if fix_file(full_path):
                print(f"Fixed: {f_path}")
                count += 1
            else:
                print(f"Skipped (no match): {f_path}")
        else:
            print(f"Not found: {full_path}")
    
    print(f"\nTotal files fixed: {count}")

if __name__ == "__main__":
    main()
