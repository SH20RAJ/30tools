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
}

interface MetadataOverrides {
	title?: string;
	description?: string;
	keywords?: Metadata["keywords"];
	image?: string;
	robots?: Metadata["robots"];
}

interface ToolJsonLdOverrides {
	name?: string;
	description?: string;
	applicationCategory?: string;
	featureList?: string[];
	screenshot?: string;
	about?: Record<string, unknown>;
	extra?: Record<string, unknown>;
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

const CATEGORY_KEYWORDS: Partial<Record<ToolCategory, string[]>> = {
	audio: ["audio converter", "audio editor", "browser audio tools"],
	developer: ["developer tools", "browser-based developer utilities"],
	image: ["image tools", "image converter", "image editor"],
	pdf: ["pdf tools", "pdf converter", "pdf editor"],
	seo: ["seo tool", "website optimization", "technical seo"],
	text: ["text tools", "text converter", "text utility"],
	utilities: ["online utility", "browser-based tool", "free online tool"],
	video: ["video tools", "video converter", "video editor"],
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

function normalizeToolName(toolId: string, name: string) {
	if (/^(free|advanced|complete)\s+/i.test(name)) {
		return toolId
			.split("-")
			.map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
			.join(" ");
	}

	return name;
}

function buildToolTitle(tool: Tool, category: ToolCategory, overrideTitle?: string) {
	if (overrideTitle) return overrideTitle;
	const toolName = normalizeToolName(tool.id, tool.name);
	const suffix = CATEGORY_TITLE_SUFFIX[category] ?? "Free Online Tool";
	return `${toolName} | ${suffix} | ${SITE_NAME}`;
}

function buildToolDescription(
	tool: Tool,
	category: ToolCategory,
	overrideDescription?: string,
) {
	if (overrideDescription) return truncateText(ensureSentence(overrideDescription));

	const trustSuffixByCategory: Partial<Record<ToolCategory, string>> = {
		audio: "Free online with simple browser-based controls.",
		developer: "Fast, secure, and easy to use in your browser.",
		image: "Free online and easy to use in your browser.",
		pdf: "Free online with secure browser-based processing.",
		seo: "Review issues, improve pages, and act on clear recommendations.",
		text: "Free online with fast browser-based processing.",
		utilities: "Free online, fast, and easy to use.",
		video: "Free online with fast browser-based processing.",
	};

	return truncateText(
		`${ensureSentence(tool.description)} ${trustSuffixByCategory[category] ?? "Free online and easy to use."}`,
	);
}

function buildToolKeywords(tool: Tool, category: ToolCategory, keywords?: Metadata["keywords"]) {
	if (keywords) return keywords;

	const baseName = normalizeToolName(tool.id, tool.name)
		.toLowerCase()
		.replace(/[\/()]/g, " ")
		.replace(/\s+/g, " ")
		.trim();

	return Array.from(
		new Set([
			baseName,
			`${baseName} online`,
			`free ${baseName}`,
			...(CATEGORY_KEYWORDS[category] ?? []),
		]),
	);
}

function getApplicationCategory(category: ToolCategory) {
	const categoryMap: Partial<Record<ToolCategory, string>> = {
		audio: "MultimediaApplication",
		developer: "DeveloperApplication",
		image: "MultimediaApplication",
		pdf: "BusinessApplication",
		seo: "BusinessApplication",
		text: "UtilityApplication",
		utilities: "UtilityApplication",
		video: "MultimediaApplication",
	};

	return categoryMap[category] ?? "UtilityApplication";
}

export function generateToolMetadata(
	toolId: string,
	category: ToolCategory,
	overrides: MetadataOverrides = {},
): Metadata {
	const categoryData = toolsData.categories[category];
	const tool = categoryData?.tools.find((t: Tool) => t.id === toolId);

	if (!tool) {
		return {
			title: "Tool Not Found | 30Tools",
			description: "The requested tool could not be found.",
		};
	}

	const title = buildToolTitle(tool, category, overrides.title);
	const description = buildToolDescription(tool, category, overrides.description);
	const url = `${SITE_URL}${tool.route}`;
	const image = resolveImageUrl(overrides.image);
	const keywords = buildToolKeywords(tool, category, overrides.keywords);

	return {
		title: { absolute: title },
		description,
		keywords,
		alternates: { canonical: url },
		robots: overrides.robots,
		openGraph: {
			title,
			description,
			url,
			siteName: SITE_NAME,
			images: [
				{
					url: image,
					width: 1200,
					height: 630,
					alt: title,
				},
			],
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [image],
			creator: "@30tools",
		},
	};
}

export function generateCategoryMetadata(
	category: ToolCategory,
	overrides: MetadataOverrides = {},
): Metadata {
	const categoryData = toolsData.categories[category];

	if (!categoryData) {
		return {
			title: "Category Not Found | 30Tools",
			description: "The requested tool category could not be found.",
		};
	}

	const url = `${SITE_URL}/${categoryData.slug}`;
	const image = resolveImageUrl(overrides.image);
	const toolCount = categoryData.tools.length;
	const title =
		overrides.title ?? `${categoryData.name} | Free Online ${categoryData.name} | ${SITE_NAME}`;
	const description = truncateText(
		ensureSentence(
			overrides.description ??
				`${toolCount}+ free ${categoryData.name.toLowerCase()} from 30Tools. ${categoryData.description}`,
		),
	);
	const keywords =
		overrides.keywords ??
		Array.from(
			new Set([
				categoryData.name.toLowerCase(),
				`${categoryData.name.toLowerCase()} online`,
				...categoryData.tools.slice(0, 6).map((tool: Tool) => tool.name.toLowerCase()),
			]),
		);

	return {
		title: { absolute: title },
		description,
		keywords,
		alternates: { canonical: url },
		robots: overrides.robots,
		openGraph: {
			title,
			description,
			url,
			siteName: SITE_NAME,
			images: [
				{
					url: image,
					width: 1200,
					height: 630,
					alt: title,
				},
			],
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [image],
			creator: "@30tools",
		},
	};
}

export function generateToolJsonLd(
	toolId: string,
	category: ToolCategory,
	overrides: ToolJsonLdOverrides = {},
) {
	const tool = getToolData(toolId, category);

	if (!tool) return null;

	const description = buildToolDescription(tool, category, overrides.description);

	return {
		"@context": "https://schema.org",
		"@type": "WebApplication",
		name: overrides.name ?? normalizeToolName(tool.id, tool.name),
		description,
		url: `${SITE_URL}${tool.route}`,
		applicationCategory:
			overrides.applicationCategory ?? getApplicationCategory(category),
		operatingSystem: "Any",
		browserRequirements: "Requires JavaScript",
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
		...(overrides.featureList ? { featureList: overrides.featureList } : {}),
		...(overrides.screenshot ? { screenshot: overrides.screenshot } : {}),
		...(overrides.about ? { about: overrides.about } : {}),
		...(overrides.extra ?? {}),
	};
}

export function getToolData(toolId: string, category: ToolCategory) {
	const categoryData = toolsData.categories[category];
	return categoryData?.tools.find((t: Tool) => t.id === toolId);
}
