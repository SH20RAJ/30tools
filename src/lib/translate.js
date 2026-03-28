import { TranslationServiceClient } from '@google-cloud/translate';

class TranslateEngine {
    constructor() {
        this.apiKey = process.env.GOOGLE_CLOUD_TRANSLATE_API_KEY;
        this.cache = {}; // Initializing early for memory-only worker environment
        
        if (this.apiKey) {
            try {
                this.client = new TranslationServiceClient({
                    apiKey: this.apiKey
                });
            } catch (e) {
                console.error('[TranslateEngine] Failed to initialize client:', e);
            }
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
export default engine;
