const fs = require('fs');
const toolsData = JSON.parse(fs.readFileSync('src/constants/tools.json', 'utf8'));

const mappings = {
    "bio-generator": {
        name: "Bio Generator",
        description: "Create professional and aesthetic bios for social media profiles.",
        category: "generators",
        slugs: ["aesthetic-bio-generator", "instagram-bio-generator", "stylish-bio-generator", "tiktok-bio-generator", "free-social-media-bio-maker"]
    },
    "business-name-generator": {
        name: "Business Name Generator",
        description: "Generate creative and catchy names for your brand or startup.",
        category: "generators",
        slugs: ["ai-business-name-generator", "brand-name-generator", "business-name-generator", "startup-name-generator", "brand-identity-maker"]
    },
    "ai-poem-generator": {
        name: "AI Poem Generator",
        description: "Create beautiful poems, haikus, and rhymes using artificial intelligence.",
        category: "generators",
        slugs: ["ai-poetry-generator", "free-poetry-maker", "haiku-generator", "love-poem-generator", "poem-generator-ai", "rhyme-generator"]
    },
    "css-gradient-generator": {
        name: "CSS Gradient Generator",
        description: "Create beautiful CSS gradients for your web projects.",
        category: "developer",
        slugs: ["background-gradient-creator", "css-gradient-maker", "css-gradient-generator", "css3-gradient-maker", "gradient-color-generator", "gradient-generator", "linear-gradient-generator", "web-gradient-creator", "web-gradient-generator", "background-gradient-tool"]
    },
    "css-shadow-generator": {
        name: "CSS Shadow Generator",
        description: "Generate CSS box shadows and text shadows for modern web design.",
        category: "developer",
        slugs: ["box-shadow-generator-online", "css-shadow-maker"]
    },
    "icon-generator": {
        name: "Icon Generator",
        description: "Generate app icons and favicons for Android, iOS, and web applications.",
        category: "image",
        slugs: ["android-icon-maker", "app-icon-generator", "icon-generator", "ios-app-icon-creator", "web-app-icon-generator", "website-icon-generator"]
    },
    "fake-chat-generator": {
        name: "Fake Chat Generator",
        description: "Create realistic-looking fake chat screenshots for WhatsApp, Discord, and iMessage.",
        category: "generators",
        slugs: ["fake-chat-generator", "fake-discord-chat-generator", "fake-imessage-generator", "fake-instagram-dm-generator", "fake-whatsapp-chat-generator"]
    },
    "excuse-generator": {
        name: "Excuse Generator",
        description: "Generate creative excuses for any situation.",
        category: "generators",
        slugs: ["best-excuse-generator", "excuse-generator"]
    },
    "audio-converter": {
        name: "Audio Converter",
        description: "Convert audio files between MP3, WAV, M4A, OGG, and more.",
        category: "calculators",
        slugs: ["change-audio-format", "audio-converter", "audio-converter-mp3", "convert-audio-format", "m4a-audio-converter", "ogg-audio-converter", "wav-audio-converter", "mp3-converter", "mp3-converter-online", "wav-file-to-mp3-online", "ogg-to-mp3-converter", "m4a-to-mp3-online"]
    },
    "video-converter": {
        name: "Video Converter",
        description: "Convert video files between MP4, AVI, MKV, MOV, and more.",
        category: "video",
        slugs: ["change-video-type", "convert-video-format", "video-converter", "avi-to-mp4-converter", "mkv-to-mp4-converter", "mov-to-mp4-converter", "webm-to-mp4-converter", "flv-to-mp4-converter"]
    },
    "code-formatter": {
        name: "Code Formatter",
        description: "Format and beautify HTML, CSS, JavaScript, and SQL code.",
        category: "developer",
        slugs: ["format-html-css-js", "format-sql-online", "web-code-compressor", "css-compressor", "js-compressor-minifier"]
    },
    "password-checker": {
        name: "Password Security Checker",
        description: "Check the strength and security of your passwords against known breaches.",
        category: "calculators",
        slugs: ["check-password-security", "check-pwned-password", "password-breach-checker", "have-i-been-pwned-password", "data-breach-password-search", "password-leak-check", "password-safety-checker", "password-strength-checker", "password-tester-online"]
    },
    "video-editor": {
        name: "Video Editor",
        description: "Edit, cut, and merge video files online for free.",
        category: "video",
        slugs: ["cut-and-merge-video", "cut-video-length", "shorten-video-clip", "screen-capture-video", "edit-video-online"]
    },
    "image-editor": {
        name: "Image Editor",
        description: "Edit, crop, and enhance your photos online with our free image editing tools.",
        category: "image",
        slugs: ["crop-and-edit-photos", "edit-pictures-free", "fix-blurry-photos", "image-editor", "online-collage-maker", "photo-collage-maker", "picture-collage-creator", "aesthetic-collage-maker"]
    }
};

// Existing tool updates
const existingMoves = {
    "facebook-video-downloader": ["download-fb-video", "fb-video-saver", "facebook-story-downloader"],
    "instagram-video-downloader": ["insta-video-saver", "instagram-reels-to-mp4", "insta-story-size-converter", "instagram-story-dimensions-fix"],
    "image-compressor": ["compress-image-online", "reduce-image-size", "shrink-image-file-size-free", "shrink-image-file-size", "compress-jpeg-png"],
    "image-resizer": ["resize-image-online", "resize-picture-pixels", "scale-image", "change-image-dimensions", "resize-image-for-social-media", "resize-image-for-etsy-banner"],
    "image-cropper": ["circular-image-crop", "square-photo-cropper", "free-picture-cropper", "crop-image-online"],
    "image-converter": ["image-format-changer", "convert-image-to-jpg"],
    "sitemap-generator": ["website-map-maker", "visual-sitemap-generator"],
    "meta-tag-generator": ["html-head-tags-maker", "seo-meta-tags-generator"],
    "password-generator": ["configurable-password-tool", "create-strong-password", "custom-password-maker", "generate-secure-password", "password-generator2", "secure-password-creator", "secure-pass-generator"],
    "video-compressor": ["compress-video-for-whatsapp", "reduce-video-size"],
    "audio-editor": ["edit-audio-online", "extract-mp3-from-video"]
};

// Flatten all slugs to remove
const slugsToRemove = new Set();
Object.values(mappings).forEach(m => m.slugs.forEach(s => slugsToRemove.add(s)));
Object.values(existingMoves).forEach(sList => sList.forEach(s => slugsToRemove.add(s)));

// 1. Remove slugs from all existing tools
Object.values(toolsData.categories).forEach(category => {
    category.tools.forEach(tool => {
        if (tool.extraSlugs) {
            tool.extraSlugs = tool.extraSlugs.filter(s => !slugsToRemove.has(s));
        }
    });
});

// 2. Create new tools
Object.entries(mappings).forEach(([id, config]) => {
    const categoryKey = config.category;
    const category = toolsData.categories[categoryKey];
    if (!category) return;

    // Check if tool already exists
    let tool = category.tools.find(t => t.id === id);
    if (!tool) {
        tool = {
            id: id,
            name: config.name,
            description: config.description,
            route: `/${id}`,
            extraSlugs: config.slugs.filter(s => s !== id),
            popular: false,
            category: categoryKey
        };
        category.tools.push(tool);
    } else {
        // Add slugs to existing tool
        if (!tool.extraSlugs) tool.extraSlugs = [];
        config.slugs.forEach(s => {
            if (s !== tool.id && !tool.extraSlugs.includes(s)) {
                tool.extraSlugs.push(s);
            }
        });
    }
});

// 3. Move slugs to existing tools
Object.entries(existingMoves).forEach(([targetId, slugs]) => {
    let found = false;
    Object.values(toolsData.categories).forEach(category => {
        const tool = category.tools.find(t => t.id === targetId);
        if (tool) {
            if (!tool.extraSlugs) tool.extraSlugs = [];
            slugs.forEach(s => {
                if (s !== tool.id && !tool.extraSlugs.includes(s)) {
                    tool.extraSlugs.push(s);
                }
            });
            found = true;
        }
    });
});

fs.writeFileSync('src/constants/tools.json', JSON.stringify(toolsData, null, 4));
console.log('Redistribution complete!');
