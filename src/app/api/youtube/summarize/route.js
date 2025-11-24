import { NextResponse } from "next/server";

/**
 * YouTube Video Summarization API
 * Generates summaries, key points, and insights from video transcripts
 */
export async function POST(request) {
    try {
        const { transcript, title, duration } = await request.json();

        if (!transcript) {
            return NextResponse.json(
                { success: false, error: "Transcript is required" },
                { status: 400 }
            );
        }

        // For now, generate a simple summary
        // In production, you would integrate with OpenAI, Gemini, or another LLM
        const summary = generateSummary(transcript, title, duration);
        const keyPoints = extractKeyPoints(transcript);
        const insights = generateInsights(transcript, title);

        return NextResponse.json({
            success: true,
            data: {
                summary,
                keyPoints,
                insights,
            },
        });
    } catch (error) {
        console.error("Summarization error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to generate summary" },
            { status: 500 }
        );
    }
}

/**
 * Generate a summary from transcript
 * TODO: Replace with actual AI integration (OpenAI, Gemini, etc.)
 */
function generateSummary(transcript, title, duration) {
    const sentences = transcript.split(/[.!?]+/).filter(s => s.trim().length > 20);

    // Take first few sentences and last few sentences as a basic summary
    const intro = sentences.slice(0, 3).join(". ") + ".";
    const conclusion = sentences.slice(-2).join(". ") + ".";

    return `This video titled "${title}" (${duration}) covers the following:\n\n${intro}\n\n${conclusion}\n\nNote: This is a basic summary. For AI-powered summaries, integrate with OpenAI or Gemini API.`;
}

/**
 * Extract key points from transcript
 */
function extractKeyPoints(transcript) {
    const sentences = transcript.split(/[.!?]+/).filter(s => s.trim().length > 30);

    // Simple extraction: take sentences with certain keywords
    const keywords = ["important", "key", "main", "first", "second", "third", "finally", "remember", "note"];
    const keyPoints = sentences
        .filter(s => keywords.some(kw => s.toLowerCase().includes(kw)))
        .slice(0, 5)
        .map(s => s.trim());

    // If not enough key points, take evenly distributed sentences
    if (keyPoints.length < 3) {
        const step = Math.floor(sentences.length / 5);
        return sentences
            .filter((_, i) => i % step === 0)
            .slice(0, 5)
            .map(s => s.trim());
    }

    return keyPoints.length > 0 ? keyPoints : [
        "Enable AI integration for intelligent key point extraction",
        "Add your OpenAI or Gemini API key to get better results",
        "This is a placeholder for demonstration purposes"
    ];
}

/**
 * Generate insights from transcript
 */
function generateInsights(transcript, title) {
    const wordCount = transcript.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200); // Average reading speed

    return `Video Analysis:\n\n` +
        `• Total word count: ${wordCount} words\n` +
        `• Estimated reading time: ${readingTime} minutes\n` +
        `• Topic: ${title}\n\n` +
        `To get AI-powered insights, integrate with OpenAI GPT-4 or Google Gemini API. ` +
        `These services can provide deep analysis, sentiment detection, topic extraction, and more.`;
}
