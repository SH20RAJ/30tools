import json
import os
from collections import defaultdict

base_path = '/Users/shaswatraj/Desktop/earn/30tools'
summary_path = os.path.join(base_path, 'tools_summary.json')
missing_path = os.path.join(base_path, 'missing_slugs_report.txt')

with open(summary_path, 'r') as f:
    tools = json.load(f)

with open(missing_path, 'r') as f:
    missing = [line.strip() for line in f if line.strip()]

def get_keywords(text):
    return set(text.replace('-', ' ').lower().split())

# Mapping tools to keywords
tool_keywords = []
for t in tools:
    k = get_keywords(t['name'])
    k.update(get_keywords(t['id']))
    tool_keywords.append((t, k))

mapping_proposal = []
unmatched = []

for slug in missing[:100]: # Sample of 100
    slug_k = get_keywords(slug)
    best_match = None
    best_score = 0
    
    for tool, t_k in tool_keywords:
        score = len(slug_k.intersection(t_k))
        if score > best_score:
            best_score = score
            best_match = tool
    
    if best_score >= 1: # Basic match
        mapping_proposal.append({
            "slug": slug,
            "match": best_match['id'],
            "score": best_score
        })
    else:
        unmatched.append(slug)

print("--- MAPPING PROPOSAL (Sample 100) ---")
for m in mapping_proposal[:20]:
    print(f"{m['slug']} -> {m['match']} ({m['score']})")

print(f"\nTotal Matched in sample: {len(mapping_proposal)}")
print(f"Total Unmatched in sample: {len(unmatched)}")
print("\n--- SAMPLE UNMATCHED ---")
print(unmatched[:20])
