const { TranslationServiceClient } = require('@google-cloud/translate');
const fs = require('fs');
const path = require('path');

// Cache configuration
const CACHE_PATH = path.join(process.cwd(), 'src/constants/translations.json');

class TranslateEngine {
    constructor() {
        this.apiKey = process.env.GOOGLE_CLOUD_TRANSLATE_API_KEY;
        this.cache = this.loadCache();
        
        if (this.apiKey) {
            this.client = new TranslationServiceClient({
                apiKey: this.apiKey
            });
        } else {
            console.warn('[TranslateEngine] No GOOGLE_CLOUD_TRANSLATE_API_KEY found. Falling back to default strings.');
        }
    }

    loadCache() {
        try {
            if (fs.existsSync(CACHE_PATH)) {
                return JSON.parse(fs.readFileSync(CACHE_PATH, 'utf8'));
            }
        } catch (e) {
            console.error('[TranslateEngine] Failed to load cache:', e);
        }
        return {};
    }

    saveCache() {
        try {
            fs.writeFileSync(CACHE_PATH, JSON.stringify(this.cache, null, 2));
        } catch (e) {
            console.error('[TranslateEngine] Failed to save cache:', e);
        }
    }

    async translate(text, targetLang) {
        if (!text || targetLang === 'en' || targetLang === 'default') return text;
        
        const cacheKey = `${targetLang}:${text}`;
        if (this.cache[cacheKey]) {
            return this.cache[cacheKey];
        }

        if (!this.client) return text;

        try {
            const request = {
                parent: `projects/${process.env.GOOGLE_CLOUD_PROJECT_ID || '30tools-project'}/locations/global`,
                contents: [text],
                mimeType: 'text/plain',
                sourceLanguageCode: 'en',
                targetLanguageCode: targetLang,
            };

            const [response] = await this.client.translateText(request);
            const translatedText = response.translations[0].translatedText;
            
            this.cache[cacheKey] = translatedText;
            this.saveCache();
            
            return translatedText;
        } catch (error) {
            console.error(`[TranslateEngine] Translation error for ${targetLang}:`, error);
            return text;
        }
    }

    // Bulk translation for pre-generation
    async translateMany(texts, targetLang) {
        const results = {};
        for (const text of texts) {
            results[text] = await this.translate(text, targetLang);
        }
        return results;
    }
}

const engine = new TranslateEngine();
module.exports = engine;
