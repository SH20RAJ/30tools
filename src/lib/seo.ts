import type { Metadata } from "next";
import { getAllTools, getAllCategories } from "./tools";

/**
 * Centralized SEO utility for 30tools
 */

const BASE_URL = "https://30tools.com";

interface MetadataProps {
	title: string;
	description: string;
	path?: string;
	image?: string;
	noIndex?: boolean;
}

/**
 * Generate standard metadata for a page
 */
export function generateMetadata({
	title,
	description,
	path = "",
	image = "/og-image.jpg",
	noIndex = false,
}: MetadataProps): Metadata {
	const cleanPath = path.startsWith("/") ? path : `/${path}`;
	const canonicalUrl = `${BASE_URL}${cleanPath}`;

	return {
		title,
		description,
		alternates: {
			canonical: canonicalUrl,
		},
		openGraph: {
			title,
			description,
			url: canonicalUrl,
			siteName: "30tools",
			locale: "en_US",
			type: "website",
			images: [
				{
					url: image.startsWith("http") ? image : `${BASE_URL}${image}`,
					width: 1200,
					height: 630,
					alt: title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [image.startsWith("http") ? image : `${BASE_URL}${image}`],
			creator: "@30tools",
		},
		robots: {
			index: !noIndex,
			follow: !noIndex,
			googleBot: {
				index: !noIndex,
				follow: !noIndex,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
	};
}

interface SchemaProps {
	name: string;
	description: string;
	path: string;
	category?: string;
}

/**
 * Generate WebApplication JSON-LD
 */
export function generateWebAppSchema({
	name,
	description,
	path,
	category = "UtilitiesApplication",
}: SchemaProps) {
	return {
		"@context": "https://schema.org",
		"@type": "WebApplication",
		name,
		description,
		url: `${BASE_URL}${path.startsWith("/") ? path : `/${path}`}`,
		applicationCategory: category,
		operatingSystem: "Any",
		offers: {
			"@type": "Offer",
			price: "0",
			priceCurrency: "USD",
		},
		author: {
			"@type": "Organization",
			name: "30tools",
			url: BASE_URL,
		},
	};
}

interface FAQ {
	question: string;
	answer: string;
}

/**
 * Generate FAQ JSON-LD
 */
export function generateFAQSchema(faqs: FAQ[]) {
	if (!faqs || faqs.length === 0) return null;

	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map((faq) => ({
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer,
			},
		})),
	};
}

interface HowToStep {
	title: string;
	description: string;
	image?: string;
}

/**
 * Generate HowTo JSON-LD
 */
export function generateHowToSchema(steps: HowToStep[], toolName: string, toolUrl: string) {
	if (!steps || steps.length === 0) return null;

	return {
		"@context": "https://schema.org",
		"@type": "HowTo",
		name: `How to Use ${toolName}`,
		description: `Step-by-step guide on how to use ${toolName} online for free.`,
		step: steps.map((step, index) => ({
			"@type": "HowToStep",
			position: index + 1,
			name: step.title,
			text: step.description,
			...(step.image && { image: step.image }),
		})),
		totalTime: "PT5M",
		tool: {
			"@type": "HowToTool",
			name: toolName,
		},
		supply: {
			"@type": "HowToSupply",
			name: "Web Browser",
		},
	};
}

interface BreadcrumbItem {
	name: string;
	path: string;
}

/**
 * Generate Breadcrumb JSON-LD
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
	if (!items || items.length === 0) return null;

	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: `${BASE_URL}${item.path}`,
		})),
	};
}

/**
 * Generate SoftwareApplication JSON-LD for tools
 * NOTE: Do NOT add aggregateRating unless there are real, verified reviews visible on the page.
 * Adding fake ratings violates Google's guidelines and undermines user trust.
 */
export function generateToolSchema({
	name,
	description,
	path,
	category = "UtilitiesApplication",
}: SchemaProps) {
	return {
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		name,
		description,
		url: `${BASE_URL}${path.startsWith("/") ? path : `/${path}`}`,
		applicationCategory: category,
		operatingSystem: "Any",
		offers: {
			"@type": "Offer",
			price: "0",
			priceCurrency: "USD",
		},
		// aggregateRating removed - only include if there are real, verified page-specific reviews
	};
}

/**
 * Category-hub URL map: route-group key → canonical hub URL
 */
const CATEGORY_HUB_URLS: Record<string, string> = {
	image: `${BASE_URL}/image-tools`,
	pdf: `${BASE_URL}/pdf-tools`,
	video: `${BASE_URL}/video-tools`,
	audio: `${BASE_URL}/audio-tools`,
	text: `${BASE_URL}/text-tools`,
	seo: `${BASE_URL}/seo-tools`,
	developer: `${BASE_URL}/developer-tools`,
	utilities: `${BASE_URL}/other-tools`,
	generators: `${BASE_URL}/generators`,
	youtube: `${BASE_URL}/youtube-tools`,
	downloaders: `${BASE_URL}/all-downloaders`,
	calculators: `${BASE_URL}/calculators`,
	"exam-tools": `${BASE_URL}/exam-tools`,
};

/**
 * Generate a dynamic CollectionPage JSON-LD schema for a category.
 * Includes all tools in the category as ItemList entries.
 */
export function generateCollectionPageSchema(
	groupKey: string,
	overrides?: { name?: string; description?: string },
) {
	const tools = getAllTools();
	const categories = getAllCategories();
	const category = categories.find(
		(c) =>
			c.slug === groupKey ||
			c.slug === `${groupKey}-tools` ||
			// Handle irregular mappings like 'utilities' → 'utility-tools'
			c.slug === groupKey.replace(/ies$/, "y") + "-tools",
	);

	const categoryName =
		overrides?.name ||
		category?.name ||
		groupKey.charAt(0).toUpperCase() + groupKey.slice(1).replace(/-/g, " ") +
			" Tools";

	const categoryDescription =
		overrides?.description ||
		category?.description ||
		`Free online ${categoryName.toLowerCase()} for everyday tasks.`;

	const hubUrl = CATEGORY_HUB_URLS[groupKey] || `${BASE_URL}/${groupKey}`;

	const categoryTools = tools.filter(
		(t) =>
			t.category === groupKey ||
			t.category === `${groupKey}-tools` ||
			t.category === category?.slug,
	);

	return {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: categoryName,
		description: categoryDescription,
		url: hubUrl,
		mainEntity: {
			"@type": "ItemList",
			numberOfItems: categoryTools.length,
			itemListElement: categoryTools.slice(0, 50).map((tool, index) => ({
				"@type": "ListItem",
				position: index + 1,
				url: `${BASE_URL}${tool.route}`,
				name: tool.name,
			})),
		},
	};
}
