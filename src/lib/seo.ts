import type { Metadata } from "next";

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
	locale?: string;
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
	locale = "en",
}: MetadataProps): Metadata {
	const url = `${BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
	const languages = ["en", "es", "fr", "de", "hi", "it", "pt", "ja", "zh", "ko", "ru", "tr", "vi", "id"];
	
	const languageAlternates: Record<string, string> = {};
	for (const lang of languages) {
		languageAlternates[lang] = `${url}${url.includes("?") ? "&" : "?"}lang=${lang}`;
	}

	return {
		title,
		description,
		alternates: {
			canonical: url,
			languages: languageAlternates,
		},
		openGraph: {
			title,
			description,
			url,
			siteName: "30tools",
			locale: locale === "en" ? "en_US" : locale,
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

/**
 * Generate SoftwareApplication JSON-LD for tools
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
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.8",
			reviewCount: "1250",
		},
	};
}
