import type { MetadataRoute } from "next";
import { getAllTools } from "@/lib/tools";
import { blogs } from "@/constants/blog-data";
import { SITE_CONFIG } from "@/constants/config";

const BASE_URL = SITE_CONFIG.siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
	const allTools = getAllTools();
	const currentDate = new Date(SITE_CONFIG.lastUpdatedDate);

	// Canonical static pages only
	const staticPages: MetadataRoute.Sitemap = [
		{ url: BASE_URL, lastModified: currentDate, changeFrequency: "daily", priority: 1.0 },
		{ url: `${BASE_URL}/about`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.7 },
		{ url: `${BASE_URL}/contact`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.7 },
		{ url: `${BASE_URL}/privacy`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.7 },
		{ url: `${BASE_URL}/terms`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.7 },
		{ url: `${BASE_URL}/image-tools`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.9 },
		{ url: `${BASE_URL}/pdf-tools`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.9 },
		{ url: `${BASE_URL}/video-tools`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.9 },
		{ url: `${BASE_URL}/audio-tools`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.8 },
		{ url: `${BASE_URL}/text-tools`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.8 },
		{ url: `${BASE_URL}/seo-tools`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.85 },
		{ url: `${BASE_URL}/developer-tools`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.8 },
		{ url: `${BASE_URL}/other-tools`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.75 },
		{ url: `${BASE_URL}/blog`, lastModified: currentDate, changeFrequency: "daily", priority: 0.8 },
	];

	// Canonical tool pages only (exclude duplicate variants, query URLs, and sensitive tester pages)
	const toolPages: MetadataRoute.Sitemap = allTools
		.filter((tool) => {
			const route = String(tool.route || "");
			if (!route.startsWith("/")) return false;
			if (route.includes("?")) return false;
			if (route.startsWith("/search")) return false;
			if (route.startsWith("/api-key-tester/")) return false;
			if (route.startsWith("/tool-guides")) return false;
			return true;
		})
		.map((tool) => ({
			url: `${BASE_URL}${tool.route}`,
			lastModified: currentDate,
			changeFrequency: "weekly" as const,
			priority: tool.popular ? 0.9 : 0.75,
		}));

	// Blog URLs
	const blogPages: MetadataRoute.Sitemap = [
		...blogs.map((article) => ({
			url: `${BASE_URL}/blog/${article.slug}`,
			lastModified: new Date(article.date),
			changeFrequency: "monthly" as const,
			priority: 0.7,
		})),
	];

	try {
		return [...staticPages, ...toolPages, ...blogPages];
	} catch (error) {
		console.error("Sitemap generation error:", error);
		return [...staticPages];
	}
}
