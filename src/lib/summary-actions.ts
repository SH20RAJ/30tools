"use server";

import { generateText } from "./ai-services/openrouter-service.js";
import { downloadYouTubeSubtitles } from "./subtitles-actions.js";

export interface SummaryOptions {
	summaryLength?: "short" | "medium" | "long";
	summaryStyle?: "paragraph" | "bullet-points" | "detailed";
	language?: string;
	includeTimestamps?: boolean;
	includeKeywords?: boolean;
}

export interface SummaryResult {
	success?: boolean;
	data?: {
		summary: string;
		title: string;
		originalTranscript: string;
		wordCount: number;
		duration: number;
		segmentCount: number;
		summaryLength: string;
		summaryStyle: string;
		keywords: string[];
		aiModel?: string;
		generatedAt: string;
		metadata?: any;
	};
	error?: string;
}

// Server action to generate AI-powered YouTube video summary
export async function generateYouTubeSummary(url: string, options: SummaryOptions = {}): Promise<SummaryResult> {
	try {
		console.log("🤖 Starting AI YouTube summary generation for URL:", url);

		if (!url) {
			return { error: "Please provide a YouTube URL" };
		}

		const {
			summaryLength = "medium", // short, medium, long
			summaryStyle = "bullet-points", // paragraph, bullet-points, detailed
			language = "en",
			includeTimestamps = false,
			includeKeywords = true,
		} = options;

		console.log("⚙️ Summary options:", {
			summaryLength,
			summaryStyle,
			language,
			includeTimestamps,
			includeKeywords,
		});

		// Step 1: Download subtitles first
		console.log("📥 Downloading subtitles...");
		const subtitleResult = await downloadYouTubeSubtitles(url, language);

		if (!subtitleResult.success) {
			console.log("❌ Failed to download subtitles:", subtitleResult.error);
			return { error: subtitleResult.error };
		}

		const subtitleData = subtitleResult.data;
		console.log("✅ Subtitles downloaded successfully");
		console.log("📊 Subtitle stats:", {
			segments: subtitleData.segmentCount,
			words: subtitleData.wordCount,
			duration: `${Math.round(subtitleData.duration)}s`,
		});

		// Step 2: Prepare content for AI processing
		const transcript = subtitleData.plainText;
		const title = subtitleData.title;

		if (transcript.split(" ").length < 10) {
			console.log("❌ Transcript too short for meaningful summary");
			return {
				error:
					"The video transcript is too short to generate a meaningful summary.",
			};
		}

		// Step 3: Generate AI summary using OpenRouter
		console.log("🧠 Generating AI summary...");
		const summaryResult = await generateAISummary(transcript, title, {
			summaryLength,
			summaryStyle,
			includeTimestamps,
			includeKeywords,
			segments: includeTimestamps ? subtitleData.segments : null,
		});

		if (!summaryResult.success) {
			console.log("❌ AI summary generation failed:", summaryResult.error);
			return { error: summaryResult.error };
		}

		console.log("✅ AI summary generated successfully");

		return {
			success: true,
			data: {
				summary: summaryResult.summary!,
				title: title,
				originalTranscript: transcript,
				wordCount: subtitleData.wordCount,
				duration: subtitleData.duration,
				segmentCount: subtitleData.segmentCount,
				summaryLength: summaryLength,
				summaryStyle: summaryStyle,
				keywords: summaryResult.keywords || [],
				aiModel: summaryResult.aiModel,
				generatedAt: new Date().toISOString(),
				metadata: subtitleData.metadata,
			},
		};
	} catch (error) {
		console.error("❌ Error in generateYouTubeSummary:", error);
		return {
			error: "Failed to generate video summary. Please try again later.",
		};
	}
}

interface AISummaryOptions extends SummaryOptions {
	segments?: any[] | null;
}

interface AISummaryResult {
	success: boolean;
	summary?: string;
	keywords?: string[];
	aiModel?: string;
	error?: string;
}

// Generate AI-powered summary using OpenRouter
async function generateAISummary(transcript: string, title: string, options: AISummaryOptions): Promise<AISummaryResult> {
	try {
		const {
			summaryLength = "medium",
			summaryStyle = "bullet-points",
			includeTimestamps,
			includeKeywords,
			segments,
		} = options;

		// Build the system prompt
		const systemPrompt = `You are an expert video content analyst and summarizer. Your task is to create comprehensive, accurate summaries of YouTube video transcripts that capture the key points, insights, and value of the content.

Guidelines:
- Focus on the most important and actionable information
- Maintain the original tone and intent of the content
- Be concise but comprehensive
- Highlight key insights, tips, and takeaways
- If technical content, explain concepts clearly
- Remove filler words and repetitive content`;

		// Build the user prompt based on options
		let userPrompt = `Please analyze and summarize the following YouTube video:

**Video Title:** ${title}

**Transcript:**
${transcript}

**Summary Requirements:**
- Length: ${getSummaryLengthDescription(summaryLength)}
- Style: ${getSummaryStyleDescription(summaryStyle)}
${includeKeywords ? "- Include key topics and keywords at the end" : ""}
${includeTimestamps && segments ? "- Include relevant timestamps for major sections" : ""}

Please provide a well-structured summary that captures the essence and value of this video content.`;

		// Add timestamp information if requested
		if (includeTimestamps && segments && segments.length > 0) {
			userPrompt += `\n\n**Available Timestamps for Reference:**\n`;
			// Add some key timestamps (every ~10% of the video)
			const keyTimestamps = segments.filter(
				(_, index) =>
					index % Math.max(1, Math.floor(segments.length / 10)) === 0,
			);
			userPrompt += keyTimestamps
				.slice(0, 10)
				.map(
					(segment) =>
						`${formatTimestamp(segment.start)}: ${segment.text.substring(0, 100)}...`,
				)
				.join("\n");
		}

		console.log("🚀 Sending to OpenRouter AI...");
		const result = await generateText(userPrompt, systemPrompt, {
			temperature: 0.7,
			maxTokens: getSummaryMaxTokens(summaryLength),
		});

		if (!result.success) {
			return { success: false, error: result.error };
		}

		// Extract keywords if requested
		let keywords: string[] = [];
		if (includeKeywords) {
			try {
				console.log("🔍 Extracting keywords...");
				const keywordResult = await extractKeywords(transcript, title);
				if (keywordResult.success) {
					keywords = keywordResult.keywords || [];
				}
			} catch (error: any) {
				console.log("⚠️ Keyword extraction failed:", error.message);
			}
		}

		return {
			success: true,
			summary: result.content,
			keywords: keywords,
			aiModel: result.model,
		};
	} catch (error) {
		console.error("❌ Error in generateAISummary:", error);
		return { success: false, error: "Failed to generate AI summary" };
	}
}

// Extract keywords from the transcript
async function extractKeywords(transcript: string, title: string) {
	try {
		const systemPrompt = `You are a keyword extraction expert. Extract the most relevant and important keywords, topics, and phrases from video content.`;

		const userPrompt = `Extract 10-15 key topics, keywords, and important phrases from this video content:

**Title:** ${title}

**Content:** ${transcript.substring(0, 2000)}...

Please provide a JSON array of keywords/topics, ordered by importance. Focus on:
- Main topics and themes
- Technical terms or concepts
- Important names, tools, or resources mentioned
- Actionable insights or takeaways

Format: ["keyword1", "keyword2", "keyword3", ...]`;

		const result = await generateText(userPrompt, systemPrompt, {
			temperature: 0.3,
			maxTokens: 500,
		});

		if (!result.success) {
			return { success: false, error: result.error };
		}

		// Try to parse JSON from the response
		try {
			const keywordsMatch = result.content.match(/\[([^\]]+)\]/);
			if (keywordsMatch) {
				const keywords = JSON.parse(keywordsMatch[0]);
				return { success: true, keywords: keywords };
			}
		} catch (parseError: any) {
			console.log(
				"⚠️ Could not parse keywords as JSON, extracting manually:",
				parseError.message,
			);
		}

		// Fallback: extract keywords manually
		const keywords = result.content
			.split("\n")
			.map((line) =>
				line
					.replace(/^[-*•]\s*/, "")
					.replace(/['"]/g, "")
					.trim(),
			)
			.filter((line) => line.length > 0 && line.length < 50)
			.slice(0, 15);

		return { success: true, keywords: keywords };
	} catch (error) {
		console.error("❌ Error extracting keywords:", error);
		return { success: false, error: "Failed to extract keywords" };
	}
}

// Helper functions for prompt customization
function getSummaryLengthDescription(length: string) {
	switch (length) {
		case "short":
			return "Brief overview (2-3 sentences, key points only)";
		case "medium":
			return "Comprehensive summary (1-2 paragraphs, main points and context)";
		case "long":
			return "Detailed analysis (3+ paragraphs, comprehensive breakdown with examples)";
		default:
			return "Comprehensive summary (1-2 paragraphs, main points and context)";
	}
}

function getSummaryStyleDescription(style: string) {
	switch (style) {
		case "paragraph":
			return "Flowing paragraphs with smooth transitions";
		case "bullet-points":
			return "Clear bullet points for easy scanning";
		case "detailed":
			return "Structured sections with headings and detailed explanations";
		default:
			return "Clear bullet points for easy scanning";
	}
}

function getSummaryMaxTokens(length: string) {
	switch (length) {
		case "short":
			return 300;
		case "medium":
			return 800;
		case "long":
			return 1500;
		default:
			return 800;
	}
}

// Helper function to format timestamp
function formatTimestamp(seconds: number): string {
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const secs = Math.floor(seconds % 60);

	if (hours > 0) {
		return `${hours}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
	}
	return `${minutes}:${secs.toString().padStart(2, "0")}`;
}

// Server action for quick summary (simplified version)
export async function generateQuickSummary(url: string) {
	console.log("⚡ Generating quick summary for:", url);

	return await generateYouTubeSummary(url, {
		summaryLength: "short",
		summaryStyle: "bullet-points",
		includeTimestamps: false,
		includeKeywords: true,
	});
}

// Server action for detailed summary (comprehensive version)
export async function generateDetailedSummary(url: string, options: SummaryOptions = {}) {
	console.log("📋 Generating detailed summary for:", url);

	return await generateYouTubeSummary(url, {
		summaryLength: "long",
		summaryStyle: "detailed",
		includeTimestamps: true,
		includeKeywords: true,
		...options,
	});
}
