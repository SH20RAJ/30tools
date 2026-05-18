import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/constants/config";

export default function robots(): MetadataRoute.Robots {
	const baseUrl = SITE_CONFIG.siteUrl;

	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/api/", "/admin/", "/private/"],
			},
			{
				userAgent: "Googlebot",
				allow: "/",
				disallow: ["/api/", "/admin/"],
			},
			{
				userAgent: "Bingbot",
				allow: "/",
				disallow: ["/api/", "/admin/"],
			},
			{
				userAgent: "Yandex",
				allow: "/",
				disallow: ["/api/", "/admin/"],
			},
			{
				userAgent: "Slurp", // Yahoo
				allow: "/",
				disallow: ["/api/", "/admin/"],
			},
			{
				userAgent: "DuckDuckBot",
				allow: "/",
				disallow: ["/api/", "/admin/"],
			},
			{
				userAgent: "Baiduspider",
				allow: "/",
				disallow: ["/api/", "/admin/"],
			},
			// AI Crawlers - allow all for AI search discoverability
			{
				userAgent: "GPTBot",
				allow: "/",
				disallow: ["/api/", "/admin/"],
			},
			{
				userAgent: "ChatGPT-User",
				allow: "/",
				disallow: ["/api/", "/admin/"],
			},
			{
				userAgent: "ClaudeBot",
				allow: "/",
				disallow: ["/api/", "/admin/"],
			},
			{
				userAgent: "PerplexityBot",
				allow: "/",
				disallow: ["/api/", "/admin/"],
			},
			{
				userAgent: "Google-Extended",
				allow: "/",
				disallow: ["/api/", "/admin/"],
			},
			{
				userAgent: "Bytespider",
				allow: "/",
				disallow: ["/api/", "/admin/"],
			},
			{
				userAgent: "CCBot",
				allow: "/",
				disallow: ["/api/", "/admin/"],
			},
			{
				userAgent: "anthropic-ai",
				allow: "/",
				disallow: ["/api/", "/admin/"],
			},
			{
				userAgent: "Gemini",
				allow: "/",
				disallow: ["/api/", "/admin/"],
			},
			{
				userAgent: "YouBot",
				allow: "/",
				disallow: ["/api/", "/admin/"],
			},
		],
		sitemap: `${baseUrl}/sitemap.xml`,
		host: baseUrl,
	};
}
