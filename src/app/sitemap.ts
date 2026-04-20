import type { MetadataRoute } from "next";
import { getAllCategories, getAllTools, SUPPORTED_LANGUAGES } from "@/lib/tools";
import { useCasePages, comparisonPages, blogArticles } from "@/constants/content-pages";

const BASE_URL = "https://30tools.com";

export async function generateSitemaps() {
	return [
		{ id: "main" },
		{ id: "en" },
		...SUPPORTED_LANGUAGES.filter((lang) => lang !== "en").map((lang) => ({ id: lang })),
	];
}

export default function sitemap({ id }: { id: string }): MetadataRoute.Sitemap {
	const allTools = getAllTools();
	const allCategories = getAllCategories();
	const currentDate = new Date();

	if (id === "main") {
		const staticPages: MetadataRoute.Sitemap = [
			{ url: BASE_URL, lastModified: currentDate, changeFrequency: "daily", priority: 1.0 },
			{ url: `${BASE_URL}/search`, lastModified: currentDate, changeFrequency: "daily", priority: 0.8 },
			{ url: `${BASE_URL}/about`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.7 },
			{ url: `${BASE_URL}/contact`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.7 },
			{ url: `${BASE_URL}/privacy`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.7 },
			{ url: `${BASE_URL}/terms`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.7 },
			{ url: `${BASE_URL}/blog`, lastModified: currentDate, changeFrequency: "daily", priority: 0.8 },
		];

		const categoryPages: MetadataRoute.Sitemap = allCategories.map((cat) => ({
			url: `${BASE_URL}/${cat.slug}`,
			lastModified: currentDate,
			changeFrequency: "weekly",
			priority: 0.85,
		}));

		const contentPages: MetadataRoute.Sitemap = [...useCasePages, ...comparisonPages].map((page) => ({
			url: `${BASE_URL}/${page.slug}`,
			lastModified: currentDate,
			changeFrequency: "weekly",
			priority: 0.8,
		}));

		const toolGuidesIndex: MetadataRoute.Sitemap = [
			{ url: `${BASE_URL}/tool-guides`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.85 },
		];

		const toolGuideCategoryPages: MetadataRoute.Sitemap = allCategories.map((category) => ({
			url: `${BASE_URL}/tool-guides/${category.slug}`,
			lastModified: currentDate,
			changeFrequency: "weekly",
			priority: 0.8,
		}));

		const blogSitemaps: MetadataRoute.Sitemap = blogArticles.map((article) => ({
			url: `${BASE_URL}/blog/${article.slug}`,
			lastModified: currentDate,
			changeFrequency: "monthly",
			priority: 0.7,
		}));

		return [...staticPages, ...categoryPages, ...contentPages, ...toolGuidesIndex, ...toolGuideCategoryPages, ...blogSitemaps];
	}

	const isDefaultEn = id === "en";
	if (isDefaultEn || SUPPORTED_LANGUAGES.includes(id)) {
		const toolPages: MetadataRoute.Sitemap = allTools.flatMap((tool) => {
			const slugs = new Set([
				tool.route,
				...(tool.extraSlugs ?? []),
			].map((slug) => (slug.startsWith("/") ? slug : `/${slug}`)));

			return Array.from(slugs).map((route) => {
				const separator = route.includes("?") ? "&" : "?";
				let targetUrl = `${BASE_URL}${route}`;
				
				if (!isDefaultEn) {
					targetUrl = `${targetUrl}${separator}lang=${id}`;
				}

				// Build alternates. Next.js supports object shape for alternates languages
				const alternatesLanguages: Record<string, string> = {
					en: `${BASE_URL}${route}`
				};
				
				SUPPORTED_LANGUAGES.filter(l => l !== "en").forEach((lang) => {
					alternatesLanguages[lang] = `${BASE_URL}${route}${separator}lang=${lang}`;
				});

				return {
					url: targetUrl,
					lastModified: currentDate,
					changeFrequency: "weekly",
					priority: tool.popular ? 0.9 : 0.8,
					alternates: {
						languages: alternatesLanguages
					}
				};
			});
		});

		return toolPages;
	}

	return [];
}
