import json
import os
import re

def get_keywords(text):
    return set(re.split(r'[\s\-_]+', text.lower()))

SYNONYMS = {
    'photo': 'image',
    'picture': 'image',
    'pic': 'image',
    'graphics': 'image',
    'edit': 'editor',
    'mod': 'editor',
    'fix': 'editor',
    'maker': 'generator',
    'creator': 'generator',
    'builder': 'generator',
    'converter': 'converter',
    'change': 'converter',
    'format': 'converter'
}

def update_tools_json():
    base_path = '/Users/shaswatraj/Desktop/earn/30tools'
    tools_json_path = os.path.join(base_path, 'src/constants/tools.json')
    missing_slugs_path = os.path.join(base_path, 'missing_slugs_report.txt')
    
    if not os.path.exists(tools_json_path):
        print(f"Error: {tools_json_path} not found")
        return
    
    with open(tools_json_path, 'r') as f:
        data = json.load(f)
        
    with open(missing_slugs_path, 'r') as f:
        missing_slugs = [line.strip() for line in f if line.strip()]
        
    all_tools = []
    for cat_id, cat_data in data['categories'].items():
        for tool in cat_data['tools']:
            all_tools.append(tool)
            
    for tool in all_tools:
        tool['keywords_set'] = get_keywords(tool['name'])
        tool['keywords_set'].update(get_keywords(tool['id']))
        # Add synonym expansion
        synonyms_to_add = set()
        for k in tool['keywords_set']:
            for syn, target in SYNONYMS.items():
                if k == target:
                    synonyms_to_add.add(syn)
                if k == syn:
                    synonyms_to_add.add(target)
        tool['keywords_set'].update(synonyms_to_add)
        
        if 'extraSlugs' not in tool:
            tool['extraSlugs'] = []
            
    matched_count = 0
    newly_matched = 0
    unmatched = []
    
    for slug in missing_slugs:
        slug_keywords = get_keywords(slug)
        # Expand slug keywords with synonyms too
        synonyms_to_add = set()
        for k in slug_keywords:
            for syn, target in SYNONYMS.items():
                if k == target:
                    synonyms_to_add.add(syn)
                if k == syn:
                    synonyms_to_add.add(target)
        slug_keywords.update(synonyms_to_add)

        best_match = None
        max_score = 0
        
        # Priority 1: Exact ID match
        for tool in all_tools:
            if tool['id'] == slug:
                best_match = tool
                max_score = 100
                break
        
        # Priority 2: Keyword overlap
        if not best_match:
            for tool in all_tools:
                score = len(slug_keywords.intersection(tool['keywords_set']))
                if score > max_score:
                    max_score = score
                    best_match = tool
                    
        if best_match and max_score >= 1:
            if slug not in best_match['extraSlugs'] and slug != best_match['id']:
                best_match['extraSlugs'].append(slug)
                newly_matched += 1
            matched_count += 1
        else:
            unmatched.append(slug)
            
    for tool in all_tools:
        if 'keywords_set' in tool:
            del tool['keywords_set']
            
    with open(tools_json_path, 'w') as f:
        json.dump(data, f, indent=2)
        
    print(f"Total matched: {matched_count}")
    print(f"Newly added extraSlugs: {newly_matched}")
    print(f"Remaining unmatched slugs: {len(unmatched)}")
    if unmatched:
        print("Sample unmatched:", unmatched[:10])

if __name__ == "__main__":
    update_tools_json()
