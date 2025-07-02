'use server';

import { generateText, handleAIError } from './openrouter-service.js';

// AI-powered YouTube script generation
export async function generateYouTubeScriptAI(scriptData) {
  try {
    const { topic, videoType, duration, targetAudience, tone, additionalInfo } = scriptData;

    if (!topic) {
      return { error: 'Video topic is required' };
    }

    const systemPrompt = `You are an expert YouTube script writer and content strategist. Create engaging, viral-worthy scripts that maximize viewer retention and engagement. Focus on strong hooks, clear value propositions, and strategic call-to-actions.`;

    const prompt = `Create a professional YouTube video script with the following specifications:

**Video Topic:** ${topic}
**Video Type:** ${videoType}
**Duration:** ${duration} minutes
**Target Audience:** ${targetAudience}
**Tone:** ${tone}
${additionalInfo ? `**Additional Information:** ${additionalInfo}` : ''}

Please structure the script with:
1. **HOOK (0-15 seconds):** Attention-grabbing opening that immediately captures interest
2. **VALUE PROPOSITION (15-30 seconds):** Clear statement of what viewers will learn/gain
3. **MAIN CONTENT:** Well-structured sections with smooth transitions
4. **ENGAGEMENT ELEMENTS:** Strategic moments for likes, comments, subscriptions
5. **CONCLUSION:** Strong wrap-up with clear call-to-action

Make the script conversational, engaging, and optimized for YouTube's algorithm. Include specific timing cues and engagement prompts throughout.`;

    const result = await generateText(prompt, systemPrompt, {
      temperature: 0.8,
      maxTokens: 3000
    });

    if (result.success) {
      return {
        success: true,
        script: result.content,
        metadata: {
          wordCount: result.content.split(' ').length,
          estimatedDuration: duration,
          tone,
          videoType,
          aiModel: result.model
        }
      };
    } else {
      return await handleAIError(result.error, 'Failed to generate YouTube script');
    }
  } catch (error) {
    return await handleAIError(error, 'YouTube script generation failed');
  }
}

// AI-powered YouTube comment response generation
export async function generateCommentResponseAI(requestData) {
  try {
    const { comment, tone, includeQuestion, includeEmoji, channelContext } = requestData;

    if (!comment) {
      return { error: 'Comment is required' };
    }

    const systemPrompt = `You are an expert YouTube community manager. Generate authentic, engaging comment responses that build community and increase engagement. Responses should feel natural and personalized while maintaining the creator's brand voice.`;

    const emojiInstruction = includeEmoji ? 'Include appropriate emojis naturally.' : 'Do not use emojis.';
    const questionInstruction = includeQuestion ? 'Include a thoughtful follow-up question to encourage further engagement.' : 'Focus on responding without asking questions.';
    const contextInstruction = channelContext ? `Channel context: ${channelContext}` : '';

    const prompt = `Generate 4 different response options to this YouTube comment:

**Comment:** "${comment}"
**Response Tone:** ${tone}
**Instructions:** 
- ${emojiInstruction}
- ${questionInstruction}
- Keep responses authentic and conversational
- Vary the length and style across the 4 options
- Make them feel personal and genuine
${contextInstruction}

Provide exactly 4 distinct response options, each on a new line, without numbering or formatting.`;

    const result = await generateText(prompt, systemPrompt, {
      temperature: 0.9,
      maxTokens: 800
    });

    if (result.success) {
      const responses = result.content
        .split('\n')
        .filter(line => line.trim().length > 0)
        .slice(0, 4);

      return {
        success: true,
        responses,
        settings: {
          tone,
          includeQuestion,
          includeEmoji,
          hasContext: !!channelContext,
          aiModel: result.model
        }
      };
    } else {
      return await handleAIError(result.error, 'Failed to generate comment responses');
    }
  } catch (error) {
    return await handleAIError(error, 'Comment response generation failed');
  }
}

// AI-powered YouTube video idea generation
export async function generateYouTubeIdeasAI(requestData) {
  try {
    const { niche, audience, contentType, trendingTopics, videoLength, goalType } = requestData;

    if (!niche) {
      return { error: 'Niche is required' };
    }

    const systemPrompt = `You are a viral YouTube content strategist with deep knowledge of algorithm optimization, trending topics, and audience engagement patterns. Generate creative, data-driven video ideas that have high viral potential.`;

    const trendingInfo = trendingTopics ? `Current trending topics to incorporate: ${trendingTopics}` : '';

    const prompt = `Generate 10 viral YouTube video ideas based on these parameters:

**Niche/Category:** ${niche}
**Target Audience:** ${audience}
**Content Type:** ${contentType}
**Video Length:** ${videoLength}
**Goal:** ${goalType}
${trendingInfo}

For each idea, provide:
1. **Title:** SEO-optimized, click-worthy title
2. **Hook:** Opening line/concept
3. **Key Points:** 3-4 main content points
4. **Viral Potential:** Why this could go viral
5. **Engagement Strategy:** How to maximize comments/likes

Focus on current trends, evergreen appeal, and high engagement potential. Make titles compelling but not clickbait.`;

    const result = await generateText(prompt, systemPrompt, {
      temperature: 0.8,
      maxTokens: 3500
    });

    if (result.success) {
      // Parse the structured response into individual ideas
      const ideas = parseVideoIdeas(result.content);
      
      return {
        success: true,
        ideas,
        metadata: {
          niche,
          audience,
          contentType,
          totalIdeas: ideas.length,
          aiModel: result.model
        }
      };
    } else {
      return await handleAIError(result.error, 'Failed to generate video ideas');
    }
  } catch (error) {
    return await handleAIError(error, 'Video idea generation failed');
  }
}

// AI-powered YouTube timestamp generation
export async function generateTimestampsAI(videoUrl, transcript) {
  try {
    if (!videoUrl && !transcript) {
      return { error: 'Please provide either a YouTube URL or transcript' };
    }

    if (!transcript) {
      return { error: 'Transcript is required for AI timestamp generation' };
    }

    const systemPrompt = `You are an expert video content analyzer. Generate professional YouTube chapter timestamps that improve viewer navigation and engagement. Focus on natural content breaks and compelling chapter titles.`;

    const prompt = `Analyze this video transcript and generate professional chapter timestamps:

**Transcript:**
${transcript}

Create 6-10 chapter timestamps with:
1. **Time:** Format as MM:SS (start with 0:00)
2. **Title:** Compelling, descriptive chapter title (under 50 characters)
3. **Description:** Brief description of the section content

Requirements:
- Start with 0:00 Introduction
- Minimum 30 seconds between chapters
- Use descriptive, keyword-rich titles
- Focus on natural content transitions
- Make titles engaging but accurate

Format as: TIME - TITLE - DESCRIPTION`;

    const result = await generateText(prompt, systemPrompt, {
      temperature: 0.7,
      maxTokens: 1500
    });

    if (result.success) {
      const timestamps = parseTimestamps(result.content);
      
      return {
        success: true,
        timestamps,
        metadata: {
          totalChapters: timestamps.length,
          aiModel: result.model
        }
      };
    } else {
      return await handleAIError(result.error, 'Failed to generate timestamps');
    }
  } catch (error) {
    return await handleAIError(error, 'Timestamp generation failed');
  }
}

// Helper function to parse video ideas from AI response
function parseVideoIdeas(content) {
  const ideas = [];
  const sections = content.split(/\d+\./);
  
  sections.slice(1).forEach((section, index) => {
    const lines = section.trim().split('\n').filter(line => line.trim());
    if (lines.length > 0) {
      const title = lines[0].replace(/\*\*Title:\*\*|\*\*|\*/g, '').trim();
      const hook = extractValue(section, 'Hook');
      const keyPoints = extractValue(section, 'Key Points');
      const viralPotential = extractValue(section, 'Viral Potential');
      const engagement = extractValue(section, 'Engagement Strategy');
      
      ideas.push({
        id: index + 1,
        title: title || `Video Idea ${index + 1}`,
        hook: hook || '',
        keyPoints: keyPoints || '',
        viralPotential: viralPotential || '',
        engagementStrategy: engagement || '',
        category: 'AI Generated'
      });
    }
  });
  
  return ideas;
}

// Helper function to parse timestamps from AI response
function parseTimestamps(content) {
  const timestamps = [];
  const lines = content.split('\n').filter(line => line.trim());
  
  lines.forEach(line => {
    const timeMatch = line.match(/(\d{1,2}:\d{2})/);
    if (timeMatch) {
      const time = timeMatch[1];
      const rest = line.replace(timeMatch[0], '').replace(/^[\s\-]+/, '');
      const parts = rest.split(' - ');
      
      timestamps.push({
        time,
        title: parts[0] || 'Chapter',
        description: parts[1] || ''
      });
    }
  });
  
  return timestamps;
}

// Helper function to extract values from structured text
function extractValue(text, key) {
  const regex = new RegExp(`\\*\\*${key}:?\\*\\*([^\\*]+)`, 'i');
  const match = text.match(regex);
  return match ? match[1].trim() : '';
}
