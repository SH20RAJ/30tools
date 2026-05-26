import json
import re
import os

tools_file = os.path.join(os.path.dirname(__file__), '../constants/tools.json')

with open(tools_file, 'r', encoding='utf-8') as f:
    data = json.load(f)

# Construct set of all tool routes/ids to avoid conflicts
all_tool_ids = set()
for cat_id, cat_data in data.get('categories', {}).items():
    for tool in cat_data.get('tools', []):
        all_tool_ids.add(tool['id'])
        route_slug = tool['route'].strip('/')
        if route_slug:
            all_tool_ids.add(route_slug)

# Priority tool hand-picked extraSlugs (max 5)
PRIORITY_SLUGS = {
    "ssc-photo-resizer": ["ssc-signature-resizer", "ssc-photo-size", "ssc-image-resizer", "ssc-signature-10kb-20kb", "resize-photo-for-ssc"],
    "upsc-photo-resizer": ["upsc-signature-resizer", "upsc-photo-size", "resize-photo-for-upsc-form", "upsc-image-compressor", "resize-signature-for-upsc"],
    "railway-exam-photo-resizer": ["rrb-photo-resizer", "rrb-signature-resizer", "railway-photo-resizer", "rrb-ntpc-photo-size", "resize-image-for-railway-form"],
    "neet-photo-resizer": ["neet-postcard-photo-resizer", "neet-photo-compressor", "neet-photo-size", "neet-form-photo-resize", "resize-image-for-neet"],
    "jee-photo-resizer": ["jee-main-photo-compressor", "jee-signature-resizer", "jee-main-photo-size", "resize-photo-for-jee-form", "jee-image-compressor"],
    "cuet-photo-resizer": ["cuet-photo-compressor", "cuet-signature-resizer", "cuet-photo-size", "resize-photo-for-cuet-form", "cuet-image-compressor"],
    "ibps-photo-resizer": ["ibps-signature-resizer", "ibps-photo-compressor", "bank-exam-photo-resizer", "bank-exam-signature-resizer", "signature-under-20kb"],
    "pan-card-photo-resizer": ["nsdl-photo-resizer", "pan-signature-resizer", "pan-photo-size-converter", "nsdl-pan-photo-resizer", "pan-card-image-resize"],
    "passport-photo-maker": ["passport-size-photo-maker", "free-passport-photo-maker", "passport-photo-crop", "online-passport-photo-editor", "passport-photo-4x6-sheet"],
    "photo-name-date-editor": ["add-name-date-on-photo", "exam-photo-date-editor", "govt-form-photo-editor", "photo-name-date-editor-online", "name-date-photo-creator"],
    "compress-image-to-20kb": ["image-compressor-20kb", "20kb-jpeg-compressor", "compress-image-under-20kb", "reduce-jpg-size-to-20kb", "jpg-compressor-20kb"],
    "compress-image-to-50kb": ["image-compressor-50kb", "50kb-jpeg-compressor", "compress-image-under-50kb", "reduce-jpg-size-to-50kb", "jpg-compressor-50kb"],
    "resize-image-in-cm": ["photo-size-in-cm", "resize-photo-3.5x4.5cm", "image-cm-resizer", "cm-photo-resizer", "resize-image-to-cm"],
    "resize-image-in-mm": ["photo-size-in-mm", "resize-image-by-millimeter", "mm-photo-resizer", "mm-image-converter", "resize-photo-in-mm"],
    "image-dpi-converter": ["change-image-dpi", "300-dpi-converter", "photo-dpi-changer", "image-dpi-converter-online", "convert-dpi-of-photo"],
    "75-attendance-calculator": ["attendance-percentage-calculator", "attendance-calculator-75", "college-attendance-calculator", "how-many-classes-to-attend", "attendance-percentage-checker"],
    "attendance-shortage-calculator": ["attendance-deficit-calculator", "classes-needed-calculator", "attendance-shortage-estimator", "calculate-classes-needed", "attendance-gap-calculator"],
    "monthly-attendance-calculator": ["monthly-attendance-percentage", "working-days-attendance-calculator", "attendance-percentage-by-month", "monthly-class-attendance", "attendance-tracker-monthly"],
    "sgpa-calculator": ["semester-grade-calculator", "credit-based-sgpa-calculator", "calculate-sgpa-online", "sgpa-to-gpa-converter", "sgpa-marks-calculator"],
    "cgpa-calculator": ["cumulative-grade-calculator", "cgpa-with-credits", "calculate-cgpa-online", "cgpa-marks-calculator", "cgpa-grade-estimator"],
    "cgpa-to-percentage-calculator": ["convert-cgpa-to-percentage", "university-cgpa-percentage", "cgpa-to-percent-formula", "cgpa-percentage-converter", "convert-cgpa-marks"],
    "required-marks-calculator": ["final-exam-marks-needed", "passing-marks-calculator", "calculate-required-marks", "marks-needed-to-pass", "exam-passing-score-calculator"],
    "internal-marks-calculator": ["college-internal-marks", "assignment-marks-calculator", "internal-assessment-calculator", "internal-marks-estimator", "calculate-internals"],
    "negative-marking-calculator": ["exam-score-calculator", "wrong-answer-marks-calculator", "negative-marking-estimator", "negative-marks-calculator", "score-with-negative-marking"],
    "weighted-average-marks-calculator": ["marks-weightage-calculator", "internal-external-marks-calculator", "weighted-marks-estimator", "calculate-weighted-average", "weighted-score-calculator"],
    "brick-calculator": ["bricks-per-square-feet", "brick-quantity-calculator", "wall-brick-calculator", "brick-estimator-online", "estimate-bricks-wall"],
    "cement-calculator": ["cement-bags-calculator", "cement-sand-calculator", "construction-cement-estimate", "cement-estimator-online", "calculate-cement-bags"],
    "concrete-calculator": ["concrete-volume-calculator", "cement-sand-aggregate-calculator", "concrete-mix-estimator", "calculate-concrete-volume", "concrete-slab-calculator"],
    "tile-calculator": ["floor-tile-calculator", "tiles-required-for-room", "tile-cost-calculator", "tiles-estimator-online", "calculate-floor-tiles"],
    "paint-calculator": ["wall-paint-calculator", "paint-quantity-calculator", "paint-cost-calculator", "paint-estimator-online", "calculate-paint-gallons"],
    "wallpaper-calculator": ["wallpaper-roll-calculator", "wall-covering-calculator", "wallpaper-estimator-online", "wallpaper-rolls-needed", "calculate-wallpaper"],
    "plaster-calculator": ["cement-plaster-calculator", "wall-plaster-material-calculator", "plaster-material-estimator", "plaster-cement-sand-ratio", "calculate-plaster"],
    "flooring-cost-calculator": ["room-flooring-estimate", "tile-flooring-cost-calculator", "laminate-flooring-cost", "flooring-estimator-online", "estimate-flooring-price"],
    "water-tank-size-calculator": ["water-tank-capacity-calculator", "family-water-tank-calculator", "water-storage-calculator", "calculate-tank-volume", "water-tank-liter-calculator"],
    "ac-tonnage-calculator": ["ac-size-calculator", "room-ac-calculator", "1-ton-ac-room-size", "air-conditioner-tonnage", "calculate-ac-capacity"],
    "kruti-dev-to-unicode": ["krutidev-converter", "hindi-font-converter", "kruti-to-mangal", "kruti-dev-to-mangal-converter", "convert-krutidev-online"],
    "unicode-to-kruti-dev": ["mangal-to-kruti-dev", "unicode-hindi-converter", "mangal-to-krutidev-online", "unicode-to-kruti-converter", "convert-unicode-to-legacy"],
    "hindi-typing-tool": ["english-to-hindi-typing", "online-hindi-keyboard", "hindi-typing-keyboard", "easy-hindi-typing", "type-in-hindi-online"],
    "hinglish-to-hindi": ["hinglish-to-hindi-converter", "roman-hindi-to-hindi", "english-to-hindi-transliteration", "hinglish-transliteration", "write-hinglish-to-hindi"],
    "hindi-word-counter": ["hindi-character-counter", "hindi-text-counter", "word-counter-hindi", "count-words-in-hindi", "hindi-letter-counter"],
    "hindi-text-cleaner": ["remove-extra-spaces-hindi", "clean-hindi-unicode-text", "hindi-text-formatter", "hindi-unicode-cleaner", "clean-devanagari-text"],
    "marathi-typing-tool": ["english-to-marathi-typing", "marathi-keyboard-online", "type-in-marathi", "marathi-typing-keyboard", "easy-marathi-typing"],
    "bengali-typing-tool": ["english-to-bengali-typing", "bengali-keyboard-online", "type-in-bengali", "bengali-typing-keyboard", "easy-bengali-typing"],
    "devanagari-slug-generator": ["hindi-url-slug", "hindi-transliteration-slug", "devanagari-to-slug", "hindi-slug-maker", "generate-hindi-slug"],
    "hindi-font-preview": ["hindi-font-tester", "devanagari-font-preview", "preview-hindi-fonts", "hindi-typography-preview", "mangal-font-preview"],
    "rent-receipt-generator": ["hra-rent-receipt", "rent-receipt-pdf", "rent-receipt-with-landlord-pan", "free-rent-receipt-generator", "hra-rent-receipt-maker"],
    "simple-invoice-generator": ["free-invoice-pdf", "invoice-maker", "printable-invoice", "free-invoice-maker", "tax-invoice-generator"],
    "leave-application-generator": ["leave-letter-generator", "school-leave-application", "office-leave-application", "leave-letter-writer", "sick-leave-application-maker"],
    "resignation-letter-generator": ["resignation-letter-format", "notice-period-resignation", "formal-resignation-letter", "polite-resignation-maker", "resignation-letter-builder"],
    "study-timetable-generator": ["exam-timetable-maker", "student-planner", "study-schedule-generator", "timetable-creator-online", "make-study-schedule"],
    "daily-planner-generator": ["printable-daily-planner", "schedule-maker", "productivity-planner", "daily-schedule-generator", "daily-agenda-creator"],
    "meeting-minutes-generator": ["mom-format-generator", "meeting-notes-template", "minutes-of-meeting-maker", "mom-template-generator", "meeting-minutes-builder"],
    "checklist-generator": ["printable-checklist-maker", "task-checklist-generator", "to-do-list-generator", "checklist-creator-online", "make-custom-checklist"],
    "cover-letter-generator": ["simple-cover-letter-maker", "job-application-letter-generator", "cover-letter-builder-free", "create-job-cover-letter", "professional-cover-letter-generator"],
    "bio-data-maker": ["marriage-biodata-maker", "job-biodata-format", "biodata-pdf-maker", "marriage-biodata-creator", "resume-biodata-builder"]
}

# Standard synonyms for format checking
SYNONYMS = {
    "jpg": ["jpg", "jpeg", "image", "photo", "picture"],
    "jpeg": ["jpeg", "jpg", "image", "photo", "picture"],
    "png": ["png", "image", "photo", "picture"],
    "gif": ["gif", "image", "photo", "picture"],
    "pdf": ["pdf", "document"],
    "word": ["word", "doc", "docx", "document"],
    "doc": ["doc", "docx", "word", "document"],
    "excel": ["excel", "xls", "xlsx", "sheet", "spreadsheet"],
    "csv": ["csv", "comma-separated"],
    "json": ["json", "object"],
    "xml": ["xml"],
    "yaml": ["yaml"],
    "epub": ["epub", "ebook"]
}

# Set of functional/generic suffixes and prefix words to ignore in intersection checks
GENERIC_WORDS = {
    "free", "online", "tool", "maker", "generator", "converter", "calculator", "editor", "checker", 
    "tester", "changer", "creator", "reader", "remover", "eraser", "builder", "compressor", "optimizer", 
    "resizer", "cropper", "designer", "viewer", "extractor", "picker", "beautifier", "validator", 
    "finder", "generator2", "generator-online", "cutter", "player", "recorder", "analyzer", "reducer",
    "cleaner", "writer", "high", "quality", "hd", "and", "from", "with", "for", "to", "under", "limit",
    "online-free"
}

# Synonym groups to map related terms
SYNONYM_GROUPS = [
    {"image", "photo", "photoes", "photos", "picture", "pictures", "png", "jpg", "jpeg", "gif", "ico", "favicon", "signature", "graphic", "art", "paint", "draw", "collage", "collage-maker"},
    {"text", "string", "word", "words", "char", "chars", "character", "characters", "letter", "letters", "line", "lines", "paragraph", "sentence", "content", "essay", "cleaner"},
    {"audio", "music", "voice", "sound", "mp3", "song", "vocal", "speech", "instrumental", "microphone", "soundtrack", "tts"},
    {"video", "clip", "clips", "movie", "film", "mp4", "reels", "reel", "youtube", "yt", "tiktok", "tt", "facebook", "fb", "ig", "instagram", "twitter", "x", "terabox"},
    {"speed", "fast", "quick", "racer", "performance", "bandwidth", "ping", "test", "wpm", "typing"},
    {"checker", "validator", "tester", "audit", "analyzer", "test", "check", "inspect", "detector", "validator"},
    {"generator", "maker", "creator", "writer", "designer", "builder", "generator2", "generator-online"},
    {"format", "converter", "to", "change"},
    {"calculator", "calc", "formula", "estimator", "average", "percentage", "ratio"},
    {"rent", "receipt", "hra", "landlord", "tenant"},
    {"leave", "letter", "resignation", "notice", "application"},
    {"invoice", "billing", "gst", "tax"},
    {"biodata", "resume", "bio-data", "cv"},
    {"password", "pass", "security", "pwned", "strength"}
]

def stem(word):
    if word.endswith('s') and len(word) > 3:
        return word[:-1]
    return word

def get_synonyms(word):
    word_stem = stem(word)
    syns = {word_stem}
    for group in SYNONYM_GROUPS:
        if any(stem(g) == word_stem for g in group):
            syns.update(stem(g) for g in group)
    return syns

def clean_slugs_for_tool(tool_id, category, extra_slugs):
    if tool_id in PRIORITY_SLUGS:
        return PRIORITY_SLUGS[tool_id]
        
    filtered = []
    to_match = re.match(r'^([a-z0-9]+)-to-([a-z0-9]+)(?:-converter)?$', tool_id)
    is_converter = False
    source_format = None
    dest_format = None
    if to_match:
        is_converter = True
        source_format = to_match.group(1)
        dest_format = to_match.group(2)
        
    for slug in extra_slugs:
        slug_tokens = set(stem(w) for w in slug.split("-"))
        
        if "reddit" in tool_id:
            if "reddit" not in slug_tokens and "subreddit" not in slug_tokens:
                continue
        elif "terabox" in tool_id:
            if "terabox" not in slug_tokens:
                continue
        elif "instagram" in tool_id:
            if not ("instagram" in slug_tokens or "ig" in slug_tokens or "insta" in slug_tokens):
                continue
        elif "youtube" in tool_id:
            if "youtube" not in slug_tokens and "yt" not in slug_tokens:
                continue
        elif "tiktok" in tool_id:
            if "tiktok" not in slug_tokens and "tt" not in slug_tokens:
                continue
        elif "twitter" in tool_id:
            if "twitter" not in slug_tokens and "x-video" not in slug_tokens and "x" not in slug_tokens:
                continue
        elif "pinterest" in tool_id:
            if "pinterest" not in slug_tokens:
                continue
        elif "facebook" in tool_id:
            if "facebook" not in slug_tokens and "fb" not in slug_tokens:
                continue

        if is_converter and source_format and dest_format:
            slug_to_match = re.match(r'.*?([a-z0-9]+)-to-([a-z0-9]+).*', slug)
            if slug_to_match:
                s_src = slug_to_match.group(1)
                s_dst = slug_to_match.group(2)
                src_synonyms = SYNONYMS.get(source_format, [source_format])
                dst_synonyms = SYNONYMS.get(dest_format, [dest_format])
                
                src_ok = any(syn in s_src for syn in src_synonyms) or any(s_src in syn for syn in src_synonyms)
                dst_ok = any(syn in s_dst for syn in dst_synonyms) or any(s_dst in syn for syn in dst_synonyms)
                
                if not (src_ok and dst_ok):
                    rev_src_ok = any(syn in s_src for syn in dst_synonyms)
                    rev_dst_ok = any(syn in s_dst for syn in src_synonyms)
                    if rev_src_ok and rev_dst_ok:
                        continue
            else:
                dst_synonyms = SYNONYMS.get(dest_format, [dest_format])
                src_synonyms = SYNONYMS.get(source_format, [source_format])
                if not (any(syn in slug_tokens for syn in dst_synonyms) or any(syn in slug_tokens for syn in src_synonyms)):
                    continue

        if "pdf" in tool_id and "pdf" not in slug_tokens:
            continue
        if "exif" in tool_id and ("exif" not in slug_tokens and "metadata" not in slug_tokens):
            continue
        if "favicon" in tool_id and ("favicon" not in slug_tokens and "ico" not in slug_tokens):
            continue
        if "password" in tool_id and ("password" not in slug_tokens and "pass" not in slug_tokens):
            continue

        if "image" in tool_id or "photo" in tool_id or "picture" in tool_id or "jpg" in tool_id or "png" in tool_id:
            if "audio" in slug_tokens or "video" in slug_tokens or "mp3" in slug_tokens or "mp4" in slug_tokens:
                continue
        if "video" in tool_id or "mp4" in tool_id:
            if "audio" in slug_tokens and not ("to" in slug_tokens or "convert" in slug_tokens):
                continue
            if "photo" in slug_tokens or "image" in slug_tokens or "jpg" in slug_tokens or "png" in slug_tokens:
                if not ("to" in slug_tokens or "convert" in slug_tokens):
                    continue

        tool_tokens = set(stem(w) for w in tool_id.split("-")) - GENERIC_WORDS
        slug_meaningful_tokens = slug_tokens - GENERIC_WORDS
        
        expanded_tool_tokens = set()
        for t in tool_tokens:
            expanded_tool_tokens.update(get_synonyms(t))
            
        if "exif" in tool_id:
            expanded_tool_tokens.add("metadata")
            expanded_tool_tokens.add("location")
        if "resolution" in tool_id:
            expanded_tool_tokens.add("view")
            expanded_tool_tokens.add("screen")
        if "age" in tool_id:
            expanded_tool_tokens.add("creation")
            expanded_tool_tokens.add("date")
            expanded_tool_tokens.add("channel")

        if expanded_tool_tokens & slug_meaningful_tokens:
            filtered.append(slug)

    unique_filtered = []
    for s in filtered:
        if s not in unique_filtered and s != tool_id and s not in all_tool_ids:
            unique_filtered.append(s)
            
    return unique_filtered[:5]

# Process categories and tools
modified_count = 0
for cat_id, cat_data in data.get('categories', {}).items():
    for tool in cat_data.get('tools', []):
        old_slugs = tool.get('extraSlugs', [])
        new_slugs = clean_slugs_for_tool(tool['id'], cat_id, old_slugs)
        if sorted(old_slugs) != sorted(new_slugs) or len(old_slugs) > 5:
            modified_count += 1
        tool['extraSlugs'] = new_slugs

with open(tools_file, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print(f"Successfully cleaned and optimized {modified_count} tools in tools.json.")
