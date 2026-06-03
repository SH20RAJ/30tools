import { getAllTools, type Tool } from "@/lib/tools";
import {
	getRelatedSeoOpportunities,
	getSeoOpportunityByRoute,
	seoOpportunities,
	type SeoDifficulty,
	type MonetizationSafety,
} from "./seo-opportunities";
import { getMonetizationDecision } from "./monetization";

export type ToolSeoInventoryItem = {
	toolSlug: string;
	toolName: string;
	category: string;
	currentTitle: string;
	currentMetaDescription: string;
	currentH1: string;
	currentRoute: string;
	currentSearchIntent: string;
	competitiveDifficulty: SeoDifficulty;
	monetizationSafety: MonetizationSafety;
	bestLongTailOpportunities: string[];
	relatedTools: string[];
	suggestedInternalLinks: string[];
	recommendedCTA: string;
	canonicalStrategy: string;
};

export const extremelyCompetitiveToolSlugs = [
	"pdf-editor",
	"pdf-to-word",
	"word-to-pdf",
	"image-compressor",
	"image-resizer",
	"background-remover",
	"qr-code-generator",
	"word-counter",
	"character-counter",
	"json-formatter",
	"json-validator",
	"base64-tool",
	"base64-encode",
	"base64-decode",
	"url-encode",
	"url-decode",
	"bmi-calculator",
	"age-calculator",
	"percentage-calculator",
	"currency-converter",
	"mortgage-calculator",
	"loan-calculator",
	"youtube-video-downloader",
	"youtube-shorts-downloader",
	"tiktok-downloader",
	"instagram-downloader",
	"instagram-reel-downloader",
	"mp4-to-mp3",
	"ai-image-generator",
	"text-to-speech",
];

const highDifficultyTerms = [
	"converter",
	"generator",
	"formatter",
	"validator",
	"calculator",
	"compressor",
	"resizer",
	"editor",
	"downloader",
];

const lowIntentCategories = new Set(["exam-tools", "seo"]);

function inferDifficulty(tool: Tool): SeoDifficulty {
	const normalized = `${tool.id} ${tool.name}`.toLowerCase();

	if (extremelyCompetitiveToolSlugs.includes(tool.id)) return "extreme";
	if (normalized.includes("downloader") || normalized.includes("mp4 to mp3")) return "extreme";
	if (getSeoOpportunityByRoute(tool.route)?.difficulty) {
		return getSeoOpportunityByRoute(tool.route)!.difficulty;
	}
	if (lowIntentCategories.has(tool.category)) return "low";
	if (tool.category === "developer" && normalized.includes("api key tester")) return "low";
	if (highDifficultyTerms.some((term) => normalized.includes(term))) return "high";
	return "medium";
}

function inferSearchIntent(tool: Tool): string {
	const opportunity = getSeoOpportunityByRoute(tool.route);
	if (opportunity) return opportunity.searchIntent;
	if (tool.category === "downloaders") return "Download or extract media from a platform; high legal and ad-safety risk.";
	if (tool.category === "developer") return "Developer debugging or data transformation utility.";
	if (tool.category === "image") return "Image editing, conversion, compression, or upload preparation.";
	if (tool.category === "calculators") return "Calculator utility for finance, academic, construction, or everyday math.";
	return tool.description || "General online utility task.";
}

function findLongTailOpportunities(tool: Tool): string[] {
	const direct = getSeoOpportunityByRoute(tool.route);
	if (direct) {
		return [direct.keyword, ...getRelatedSeoOpportunities(direct, 5).map((item) => item.keyword)];
	}

	const matches = seoOpportunities.filter(
		(item) => item.parentToolSlug === tool.id || item.parentToolRoute === tool.route,
	);
	if (matches.length > 0) return matches.map((item) => item.keyword).slice(0, 8);

	if (tool.id === "qr-code-generator") {
		return [
			"qr code for restaurant menu",
			"qr code for google form",
			"qr code for wifi",
			"qr code for upi payment",
		];
	}
	if (tool.id === "image-compressor") {
		return [
			"compress image to 10kb",
			"compress image to 20kb",
			"compress image to 50kb",
			"compress signature to 10kb",
		];
	}
	if (tool.category === "developer" && tool.name.toLowerCase().includes("api key")) {
		return [`${tool.name.replace(/ online$/i, "").toLowerCase()}`, "api key tester", "validate api key"];
	}

	return [];
}

function findRelatedToolRoutes(tool: Tool): string[] {
	const direct = getSeoOpportunityByRoute(tool.route);
	if (direct) return getRelatedSeoOpportunities(direct, 6).map((item) => item.route);

	return seoOpportunities
		.filter((item) => item.parentToolSlug === tool.id || item.category.toLowerCase().includes(tool.category))
		.map((item) => item.route)
		.slice(0, 8);
}

export function getCompleteToolSeoInventory(): ToolSeoInventoryItem[] {
	return getAllTools().map((tool) => {
		const opportunity = getSeoOpportunityByRoute(tool.route);
		const monetization = getMonetizationDecision({
			slug: tool.id,
			category: tool.category,
			overrideSafety: opportunity?.monetizationSafety,
		});
		const longTailOpportunities = findLongTailOpportunities(tool);
		const relatedRoutes = findRelatedToolRoutes(tool);

		return {
			toolSlug: tool.id,
			toolName: tool.name,
			category: tool.category,
			currentTitle: tool.seoTitle || `${tool.name} - Free Online Tool | 30tools`,
			currentMetaDescription: tool.seoDescription || tool.description,
			currentH1: opportunity?.h1 || tool.name,
			currentRoute: tool.route,
			currentSearchIntent: inferSearchIntent(tool),
			competitiveDifficulty: inferDifficulty(tool),
			monetizationSafety: monetization.safety,
			bestLongTailOpportunities: longTailOpportunities,
			relatedTools: relatedRoutes,
			suggestedInternalLinks: [
				tool.category === "exam-tools" ? "/exam-image-tools" : "",
				tool.category === "calculators" ? "/student-calculators" : "",
				tool.category === "developer" ? "/api-key-testers" : "",
				...relatedRoutes,
			].filter(Boolean),
			recommendedCTA:
				opportunity?.recommendedCTA ||
				(monetization.safety === "risky"
					? "No ads or aggressive monetization; keep legal notices visible."
					: "Use a contextual Pro, API, or services CTA after the tool result."),
			canonicalStrategy:
				opportunity?.canonicalStrategy ||
				"Self-canonical tool page. Add long-tail child pages for exact-use searches when competition is high.",
		};
	});
}

export const competitiveToolGroups = {
	extreme: extremelyCompetitiveToolSlugs,
	lowHangingFruitClusters: [
		"Indian exam photo and signature tools",
		"Student calculators",
		"API key testers",
		"Developer debugging tools",
		"Small business QR and SEO tools",
		"Specific compression target pages",
	],
};
