import type { MetadataRoute } from "next";
import { getAllCategories, getAllTools, SUPPORTED_LANGUAGES } from "@/lib/tools";

const BASE_URL = "https://30tools.com";

export default function sitemap(): MetadataRoute.Sitemap {
	const allTools = getAllTools();
	const allCategories = getAllCategories();
	const currentDate = new Date();

	// 1. Static Pages
	const staticPages: MetadataRoute.Sitemap = [
		{ url: BASE_URL, lastModified: currentDate, changeFrequency: "daily", priority: 1.0 },
		{ url: `${BASE_URL}/search`, lastModified: currentDate, changeFrequency: "daily", priority: 0.8 },
		{ url: `${BASE_URL}/about`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.7 },
		{ url: `${BASE_URL}/contact`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.7 },
		{ url: `${BASE_URL}/privacy`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.7 },
		{ url: `${BASE_URL}/terms`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.7 },
		{ url: `${BASE_URL}/blog`, lastModified: currentDate, changeFrequency: "daily", priority: 0.8 },
	];

	// 2. Category Pages
	const categoryPages: MetadataRoute.Sitemap = allCategories.map((cat) => ({
		url: `${BASE_URL}/${cat.slug}`,
		lastModified: currentDate,
		changeFrequency: "weekly",
		priority: 0.85,
	}));

	// 3. Tool Pages (English/Default)
	const toolPages: MetadataRoute.Sitemap = allTools.map((tool) => {
		const route = tool.route.startsWith("/") ? tool.route : `/${tool.route}`;
		const separator = route.includes("?") ? "&" : "?";
		
		// Build alternates for all supported languages
		const alternatesLanguages: Record<string, string> = {
			en: `${BASE_URL}${route}`
		};
		
		SUPPORTED_LANGUAGES.filter(l => l !== "en").forEach((lang) => {
			alternatesLanguages[lang] = `${BASE_URL}${route}${separator}lang=${lang}`;
		});

		return {
			url: `${BASE_URL}${route}`,
			lastModified: currentDate,
			changeFrequency: "weekly",
			priority: tool.popular ? 0.9 : 0.8,
			alternates: {
				languages: alternatesLanguages
			}
		};
	});

	// 4. Tool Guides Index
	const toolGuidesIndex: MetadataRoute.Sitemap = [
		{ url: `${BASE_URL}/tool-guides`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.85 },
	];

	// 5. Tool Guide Category Pages
	const toolGuideCategoryPages: MetadataRoute.Sitemap = allCategories.map((category) => ({
		url: `${BASE_URL}/tool-guides/${category.slug}`,
		lastModified: currentDate,
		changeFrequency: "weekly",
		priority: 0.8,
	}));

	// 6. Blog & Content
	const blogPages: MetadataRoute.Sitemap = allTools
		.filter(t => t.category === "blog" || t.category === "content")
		.map((page) => ({
			url: `${BASE_URL}${page.route}`,
			lastModified: currentDate,
			changeFrequency: "weekly",
			priority: 0.8,
		}));

	try {
		return [
			...staticPages, 
			...categoryPages, 
			...toolPages, 
			...toolGuidesIndex, 
			...toolGuideCategoryPages, 
			...blogPages
		];
	} catch (error) {
		console.error("Sitemap generation error:", error);
		return [...staticPages, ...categoryPages]; // Fallback to safe core pages
	}
}
