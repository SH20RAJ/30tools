import type { Metadata } from "next";
import toolsData from "@/constants/tools.json";

type ToolCategory = keyof typeof toolsData.categories;

const SITE_NAME = "30Tools";
const SITE_URL = "https://30tools.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

interface Tool {
	id: string;
	name: string;
	description: string;
	route: string;
	category: string;
	faqs?: { question: string; answer: string }[];
	extraSlugs?: string[];
	external?: boolean;
	seoTitle?: string;
	seoDescription?: string;
	keywords?: string[];
}

interface MetadataOverrides {
	title?: string;
	description?: string;
	keywords?: Metadata["keywords"];
	image?: string;
	robots?: Metadata["robots"];
}

const CATEGORY_TITLE_SUFFIX: Partial<Record<ToolCategory, string>> = {
	audio: "Free Audio Tool",
	developer: "Free Developer Tool",
	downloaders: "Free Downloader",
	generators: "Free AI Tool",
	image: "Free Image Tool",
	pdf: "Free PDF Tool",
	seo: "Free SEO Tool",
	text: "Free Text Tool",
	utilities: "Free Online Tool",
	video: "Free Video Tool",
};

function ensureSentence(text: string) {
	const trimmed = text.trim();
	if (!trimmed) return "";
	return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
}

function truncateText(text: string, maxLength = 160) {
	if (text.length <= maxLength) return text;
	const sliced = text.slice(0, maxLength - 1);
	const lastSpace = sliced.lastIndexOf(" ");
	const safeText = lastSpace > 80 ? sliced.slice(0, lastSpace) : sliced;
	return `${safeText.replace(/[ ,;:-]+$/, "")}.`;
}

function resolveImageUrl(image?: string) {
	if (!image) return DEFAULT_IMAGE;
	if (image.startsWith("http://") || image.startsWith("https://")) return image;
	return `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`;
}

function slugToTitle(slug: string) {
	return slug
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
}

function generateKeywords(tool: Tool, category: ToolCategory): string[] {
	const keywords: string[] = [];
	const categoryName = toolsData.categories[category]?.name || category;
	const categoryLower = category.toLowerCase();

	// Add base keywords
	keywords.push(
		"free",
		"online",
		"tool",
		"30tools",
		SITE_URL.replace("https://", ""),
	);

	// Add category-specific keywords
	keywords.push(
		`${categoryLower} tools`,
		`free ${categoryLower} tools`,
		`online ${categoryLower} tools`,
		`best ${categoryLower} tools`,
		`top ${categoryLower} tools`,
	);

	// Add tool name variations
	const toolName = tool.name.toLowerCase();
	keywords.push(
		toolName,
		`${toolName} free`,
		`${toolName} online`,
		`${toolName} tool`,
	);

	// Add tool slug variations as keywords
	if (tool.route) {
		const routeParts = tool.route.replace(/^\//, "").split("/").filter(Boolean);
		routeParts.forEach((part) => {
			if (part.length > 3) {
				keywords.push(part);
			}
		});
	}

	// Add branded keywords
	keywords.push("30tools", "30 tools");

	// Add generic quality keywords
	keywords.push(
		"secure",
		"fast",
		"easy",
		"no registration",
		"no signup",
		"instant",
		"professional",
	);

	// If tool has extraSlugs, include them as keywords
	if (tool.extraSlugs) {
		tool.extraSlugs.forEach((slug) => {
			const slugKeywords = slug.split("-").filter((w) => w.length > 3);
			keywords.push(...slugKeywords);
		});
	}

	// Deduplicate and clean
	return Array.from(new Set(keywords)).filter((k) => k.length > 2);
}

/**
 * Generates SEO metadata for a specific tool.
 * Includes support for extra slugs (search variants).
 */
export function generateToolMetadata(
	toolId: string,
	category: ToolCategory,
	lang: string = "en",
	overrides: MetadataOverrides = {},
	currentSlug?: string,
): Metadata {
	const categoryData = toolsData.categories[category];
	const tool = categoryData?.tools.find((t: any) => t.id === toolId) as
		| Tool
		| undefined;

	if (!tool) {
		return {
			title: "Tool Not Found | 30Tools",
			description: "The requested tool could not be found.",
		};
	}

	// Use extra slug as base for title if available
	let baseTitle = tool.name;
	if (currentSlug && tool.extraSlugs?.includes(currentSlug)) {
		baseTitle = slugToTitle(currentSlug);
	}

	// Prefer SEO-optimized title and description if available
	const optimizedTitle = tool.seoTitle
		? `${tool.seoTitle} | ${SITE_NAME}`
		: null;
	const optimizedDesc = tool.seoDescription ? tool.seoDescription : null;

	const title =
		optimizedTitle ||
		overrides.title ||
		`${baseTitle} | ${CATEGORY_TITLE_SUFFIX[category] ?? "Free Online Tool"} | ${SITE_NAME}`;
	const description = truncateText(
		ensureSentence(optimizedDesc || overrides.description || tool.description),
	);

	// Handle canonical for extra slugs
	const baseUrl = tool.external ? tool.route : `${SITE_URL}${tool.route}`;
	const currentUrl =
		currentSlug && tool.extraSlugs?.includes(currentSlug)
			? `${SITE_URL}/${currentSlug}`
			: baseUrl;

	const url = `${currentUrl}${lang !== "en" ? `?lang=${lang}` : ""}`;
	const image = resolveImageUrl(overrides.image);

	// Generate keywords: use tool.keywords if available, or generate from name/description/category
	const toolKeywords = tool.keywords || [];
	const generatedKeywords = generateKeywords(tool, category);
	const allKeywords = [...toolKeywords, ...generatedKeywords];
	// Deduplicate and limit to 30 keywords max
	const uniqueKeywords = Array.from(new Set(allKeywords)).slice(0, 30);

	return {
		title: { absolute: title },
		description,
		keywords: uniqueKeywords,
		alternates: {
			canonical: url,
			languages: {
				en: `${SITE_URL}${tool.route}?lang=en`,
				es: `${SITE_URL}${tool.route}?lang=es`,
				fr: `${SITE_URL}${tool.route}?lang=fr`,
				de: `${SITE_URL}${tool.route}?lang=de`,
				hi: `${SITE_URL}${tool.route}?lang=hi`,
				it: `${SITE_URL}${tool.route}?lang=it`,
				pt: `${SITE_URL}${tool.route}?lang=pt`,
				ja: `${SITE_URL}${tool.route}?lang=ja`,
				zh: `${SITE_URL}${tool.route}?lang=zh`,
				ko: `${SITE_URL}${tool.route}?lang=ko`,
				ru: `${SITE_URL}${tool.route}?lang=ru`,
				ar: `${SITE_URL}${tool.route}?lang=ar`,
				tr: `${SITE_URL}${tool.route}?lang=tr`,
				vi: `${SITE_URL}${tool.route}?lang=vi`,
				id: `${SITE_URL}${tool.route}?lang=id`,
			},
		},
		openGraph: {
			title,
			description,
			url,
			siteName: SITE_NAME,
			images: [{ url: image }],
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [image],
		},
	};
}

export function getToolData(toolId: string, category: ToolCategory) {
	const categoryData = toolsData.categories[category];
	return categoryData?.tools.find((t: Tool) => t.id === toolId);
}

const LANGUAGES = [
	"en",
	"es",
	"fr",
	"de",
	"hi",
	"it",
	"pt",
	"ja",
	"zh",
	"ko",
	"ru",
	"ar",
	"tr",
	"vi",
	"id",
] as const;

function getLanguageAlternates(basePath: string): Record<string, string> {
	const alternates: Record<string, string> = {};
	for (const lang of LANGUAGES) {
		alternates[lang] = `${SITE_URL}${basePath}?lang=${lang}`;
	}
	return alternates;
}

export function generateCategoryMetadata(
	category: string,
	overrides: MetadataOverrides = {},
): Metadata {
	const categoryData = (toolsData.categories as any)[category];
	const title =
		overrides.title || `${categoryData?.name || category} Tools | 30Tools`;
	const description =
		overrides.description ||
		categoryData?.description ||
		`Free online ${category} tools.`;

	const basePath = `/${categoryData?.slug || category}`;

	return {
		title,
		description,
		keywords: overrides.keywords,
		alternates: {
			canonical: `${SITE_URL}${basePath}`,
			languages: getLanguageAlternates(basePath),
		},
		openGraph: {
			title,
			description,
			url: `${SITE_URL}${basePath}`,
			siteName: SITE_NAME,
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
		},
		robots: overrides.robots || { index: true, follow: true },
	};
}

export function generateToolJsonLd(
	toolId: string,
	category: string,
	overrides: any = {},
) {
	const categoryData = (toolsData.categories as any)[category];
	const tool = categoryData?.tools.find((t: any) => t.id === toolId);

	if (!tool) return {};

	const toolUrl = `${SITE_URL}${tool.route}`;

	return {
		"@context": "https://schema.org",
		"@type": "WebApplication",
		name: overrides.name || tool.name,
		description: overrides.description || tool.description,
		applicationCategory: overrides.applicationCategory || category,
		operatingSystem: "Web Browser",
		url: toolUrl,
		isAccessibleForFree: true,
		offers: {
			"@type": "Offer",
			price: "0",
			priceCurrency: "USD",
		},
		provider: {
			"@type": "Organization",
			name: "30tools",
			url: SITE_URL,
		},
		...overrides,
	};
}
