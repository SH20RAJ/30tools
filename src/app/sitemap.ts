import type { MetadataRoute } from "next";
import { getAllTools } from "@/lib/tools";
import { blogs } from "@/constants/blog-data";
import { SITE_CONFIG } from "@/constants/config";
import { getStandaloneSeoOpportunities } from "@/data/seo-opportunities";

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
		{ url: `${BASE_URL}/dmca`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.6 },
		{ url: `${BASE_URL}/pro`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.8 },
		{ url: `${BASE_URL}/api`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.8 },
		{ url: `${BASE_URL}/advertise`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.7 },
		{ url: `${BASE_URL}/services`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.75 },
		// Category hub pages (priority 0.8-0.9)
		{ url: `${BASE_URL}/image-tools`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.9 },
		{ url: `${BASE_URL}/exam-image-tools`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.92 },
		{ url: `${BASE_URL}/pdf-tools`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.9 },
		{ url: `${BASE_URL}/video-tools`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.9 },
		{ url: `${BASE_URL}/audio-tools`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.8 },
		{ url: `${BASE_URL}/text-tools`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.8 },
		{ url: `${BASE_URL}/seo-tools`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.85 },
		{ url: `${BASE_URL}/developer-tools`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.8 },
		{ url: `${BASE_URL}/api-key-testers`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.9 },
		{ url: `${BASE_URL}/qr-tools`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.88 },
		{ url: `${BASE_URL}/small-business-tools`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.86 },
		{ url: `${BASE_URL}/other-tools`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.75 },
		{ url: `${BASE_URL}/generators`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.8 },
		{ url: `${BASE_URL}/downloaders`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.85 },
		{ url: `${BASE_URL}/calculators`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.75 },
		{ url: `${BASE_URL}/student-calculators`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.9 },
		{ url: `${BASE_URL}/student-tools`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.84 },
		{ url: `${BASE_URL}/exam-tools`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.9 },
		// Blog
		{ url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
		// Content hub / SEO landing pages
		{ url: `${BASE_URL}/tool-guides`, lastModified: siteUpdated, changeFrequency: "weekly", priority: 0.7 },
		{ url: `${BASE_URL}/ai-tools-alternatives-free`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.65 },
		{ url: `${BASE_URL}/best-free-alternative-to-chatgpt`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.65 },
		{ url: `${BASE_URL}/best-free-converters-in-2026`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.65 },
		{ url: `${BASE_URL}/best-free-tools-for-students`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.65 },
		{ url: `${BASE_URL}/how-to-format-json-properly`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.65 },
		{ url: `${BASE_URL}/seo-tools-free-online`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.65 },
		{ url: `${BASE_URL}/tools-for-developers`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.65 },
		{ url: `${BASE_URL}/top-10-free-online-tools-for-seo`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.65 },
		{ url: `${BASE_URL}/top-10-json-tools-online`, lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.65 },
	];

	// Use site deployment date for tool pages (staggered by popularity)
	const toolPages: MetadataRoute.Sitemap = allTools
		.filter((tool) => {
			const route = String(tool.route || "");
			if (!route.startsWith("/")) return false;
			if (route.includes("?")) return false;
			if (route.startsWith("/search")) return false;
			if (route.startsWith("/api-key-tester/")) return false;
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

	const seoOpportunityPages: MetadataRoute.Sitemap = getStandaloneSeoOpportunities().map((opportunity) => ({
		url: `${BASE_URL}${opportunity.route}`,
		lastModified: now,
		changeFrequency: "weekly" as const,
		priority: opportunity.priority === 1 ? 0.9 : opportunity.priority === 2 ? 0.86 : 0.84,
	}));

	try {
		// Get all extraSlugs to make sure they are excluded (except the intent pages we just added)
		const extraSlugsSet = new Set(
			allTools.flatMap((t) => (t.extraSlugs || []).map((slug) => {
				const cleanSlug = slug.startsWith("/") ? slug : `/${slug}`;
				return `${BASE_URL}${cleanSlug}`;
			}))
		);
		
		// Standalone SEO opportunities intentionally turn selected extra slugs into real pages.
		seoOpportunityPages.forEach(page => extraSlugsSet.delete(page.url));

		// Deduplicate by URL to avoid duplicate sitemap entries
		const allPages = [...staticPages, ...toolPages, ...blogPages, ...seoOpportunityPages];
		const seen = new Set<string>();
		return allPages
			.filter((page) => !extraSlugsSet.has(page.url))
			.filter((page) => {
				if (seen.has(page.url)) return false;
				seen.add(page.url);
				return true;
			});
	} catch (error) {
		console.error("Sitemap generation error:", error);
		return [...staticPages];
	}
}
