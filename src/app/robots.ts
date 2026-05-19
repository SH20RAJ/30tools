import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants/config";

// Shared disallow paths for all crawlers
const BASE_DISALLOW = [
	"/api/",
	"/admin/",
	"/private/",
	"/handler/",
	"/embed/",
	"/youtube-redirects/",
	"/search",
];

export default function robots(): MetadataRoute.Robots {
	const baseUrl = SITE_CONFIG.siteUrl;

	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: BASE_DISALLOW,
			},
			{
				userAgent: "Googlebot",
				allow: "/",
				disallow: BASE_DISALLOW,
			},
			{
				userAgent: "Bingbot",
				allow: "/",
				disallow: BASE_DISALLOW,
			},
			{
				userAgent: "Yandex",
				allow: "/",
				disallow: BASE_DISALLOW,
			},
			{
				userAgent: "Slurp", // Yahoo
				allow: "/",
				disallow: BASE_DISALLOW,
			},
			{
				userAgent: "DuckDuckBot",
				allow: "/",
				disallow: BASE_DISALLOW,
			},
			{
				userAgent: "Baiduspider",
				allow: "/",
				disallow: BASE_DISALLOW,
			},
			// AI Crawlers - allow all for AI search discoverability
			{
				userAgent: "GPTBot",
				allow: "/",
				disallow: BASE_DISALLOW,
			},
			{
				userAgent: "ChatGPT-User",
				allow: "/",
				disallow: BASE_DISALLOW,
			},
			{
				userAgent: "ClaudeBot",
				allow: "/",
				disallow: BASE_DISALLOW,
			},
			{
				userAgent: "PerplexityBot",
				allow: "/",
				disallow: BASE_DISALLOW,
			},
			{
				userAgent: "Google-Extended",
				allow: "/",
				disallow: BASE_DISALLOW,
			},
			{
				userAgent: "Bytespider",
				allow: "/",
				disallow: BASE_DISALLOW,
			},
			{
				userAgent: "CCBot",
				allow: "/",
				disallow: BASE_DISALLOW,
			},
			{
				userAgent: "anthropic-ai",
				allow: "/",
				disallow: BASE_DISALLOW,
			},
			{
				userAgent: "Gemini",
				allow: "/",
				disallow: BASE_DISALLOW,
			},
			{
				userAgent: "YouBot",
				allow: "/",
				disallow: BASE_DISALLOW,
			},
		],
		sitemap: `${baseUrl}/sitemap.xml`,
		host: baseUrl,
	};
}
