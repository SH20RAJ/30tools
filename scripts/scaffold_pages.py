import json
import os

base_path = '/Users/shaswatraj/Desktop/earn/30tools'
mapping_path = os.path.join(base_path, 'mapping_results.json')

with open(mapping_path, 'r') as f:
    mapping = json.load(f)

CATEGORY_TO_FOLDER = {
    'audio': '(audio)',
    'developer': '(developer)',
    'downloaders': '(downloaders)',
    'generators': '(generators)',
    'image': '(image)',
    'pdf': '(pdf)',
    'seo': '(seo)',
    'text': '(text)',
    'utilities': '(utilities)',
    'video': '(video)',
    'youtube': '(youtube)',
    'others': '(utilities)'
}

# Double braces for f-string/format escaping in Next.js code
template = """import {{ generateToolMetadata }} from "@/lib/seo-helper";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

const TOOL_ID = "{tool_id}";
const CATEGORY = "{category}";

export async function generateMetadata({{ searchParams }}: any) {{
    const params = await searchParams;
    return generateToolMetadata(TOOL_ID, CATEGORY, params.lang || "en", {{}}, params.variant);
}}

export default async function Page() {{
    return <ToolPlaceholderPage toolId={{TOOL_ID}} />;
}}
"""

created_count = 0
for item in mapping['newTools']:
    master = item['master']
    category = item['category']
    folder_name = CATEGORY_TO_FOLDER.get(category, '(utilities)')
    
    target_dir = os.path.join(base_path, 'src/app', folder_name, master)
    os.makedirs(target_dir, exist_ok=True)
    
    page_path = os.path.join(target_dir, 'page.tsx')
    if not os.path.exists(page_path):
        with open(page_path, 'w') as f:
            f.write(template.format(tool_id=master, category=category))
        created_count += 1

print(f"Scaffolded {created_count} new tool pages.")
