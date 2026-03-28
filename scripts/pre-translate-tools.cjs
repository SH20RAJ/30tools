const fs = require('fs');
const path = require('path');
const translate = require('../src/lib/translate');

const toolsPath = path.join(__dirname, '../src/constants/tools.json');
const tools = JSON.parse(fs.readFileSync(toolsPath, 'utf8'));

const LANGUAGES = [
    'hi', 'es', 'fr', 'de', 'id', 'ja', 'ko', 'pt', 'ru', 'zh', 'ar', 'vi', 'tr', 'it'
];

async function translateTools() {
    console.log('[Pre-translate] Gathering all translatable text...');
    
    const translatableStrings = new Set();
    
    // Add Category Names & Descriptions
    Object.values(tools.categories).forEach(cat => {
        translatableStrings.add(cat.name);
        translatableStrings.add(cat.description);
        
        // Add Tool Names & Descriptions
        cat.tools.forEach(tool => {
            translatableStrings.add(tool.name);
            translatableStrings.add(tool.description);
        });
    });

    const uniqueStrings = Array.from(translatableStrings);
    console.log(`[Pre-translate] Found ${uniqueStrings.length} unique strings to translate into ${LANGUAGES.length} languages.`);

    for (const lang of LANGUAGES) {
        process.stdout.write(`[Pre-translate] Translating into ${lang}... `);
        await translate.translateMany(uniqueStrings, lang);
        console.log('Done.');
    }

    console.log('[Pre-translate] Successfully updated the translation cache.');
}

translateTools().catch(console.error);
