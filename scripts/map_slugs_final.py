import json
import os
import re
from collections import defaultdict

base_path = '/Users/shaswatraj/Desktop/earn/30tools'
summary_path = os.path.join(base_path, 'tools_summary.json')
missing_path = os.path.join(base_path, 'missing_slugs_report.txt')

with open(summary_path, 'r') as f:
    existing_tools = json.load(f)

with open(missing_path, 'r') as f:
    missing_slugs = [line.strip() for line in f if line.strip()]

# 1. Prepare existing tools keyword index
tool_index = []
for tool in existing_tools:
    keywords = set(tool['name'].lower().split()) | set(tool['id'].lower().split('-'))
    tool_index.append({
        "tool": tool,
        "keywords": keywords,
        "category": tool['category']
    })

# 2. Categorization Rules
CATEGORIES = ['generators', 'image', 'text', 'pdf', 'video', 'youtube', 'audio', 'developer', 'downloaders', 'utilities', 'seo', 'others']
CATEGORY_KEYWORDS = {
    'image': {'image', 'photo', 'picture', 'jpg', 'png', 'webp', 'jpeg', 'svg', 'gif', 'icon', 'logo', 'resize', 'compress', 'convert', 'edit', 'crop', 'background', 'transparency'},
    'pdf': {'pdf', 'merge', 'split', 'rotate', 'compress', 'edit', 'convert', 'sign', 'unlock', 'protect'},
    'video': {'video', 'mp4', 'mov', 'avi', 'mkv', 'trim', 'cut', 'merge', 'compress', 'convert', 'download', 'tiktok', 'reel', 'story', 'instagram', 'youtube', 'facebook', 'twitter', 'terabox', 'vimeo'},
    'text': {'text', 'word', 'character', 'line', 'letter', 'case', 'sort', 'remove', 'extract', 'reverse', 'duplicate', 'random', 'generator', 'converter', 'binary', 'ascii', 'hex', 'base64'},
    'developer': {'json', 'xml', 'yaml', 'csv', 'sql', 'code', 'format', 'beautify', 'minify', 'obfuscator', 'regex', 'api', 'curl', 'http', 'jwt', 'debug', 'base64', 'hash', 'encryption'},
    'downloaders': {'download', 'saver', 'save', 'tiktok', 'instagram', 'facebook', 'twitter', 'reel', 'video', 'playlist', 'mp3', 'mp4'},
    'seo': {'seo', 'keyword', 'meta', 'rank', 'serp', 'backlink', 'sitemap', 'robots', 'index', 'audit', 'speed', 'optimization', 'checker'},
    'audio': {'audio', 'mp3', 'wav', 'ogg', 'compress', 'convert', 'trim', 'cut', 'voice', 'sound'},
    'youtube': {'youtube', 'yt', 'downloader', 'thumbnail', 'tag', 'title', 'description', 'channel', 'playlist'},
    'generators': {'generate', 'maker', 'creator', 'random', 'password', 'name', 'ai', 'mockup'},
    'utilities': {'calculate', 'unit', 'currency', 'time', 'date', 'age', 'percentage', 'loan', 'bmi', 'coordinate', 'ip', 'domain', 'lookup'}
}

def get_best_category(slug):
    words = set(slug.lower().split('-'))
    best_cat = 'others'
    max_score = 0
    for cat, kws in CATEGORY_KEYWORDS.items():
        score = len(words.intersection(kws))
        if score > max_score:
            max_score = score
            best_cat = cat
    return best_cat

results = {
    "extraSlugsMapping": defaultdict(list), # existing_tool_id -> [slugs]
    "newTools": defaultdict(list)           # new_master_slug -> [extra_slugs]
}

# 3. Process each missing slug
for slug in missing_slugs:
    slug_words = set(slug.lower().split('-'))
    
    # Check for direct mapping to existing tool
    best_tool = None
    best_score = 0
    for entry in tool_index:
        score = len(slug_words.intersection(entry['keywords']))
        if score > best_score:
            best_score = score
            best_tool = entry['tool']
    
    # Threshold for mapping to existing tool
    # If the score is high enough or it's a very specific match
    if best_score >= 2 or (best_score == 1 and len(slug_words) <= 2):
        results["extraSlugsMapping"][best_tool['id']].append(slug)
    else:
        # It's a candidate for a new tool
        # For simplicity, we'll pick a "Master" by finding existing clusters or creating one
        matched_new = False
        for master in results["newTools"]:
            master_words = set(master.split('-'))
            if len(slug_words.intersection(master_words)) >= 2:
                results["newTools"][master].append(slug)
                matched_new = True
                break
        
        if not matched_new:
            results["newTools"][slug].append(slug)

# 4. Final refinement
# If a new tool cluster only has 1 slug, maybe check again if it belongs to others
# Or just keep it as a new tool.

# Convert defaultdict to normal dict for JSON
final_results = {
    "extraSlugsMapping": dict(results["extraSlugsMapping"]),
    "newTools": []
}

for master, extra in results["newTools"].items():
    final_results["newTools"].append({
        "master": master,
        "extraSlugs": extra,
        "category": get_best_category(master)
    })

with open(os.path.join(base_path, 'mapping_results.json'), 'w') as f:
    json.dump(final_results, f, indent=2)

print(f"Mapped to existing: {sum(len(v) for v in final_results['extraSlugsMapping'].values())}")
print(f"New tools to create: {len(final_results['newTools'])}")
print(f"Slugs covered by new tools: {sum(len(t['extraSlugs']) for t in final_results['newTools'])}")
