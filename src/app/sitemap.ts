import type { MetadataRoute } from "next";
import { getAllCategories, getAllTools } from "@/lib/tools";
import { useCasePages, comparisonPages, blogArticles } from "@/constants/content-pages";

const BASE_URL = "https://30tools.com";

export default function sitemap(): MetadataRoute.Sitemap {
	const allTools = getAllTools();
	const allCategories = getAllCategories();
	const currentDate = new Date();

	const staticPages: MetadataRoute.Sitemap = [
		{
			url: BASE_URL,
			lastModified: currentDate,
			changeFrequency: "daily",
			priority: 1.0,
		},
		{
			url: `${BASE_URL}/search`,
			lastModified: currentDate,
			changeFrequency: "daily",
			priority: 0.8,
		},
		{
			url: `${BASE_URL}/about`,
			lastModified: currentDate,
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${BASE_URL}/contact`,
			lastModified: currentDate,
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${BASE_URL}/blog`,
			lastModified: currentDate,
			changeFrequency: "daily",
			priority: 0.8,
		},
	];

	const toolPages: MetadataRoute.Sitemap = allTools.map((tool) => ({
		url: `${BASE_URL}${tool.route}`,
		lastModified: currentDate,
		changeFrequency: "weekly",
		priority: tool.popular ? 0.9 : 0.8,
	}));

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
		{
			url: `${BASE_URL}/tool-guides`,
			lastModified: currentDate,
			changeFrequency: "weekly",
			priority: 0.85,
		},
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

	return [...staticPages, ...categoryPages, ...toolPages, ...contentPages, ...toolGuidesIndex, ...toolGuideCategoryPages, ...blogSitemaps];
}
