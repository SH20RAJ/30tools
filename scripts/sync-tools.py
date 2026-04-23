import json
import os
import re

TOOLS_JSON = "src/constants/tools.json"
MAPPING_JSON = "scratch/component-mapping.json"
APP_DIR = "src/app"

# Category ID to Group Folder Mapping
CAT_FOLDERS = {
    "generators": "(generators)",
    "image": "(image)",
    "text": "(text)",
    "pdf": "(pdf)",
    "video": "(video)",
    "youtube": "(youtube)",
    "audio": "(audio)",
    "developer": "(developer)",
    "downloaders": "(downloaders)",
    "utilities": "(utilities)",
    "seo": "(seo)",
    "seotoolkit": "(seotoolkit)",
    "content": "(content)",
    "company": "(company)",
    "blog": "(content)",  # Blog is in (content)/blog
    "others": "(others)"
}

EXCLUDED_ROUTES = [
    "/about",
    "/contact",
    "/blog",
    "/search",
    "/all-downloaders",
    "/reddit-downloader" # Manually handled in (downloaders)
]

PAGE_TEMPLATE = """import ToolLayout from "@/components/tools/shared/ToolLayout";
import {import_name} from "{import_path}";
{extra_imports}

export const metadata = {{
	title: "{title}",
	description: "{description}",
	keywords: "{keywords}",
	alternates: {{
		canonical: "https://30tools.com{route}",
	}},
	openGraph: {{
		title: "{title}",
		description: "{description}",
		url: "https://30tools.com{route}",
		siteName: "30tools",
		images: [{{ url: "/og-image.jpg" }}],
		type: "website",
	}},
	twitter: {{
		card: "summary_large_image",
		title: "{title}",
		description: "{description}",
		images: ["/og-image.jpg"],
	}},
	robots: {{ index: true, follow: true }},
}};

export default async function ToolPage() {{
	const tool = {tool_json};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{{{
					__html: JSON.stringify({{
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: tool.name,
						description: tool.description,
						url: "https://30tools.com{route}",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: {{ "@type": "Offer", price: "0", priceCurrency: "USD" }},
					}}),
				}}}}
			/>

			<ToolLayout tool={{{{ ...tool, category: "{category}" }}}}>
				<{comp_render} />
			</ToolLayout>
		</>
	);
}}
"""

def sync():
    with open(TOOLS_JSON, "r") as f:
        tools_data = json.load(f)
    
    with open(MAPPING_JSON, "r") as f:
        mappings = json.load(f)

    for cat_id, cat in tools_data["categories"].items():
        folder_group = CAT_FOLDERS.get(cat_id)
        if not folder_group:
            print(f"Skipping category {cat_id}: No folder mapping found.")
            continue
        
        for tool in cat.get("tools", []):
            route = tool["route"]
            if route in EXCLUDED_ROUTES:
                print(f"Skipping excluded route: {route}")
                continue
            
            slug = route.lstrip("/")
            
            # Determine target path
            # If it's a dynamic route base like /api-key-tester, don't generate individual pages
            if slug.startswith("api-key-tester/"):
                continue
            
            # Special case for nested routes like /api-key-tester/xxx
            if "/" in slug and not slug.startswith("api-key-tester"):
                # Handle nested routes if necessary
                pass
            
            # Determine target path
            # If it's a dynamic route base like /api-key-tester, don't generate individual pages
            if slug.startswith("api-key-tester/"):
                continue

            target_dir = os.path.join(APP_DIR, folder_group, slug)
            os.makedirs(target_dir, exist_ok=True)
            target_file = os.path.join(target_dir, "page.tsx")

            # Get component mapping
            mapping = mappings.get(route)
            if not mapping:
                # Heuristic fallback for missing mappings
                if cat_id == "downloaders":
                    mapping = {"name": "DownloaderEngine", "path": "@/components/tools/downloaders/DownloaderEngine"}
                else:
                    print(f"No mapping for {route}. Using placeholder.")
                    mapping = {"name": "ToolInteractivePlaceholder", "path": "@/components/tools/shared/ToolInteractivePlaceholder"}

            # SEO Title Formula
            if cat_id == "content":
                title = f"{tool['name']} | 30tools Expert Guide"
            else:
                title = f"Free {tool['name']} Online – Fast & No Signup | 30tools"

            desc = tool["description"]
            if cat_id != "content" and "no signup" not in desc.lower():
                desc += " 100% free, fast, and no signup required."
            
            keywords = f"{tool['name'].lower()}, {tool['name'].lower()} guide, 30tools" if cat_id == "content" else f"{tool['name'].lower()}, free {tool['name'].lower()}, online {tool['name'].lower()}, no signup, 30tools"
            
            import_name = mapping["name"]
            import_path = mapping["path"]
            
            # Handle components
            comp_render = import_name
            extra_imports = ""
            if import_name == "DownloaderEngine":
                comp_render = f'DownloaderEngine toolName="{tool["name"]}"'
            elif cat_id == "content" or import_name == "ToolLayout":
                # For content pages, we don't need a tool component
                comp_render = "div className='min-h-[100px]' "
                # Use Fragment as the dummy import
                import_name = "Fragment"
                import_path = "react"
                extra_imports = ""
            
            # Clean up tool object
            tool_for_json = {
                "id": tool["id"],
                "name": tool["name"],
                "description": tool["description"],
                "route": tool["route"],
                "extraSlugs": tool.get("extraSlugs", []),
                "popular": tool.get("popular", False),
                "category": cat_id
            }

            content = PAGE_TEMPLATE.format(
                import_name=import_name,
                import_path=import_path,
                extra_imports=extra_imports,
                title=title.replace('"', '\\"'),
                description=desc.replace('"', '\\"'),
                keywords=keywords.replace('"', '\\"'),
                route=route,
                tool_json=json.dumps(tool_for_json, indent=8),
                category=cat_id,
                comp_render=comp_render
            )

            with open(target_file, "w") as f:
                f.write(content)
            
            # Remove old page.js if page.tsx was created
            old_js = os.path.join(target_dir, "page.js")
            if os.path.exists(old_js):
                os.remove(old_js)

    print("Synchronization complete.")

if __name__ == "__main__":
    sync()
