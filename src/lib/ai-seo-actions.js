"use server";

import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function analyzeContent(content, keyword) {
    if (!content || !keyword) {
        return { success: false, error: "Content and keyword are required" };
    }

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: `You are an expert SEO Content Strategist and Semantic Analyst. 
          Analyze the provided content for the target keyword. 
          Focus on Topical Authority, Semantic Completeness, and Entity Coverage.
          
          Return a JSON response with the following structure:
          {
            "score": number (0-100),
            "summary": "Brief analysis summary",
            "missingEntities": ["entity1", "entity2", ...],
            "sentiment": "positive" | "neutral" | "negative",
            "readability": "Easy" | "Medium" | "Hard",
            "suggestions": ["suggestion1", "suggestion2", ...]
          }
          Do not include markdown formatting in the response, just raw JSON.`,
                },
                {
                    role: "user",
                    content: `Target Keyword: ${keyword}\n\nContent:\n${content.substring(0, 15000)}`, // Limit content length
                },
            ],
            response_format: { type: "json_object" },
        });

        const result = JSON.parse(completion.choices[0].message.content);
        return { success: true, data: result };
    } catch (error) {
        console.error("AI Content Analysis Error:", error);
        return {
            success: false,
            error: "Failed to analyze content. Please try again.",
        };
    }
}

export async function optimizeForVoiceSearch(topic) {
    if (!topic) {
        return { success: false, error: "Topic is required" };
    }

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: `You are a Voice Search Optimization Expert.
          Generate voice search optimized questions and answers for the given topic.
          Focus on natural language queries (Who, What, Where, How) and concise, direct answers suitable for Featured Snippets.
          
          Return a JSON response with the following structure:
          {
            "questions": [
              {
                "question": "Natural language question?",
                "answer": "Concise direct answer (40-60 words).",
                "intent": "Informational" | "Transactional" | "Navigational"
              },
              ...
            ],
            "strategy": "Brief strategy for voice search optimization for this topic"
          }
          Do not include markdown formatting in the response, just raw JSON.`,
                },
                {
                    role: "user",
                    content: `Topic: ${topic}`,
                },
            ],
            response_format: { type: "json_object" },
        });

        const result = JSON.parse(completion.choices[0].message.content);
        return { success: true, data: result };
    } catch (error) {
        console.error("Voice Search Optimization Error:", error);
        return {
            success: false,
            error: "Failed to generate voice search insights. Please try again.",
        };
    }
}

export async function fixTechnicalSeo(issue) {
    if (!issue) {
        return { success: false, error: "Issue description is required" };
    }

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: `You are a Senior Technical SEO Developer.
          Analyze the provided technical SEO issue or code snippet and provide a fix.
          Generate the correct code (HTML, CSS, JS, .htaccess, robots.txt, Schema JSON-LD, etc.) and an explanation.
          
          Return a JSON response with the following structure:
          {
            "analysis": "Brief analysis of the problem",
            "code": "The corrected code block",
            "language": "html" | "javascript" | "json" | "apache" | "text",
            "explanation": "Step-by-step explanation of the fix"
          }
          Do not include markdown formatting in the response, just raw JSON.`,
                },
                {
                    role: "user",
                    content: `Issue/Code: ${issue}`,
                },
            ],
            response_format: { type: "json_object" },
        });

        const result = JSON.parse(completion.choices[0].message.content);
        return { success: true, data: result };
    } catch (error) {
        console.error("Technical SEO Fix Error:", error);
        return {
            success: false,
            error: "Failed to generate technical fix. Please try again.",
        };
    }
}
