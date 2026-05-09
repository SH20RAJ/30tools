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
			// AI Crawler rules - blocking AI training but allowing citation
			{
				userAgent: "GPTBot",
				disallow: ["/"],
			},
			{
				userAgent: "ChatGPT-User",
				allow: "/",
				disallow: ["/api/", "/admin/"],
			},
			{
				userAgent: "ClaudeBot",
				disallow: ["/"],
			},
			{
				userAgent: "PerplexityBot",
				allow: "/",
				disallow: ["/api/", "/admin/"],
			},
			{
				userAgent: "Google-Extended",
				disallow: ["/"],
			},
			{
				userAgent: "Bytespider",
				disallow: ["/"],
			},
			{
				userAgent: "CCBot",
				allow: "/",
				disallow: ["/api/", "/admin/"],
			},
		],
		sitemap: `${baseUrl}/sitemap.xml`,
		host: baseUrl,
	};
}
