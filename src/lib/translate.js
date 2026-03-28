
class TranslateEngine {
    constructor() {
        this.apiKey = process.env.GOOGLE_CLOUD_TRANSLATE_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY;
        this.cache = {}; // Initializing early for memory-only worker environment
    }

    async translate(text, targetLang) {
        if (!text || targetLang === 'en' || targetLang === 'default') return text;
        
        const cacheKey = `${targetLang}:${text}`;
        if (this.cache[cacheKey]) {
            return this.cache[cacheKey];
        }

        if (!this.apiKey) {
            // Optional: Log once per session if key is missing
            return text;
        }

        try {
            const url = `https://translation.googleapis.com/language/translate/v2?key=${this.apiKey}`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    q: text,
                    target: targetLang,
                    source: 'en',
                    format: 'text'
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error(`[TranslateEngine] API error:`, errorData);
                return text;
            }

            const data = await response.json();
            const translatedText = data.data.translations[0].translatedText;
            
            this.cache[cacheKey] = translatedText;
            return translatedText;
        } catch (error) {
            console.error(`[TranslateEngine] Translation error for ${targetLang}:`, error);
            return text;
        }
    }

    // Bulk translation for pre-generation
    async translateMany(texts, targetLang) {
        if (!texts || texts.length === 0) return {};
        
        const results = {};
        // Google Translate v2 supports multiple 'q' parameters in a single request
        // but for simplicity and to match the previous interface, we'll iterate
        // or we could optimize this for bulk.
        for (const text of texts) {
            results[text] = await this.translate(text, targetLang);
        }
        return results;
    }
}

const engine = new TranslateEngine();
export default engine;
