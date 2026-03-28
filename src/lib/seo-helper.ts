import type { Metadata } from "next";
import toolsData from "@/constants/tools.json";
import translateEngine from "@/lib/translate";

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

async function buildToolTitle(tool: Tool, category: ToolCategory, lang: string, overrideTitle?: string) {
	if (overrideTitle) return await translateEngine.translate(overrideTitle, lang);
	
	const toolName = await translateEngine.translate(tool.name, lang);
	const suffix = await translateEngine.translate(CATEGORY_TITLE_SUFFIX[category] ?? "Free Online Tool", lang);
	return `${toolName} | ${suffix} | ${SITE_NAME}`;
}

async function buildToolDescription(
	tool: Tool,
	category: ToolCategory,
	lang: string,
	overrideDescription?: string,
) {
	if (overrideDescription) return truncateText(ensureSentence(await translateEngine.translate(overrideDescription, lang)));

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

	const baseDesc = await translateEngine.translate(tool.description, lang);
	const suffix = await translateEngine.translate(trustSuffixByCategory[category] ?? "Free online and easy to use.", lang);

	return truncateText(`${ensureSentence(baseDesc)} ${suffix}`);
}

export async function generateToolMetadata(
	toolId: string,
	category: ToolCategory,
	lang: string = "en",
	overrides: MetadataOverrides = {},
): Promise<Metadata> {
	const categoryData = toolsData.categories[category];
	const tool = categoryData?.tools.find((t: Tool) => t.id === toolId);

	if (!tool) {
		return {
			title: "Tool Not Found | 30Tools",
			description: "The requested tool could not be found.",
		};
	}

	const title = await buildToolTitle(tool, category, lang, overrides.title);
	const description = await buildToolDescription(tool, category, lang, overrides.description);
	const url = `${SITE_URL}${tool.route}${lang !== 'en' ? `?lang=${lang}` : ''}`;
	const image = resolveImageUrl(overrides.image);

	return {
		title: { absolute: title },
		description,
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
			}
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
