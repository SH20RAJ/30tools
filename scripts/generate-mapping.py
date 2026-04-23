import os
import re
import json

COMP_DIR = "src/components/tools"
MAPPING_FILE = "scratch/component-mapping.json"

def generate_mapping():
    mapping = {}
    
    # Common mappings
    for root, dirs, files in os.walk(COMP_DIR):
        for file in files:
            if file.endswith(".jsx") or file.endswith(".tsx"):
                path = os.path.join(root, file)
                with open(path, "r") as f:
                    content = f.read()
                    match = re.search(r"export default function (\w+)", content)
                    if match:
                        comp_name = match.group(1)
                        # Derive slug from filename
                        slug = file.replace("Tool.jsx", "").replace("Tool.tsx", "").lower()
                        # Map route (slug) to {path, name}
                        import_path = "@" + path.split("src")[1].replace(".jsx", "").replace(".tsx", "")
                        
                        # Use the route (slug) as the key
                        # For many tools, the route is just /slug
                        # We'll try to find a better way if needed, but for now slug works
                        mapping[slug] = {"path": import_path, "name": comp_name}
    
    # Special overrides
    mapping["downloader"] = {"path": "@/components/tools/downloaders/DownloaderEngine", "name": "DownloaderEngine"}
    
    # Save mapping
    os.makedirs(os.path.dirname(MAPPING_FILE), exist_ok=True)
    with open(MAPPING_FILE, "w") as f:
        json.dump(mapping, f, indent=4)
    
    print(f"Generated mapping for {len(mapping)} tools in sync-ready format.")

if __name__ == "__main__":
    generate_mapping()
