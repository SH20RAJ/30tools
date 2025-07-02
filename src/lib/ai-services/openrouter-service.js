'use server';

// Core OpenRouter AI service for all text generation tasks
const OPENROUTER_BASE_URL = 'https://openrouter.ai/api/v1';
const DEFAULT_MODEL = 'deepseek/deepseek-chat-v3-0324'; // Latest DeepSeek V3 model

async function createOpenRouterCompletion(messages, options = {}) {
  try {
    // Validate API key
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      throw new Error('OpenRouter API key not configured. Please check your environment variables.');
    }

    const {
      model = DEFAULT_MODEL,
      temperature = 0.7,
      maxTokens = 4000,
      stream = false,
      ...otherOptions
    } = options;

    const response = await fetch(`${OPENROUTER_BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
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
      let errorMessage = `OpenRouter API error: ${response.status}`;
      try {
        const errorData = await response.json();
        errorMessage += ` - ${errorData.error?.message || errorData.message || 'Unknown error'}`;
      } catch (parseError) {
        const errorText = await response.text();
        errorMessage += ` - ${errorText || 'Unknown error'}`;
      }
      throw new Error(errorMessage);
    }

    const data = await response.json();
    
    // Validate response structure
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error('Invalid response format from OpenRouter API');
    }

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

export async function generateText(prompt, systemPrompt = '', options = {}) {
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

  return createOpenRouterCompletion(messages, options);
}

export async function generateWithTemplate(template, variables, options = {}) {
  let prompt = template;
  
  // Replace template variables
  Object.entries(variables).forEach(([key, value]) => {
    prompt = prompt.replace(new RegExp(`{{${key}}}`, 'g'), value);
  });

  return generateText(prompt, '', options);
}

// Helper function for error handling
export async function handleAIError(error, fallbackMessage = 'AI generation failed') {
  console.error('AI Service Error:', error);
  return {
    success: false,
    error: fallbackMessage
  };
}
