'use server';

// Core OpenRouter AI service for all text generation tasks
const OPENROUTER_BASE_URL = 'https://openrouter.ai/api/v1';
const DEFAULT_MODEL = 'deepseek/deepseek-chat-v3-0324'; // Latest DeepSeek V3 model

class OpenRouterService {
  constructor() {
    this.apiKey = process.env.OPENROUTER_API_KEY;
    this.baseUrl = OPENROUTER_BASE_URL;
    this.defaultModel = DEFAULT_MODEL;
  }

  async createCompletion(messages, options = {}) {
    try {
      const {
        model = this.defaultModel,
        temperature = 0.7,
        maxTokens = 4000,
        stream = false,
        ...otherOptions
      } = options;

      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'https://30tools.com',
          'X-Title': '30tools - Free Online Tools',
        },
        body: JSON.stringify({
          model,
          messages,
          temperature,
          max_tokens: maxTokens,
          stream,
          ...otherOptions
        })
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`OpenRouter API error: ${response.status} - ${errorData}`);
      }

      const data = await response.json();
      return {
        success: true,
        content: data.choices[0]?.message?.content || '',
        usage: data.usage,
        model: data.model
      };
    } catch (error) {
      console.error('OpenRouter API Error:', error);
      return {
        success: false,
        error: error.message || 'Failed to generate AI response'
      };
    }
  }

  async generateText(prompt, systemPrompt = '', options = {}) {
    const messages = [];
    
    if (systemPrompt) {
      messages.push({
        role: 'system',
        content: systemPrompt
      });
    }
    
    messages.push({
      role: 'user',
      content: prompt
    });

    return this.createCompletion(messages, options);
  }

  async generateWithTemplate(template, variables, options = {}) {
    let prompt = template;
    
    // Replace template variables
    Object.entries(variables).forEach(([key, value]) => {
      prompt = prompt.replace(new RegExp(`{{${key}}}`, 'g'), value);
    });

    return this.generateText(prompt, '', options);
  }
}

// Export singleton instance
export const openRouterService = new OpenRouterService();

// Helper function for error handling
export async function handleAIError(error, fallbackMessage = 'AI generation failed') {
  console.error('AI Service Error:', error);
  return {
    success: false,
    error: fallbackMessage
  };
}
