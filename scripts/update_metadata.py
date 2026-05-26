#!/usr/bin/env python3
import os
import json
import re
from pathlib import Path

# Paths
BASE_DIR = Path("/Users/shaswatraj/Desktop/earn/30tools")
APP_DIR = BASE_DIR / "src" / "app"
TOOLS_JSON_PATH = BASE_DIR / "src" / "constants" / "tools.json"

# Load tools.json
with open(TOOLS_JSON_PATH, "r", encoding="utf-8") as f:
    tools_data = json.load(f)

# Build a map of route -> tool
tools_map = {}
categories = tools_data.get("categories", {})
for cat_key, cat_val in categories.items():
    for tool in cat_val.get("tools", []):
        tool["category_key"] = cat_key
        tools_map[tool["route"]] = tool

# Base templates designed to be around 110-130 characters so we can pad to exactly 150-160
templates = {
    'generators': "Create custom content with our free {name} online. Generate high-quality outputs instantly with no registration required.",
    'image': "Edit, convert, and compress images with our free {name} online. Crop, resize, and optimize photos in your browser with no signup.",
    'pdf': "Manage, convert, edit, and secure PDF documents with our free {name} online. Safe and private browser-based tool with no registration.",
    'video': "Download, convert, and edit video files instantly with our free {name} online. Fast, secure, and private processing with no signup.",
    'audio': "Process, edit, and convert audio files with our free {name} online. High-quality output and private browser-based tools with no signup.",
    'text': "Format, clean, sort, and analyze text files instantly with our free {name} online. Fast and private browser utility with no signup.",
    'seo': "Audit websites, analyze search rankings, and generate schemas with our free {name} online. Optimize search presence with no signup.",
    'developer': "Format, minify, validate, and convert code snippets with our free {name} online. Secure, local developer utility with no registration.",
    'downloaders': "Save and download media files from multiple platforms with our free {name} online. High-speed downloading with no signup needed.",
    'calculators': "Compute rates, taxes, averages, and conversions with our free {name} online. Quick, accurate browser calculator with no registration.",
    'exam-tools': "Resize and compress files with our free {name} online. Safe and private browser utility for government exam portal applications.",
}

def generate_unique_description(name, category):
    name_clean = name.strip()
    tpl = templates.get(category, "Solve everyday digital tasks instantly using our free {name} online. Fast, secure browser-based utility with no registration.")
    desc = tpl.format(name=name_clean)
    
    # We want exactly 150-160 characters.
    target_min = 150
    target_max = 160
    
    if target_min <= len(desc) <= target_max:
        return desc
        
    if len(desc) > target_max:
        return desc[:157].strip() + "..."
        
    fillers = [
        " 100% free, secure, and fast online tool.",
        " No registration or signup required. Try it free!",
        " Access all features instantly with no usage limits.",
        " Safe, private, and easy browser-based processing.",
        " 100% free and easy to use.",
        " No registration needed.",
        " 100% free and secure.",
        " Fast and free online.",
        " No signup required.",
        " Try it free now.",
        " Free & secure.",
        " Easy to use.",
        " Free online.",
        " 100% free.",
        " Try it free.",
    ]
    
    # Try to find a single filler that brings us into the target range
    for f in fillers:
        candidate = desc + f
        if target_min <= len(candidate) <= target_max:
            return candidate
            
    # Try custom padding
    custom_padding = " 100% free, fast, and secure online utility."
    if len(desc) + len(custom_padding) <= target_max:
        desc += custom_padding
        
    # If still too short, pad
    while len(desc) < target_min:
        desc += " Try it now for free."
        
    # If now it exceeded target_max, truncate cleanly
    if len(desc) > target_max:
        desc = desc[:157].strip() + "..."
        
    return desc

# Walk app directory
modified_count = 0
skipped_count = 0

for root, dirs, files in os.walk(APP_DIR):
    for file in files:
        if file in ("page.tsx", "page.js", "page.jsx", "page.ts"):
            file_path = Path(root) / file
            
            # Compute clean URL path
            relative_path = file_path.relative_to(APP_DIR)
            parts = relative_path.parts[:-1] # Exclude page.tsx
            clean_parts = [p for p in parts if not (p.startswith("(") and p.endswith(")"))]
            
            # Ignore dynamic routes or intent catch-all
            if any(p.startswith("[") and p.endswith("]") for p in clean_parts):
                continue
                
            clean_route = "/" + "/".join(clean_parts)
            if clean_route == "/":
                # Homepage has custom metadata
                continue
                
            # Look up tool in tools.json
            tool = tools_map.get(clean_route)
            if not tool:
                skipped_count += 1
                continue
                
            # Read file content
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
                
            # Check if it exports metadata
            metadata_match = re.search(r"export const metadata = \{[\s\S]*?\n\};", content)
            if not metadata_match:
                # No static metadata block, maybe it is dynamic or uses layout defaults
                skipped_count += 1
                continue
                
            metadata_block = metadata_match.group(0)
            
            # Extract keywords from the metadata block
            kw_match = re.search(r"keywords:\s*[\"`']([\s\S]*?)[\"`']", metadata_block)
            if kw_match:
                keywords = kw_match.group(1).strip()
            else:
                keywords = f"{tool['name'].lower()}, free online tool, no signup, {tool['name'].lower()} online, {tool['category_key']}, 30tools"
                
            # Generate title and description
            category = tool["category_key"]
            if category == "company":
                # For company pages, keep their original layout/title format or generic
                title = f"{tool['name']} - 30tools"
                # Keep their original description if possible or generate one
                desc_match = re.search(r"description:\s*[\"`']([\s\S]*?)[\"`']", metadata_block)
                description = desc_match.group(1).strip() if desc_match else tool["description"]
            else:
                title = f"Free {tool['name']} Online - No Signup | 30tools"
                description = generate_unique_description(tool["name"], category)
                
            # Escape strings to avoid JS syntax errors
            title_escaped = title.replace('"', '\\"')
            description_escaped = description.replace('"', '\\"')
            keywords_escaped = keywords.replace('"', '\\"').replace('\n', ' ').replace('\r', ' ')
            
            # Construct new metadata block
            new_metadata = f"""export const metadata = {{
	title: "{title_escaped}",
	description: "{description_escaped}",
	keywords: "{keywords_escaped}",
	alternates: {{
		canonical: "https://30tools.com{clean_route}",
	}},
	openGraph: {{
		title: "{title_escaped}",
		description: "{description_escaped}",
		url: "https://30tools.com{clean_route}",
		siteName: "30tools",
		images: [{{ url: "/og-image.jpg" }}],
		type: "website",
	}},
	twitter: {{
		card: "summary_large_image",
		title: "{title_escaped}",
		description: "{description_escaped}",
		images: ["/og-image.jpg"],
	}},
	robots: {{ index: true, follow: true }},
}};"""
            
            # Replace in file content
            new_content = content.replace(metadata_block, new_metadata)
            
            # Write back
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(new_content)
                
            modified_count += 1

print(f"Metadata update run complete. Modified: {modified_count}, Skipped/Unhandled: {skipped_count}")
