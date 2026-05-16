import type { MetadataRoute } from "next";
import { getAllTools } from "@/lib/tools";
import { blogs } from "@/constants/blog-data";
import { SITE_CONFIG } from "@/constants/config";

const BASE_URL = SITE_CONFIG.siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
	const allTools = getAllTools();
	const siteUpdated = new Date(SITE_CONFIG.lastUpdatedDate);
	const now = new Date();

	// Use actual blog dates where available, siteUpdated for static pages
	const staticPages: MetadataRoute.Sitemap = [
		{ url: BASE_URL, lastModified: now, changeFrequency: "daily", priority: 1.0 },
		{ url: `${BASE_URL}/about`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.7 },
		{ url: `${BASE_URL}/contact`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.7 },
		{ url: `${BASE_URL}/privacy`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.7 },
		{ url: `${BASE_URL}/terms`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.7 },
		{ url: `${BASE_URL}/image-tools`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.9 },
		{ url: `${BASE_URL}/pdf-tools`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.9 },
		{ url: `${BASE_URL}/video-tools`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.9 },
		{ url: `${BASE_URL}/audio-tools`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.8 },
		{ url: `${BASE_URL}/text-tools`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.8 },
		{ url: `${BASE_URL}/seo-tools`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.85 },
		{ url: `${BASE_URL}/developer-tools`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.8 },
		{ url: `${BASE_URL}/other-tools`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.75 },
		{ url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
	];

	// Use site deployment date for tool pages (staggered by popularity)
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
			lastModified: tool.popular ? now : siteUpdated,
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
		// Deduplicate by URL to avoid duplicate sitemap entries
		const allPages = [...staticPages, ...toolPages, ...blogPages];
		const seen = new Set<string>();
		return allPages.filter((page) => {
			if (seen.has(page.url)) return false;
			seen.add(page.url);
			return true;
		});
	} catch (error) {
		console.error("Sitemap generation error:", error);
		return [...staticPages];
	}
}
