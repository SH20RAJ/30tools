import type { MetadataRoute } from "next";
import { getAllCategories, getAllTools } from "@/lib/tools";

const BASE_URL = "https://30tools.com";

export default function sitemap(): MetadataRoute.Sitemap {
	const allTools = getAllTools();
	const allCategories = getAllCategories();
	const currentDate = new Date();

	const languages = ["en", "es", "fr", "de", "hi", "it", "pt", "ja", "zh", "ko", "ru", "tr", "vi", "id"];

	const getAlternates = (path: string) => {
		const alternates: Record<string, string> = {};
		for (const lang of languages) {
			alternates[lang] = `${BASE_URL}${path}${path.includes("?") ? "&" : "?"}lang=${lang}`;
		}
		return alternates;
	};

	const staticPages: MetadataRoute.Sitemap = [
		{
			url: BASE_URL,
			lastModified: currentDate,
			changeFrequency: "daily",
			priority: 1.0,
			alternates: {
				languages: getAlternates(""),
			},
		},
		{
			url: `${BASE_URL}/search`,
			lastModified: currentDate,
			changeFrequency: "daily",
			priority: 0.8,
			alternates: {
				languages: getAlternates("/search"),
			},
		},
		{
			url: `${BASE_URL}/about`,
			lastModified: currentDate,
			changeFrequency: "monthly",
			priority: 0.7,
			alternates: {
				languages: getAlternates("/about"),
			},
		},
		{
			url: `${BASE_URL}/contact`,
			lastModified: currentDate,
			changeFrequency: "monthly",
			priority: 0.7,
			alternates: {
				languages: getAlternates("/contact"),
			},
		},
		{
			url: `${BASE_URL}/blog`,
			lastModified: currentDate,
			changeFrequency: "daily",
			priority: 0.8,
			alternates: {
				languages: getAlternates("/blog"),
			},
		},
	];

	const toolPages: MetadataRoute.Sitemap = allTools.flatMap((tool) => {
		const pages: MetadataRoute.Sitemap = [
			{
				url: `${BASE_URL}${tool.route}`,
				lastModified: currentDate,
				changeFrequency: "weekly",
				priority: tool.popular ? 0.9 : 0.8,
				alternates: {
					languages: getAlternates(tool.route),
				},
			}
		];

		if (tool.extraSlugs && tool.extraSlugs.length > 0) {
			for (const slug of tool.extraSlugs) {
				const slugRoute = slug.startsWith('/') ? slug : `/${slug}`;
				pages.push({
					url: `${BASE_URL}${slugRoute}`,
					lastModified: currentDate,
					changeFrequency: "weekly",
					priority: 0.7, // Slightly lower priority for extra slugs
					alternates: {
						languages: getAlternates(slugRoute),
					},
				});
			}
		}

		return pages;
	});

	const categoryPages: MetadataRoute.Sitemap = allCategories.map((cat) => ({
		url: `${BASE_URL}/${cat.slug}`,
		lastModified: currentDate,
		changeFrequency: "weekly",
		priority: 0.85,
		alternates: {
			languages: getAlternates(`/${cat.slug}`),
		},
	}));

	return [...staticPages, ...categoryPages, ...toolPages];
}
