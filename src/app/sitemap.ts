import type { MetadataRoute } from "next";
import { getAllCategories, getAllTools } from "@/constants/tools-utils";

const BASE_URL = "https://30tools.com";

function normalizeSiteUrl(pathOrUrl: string | undefined) {
	if (!pathOrUrl) return null;

	try {
		const normalizedUrl = new URL(pathOrUrl, BASE_URL);
		return normalizedUrl.origin === BASE_URL ? normalizedUrl.toString() : null;
	} catch {
		return null;
	}
}

function dedupeEntries(entries: MetadataRoute.Sitemap) {
	const uniqueEntries = new Map<string, MetadataRoute.Sitemap[number]>();

	for (const entry of entries) {
		if (!entry?.url) continue;

		const existingEntry = uniqueEntries.get(entry.url);
		if (!existingEntry) {
			uniqueEntries.set(entry.url, entry);
			continue;
		}

		uniqueEntries.set(entry.url, {
			...existingEntry,
			lastModified:
				new Date(entry.lastModified || 0) > new Date(existingEntry.lastModified || 0)
					? entry.lastModified
					: existingEntry.lastModified,
			priority: Math.max(entry.priority || 0, existingEntry.priority || 0),
			changeFrequency: existingEntry.changeFrequency || entry.changeFrequency,
		});
	}

	return Array.from(uniqueEntries.values());
}

export default function sitemap(): MetadataRoute.Sitemap {
	const allTools = getAllTools();
	const allCategories = getAllCategories();
	const currentDate = new Date();

	// Static pages with optimized priorities
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
			priority: 0.9,
		},
		{
			url: `${BASE_URL}/about`,
			lastModified: new Date("2025-06-15"),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${BASE_URL}/contact`,
			lastModified: new Date("2025-06-15"),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${BASE_URL}/privacy`,
			lastModified: new Date("2025-06-15"),
			changeFrequency: "monthly",
			priority: 0.6,
		},
		{
			url: `${BASE_URL}/terms`,
			lastModified: new Date("2025-06-15"),
			changeFrequency: "monthly",
			priority: 0.6,
		},
		{
			url: `${BASE_URL}/blog`,
			lastModified: currentDate,
			changeFrequency: "daily",
			priority: 0.8,
		},
	];

	// Tool pages with intelligent priority calculation
	const toolPages: MetadataRoute.Sitemap = allTools.flatMap((tool: any) => {
		// Category-based priority adjustments
		const categoryPriorities: Record<string, number> = {
			image: 0.95, // High demand category
			pdf: 0.92, // Very popular
			video: 0.9, // High value
			text: 0.9, // Commonly used
			seo: 0.9, // Professional tools
			developer: 0.9, // Technical audience
			utilities: 0.9, // General tools
			audio: 0.9, // Specialized
			converter: 0.9, // High utility
			design: 0.9, // Creative tools
			legal: 0.9, // Niche category
			calculators: 0.9, // Niche category
		};

		const priority = Math.min(
			0.98,
			(categoryPriorities[tool.category] || 0.8) + (tool.popular === true ? 0.03 : 0),
		);

		// Determine change frequency based on tool type
		let changeFrequency:
			| "always"
			| "hourly"
			| "daily"
			| "weekly"
			| "monthly"
			| "yearly"
			| "never" = "weekly";
		if (["image", "pdf", "video"].includes(tool.category)) {
			changeFrequency = "daily"; // High-traffic tools
		} else if (["text", "seo", "developer"].includes(tool.category)) {
			changeFrequency = "weekly";
		} else {
			changeFrequency = "monthly";
		}

		const mainEntryUrl = normalizeSiteUrl(
			tool.external ? tool.route : `${BASE_URL}${tool.route}`,
		);

		if (!mainEntryUrl) {
			return [];
		}

		const mainEntry = {
			url: mainEntryUrl,
			lastModified: currentDate,
			changeFrequency,
			priority: Math.round(priority * 100) / 100, // Round to 2 decimal places
		};

		// Add entries for extra slugs if they exist
		const extraEntries = (tool.extraSlugs || [])
			.map((slug: string) => {
				const url = normalizeSiteUrl(`${BASE_URL}/${slug}`);
				if (!url) return null;

				return {
					url,
					lastModified: currentDate,
					changeFrequency,
					priority: Math.round((priority - 0.05) * 100) / 100,
				};
			})
			.filter(Boolean) as MetadataRoute.Sitemap;

		return [mainEntry, ...extraEntries];
	});

	// Category landing pages
	const categoryPages: MetadataRoute.Sitemap = allCategories.map(
		(category: any) => ({
			url: `${BASE_URL}/${category.slug}`, // Assuming categories are at root /slug or /tools/slug?
			// Based on previous sitemaps, some were /tools/[category], but tools.json says slug: "generators", and route logic might map /generators.
			// The old sitemap.js produced `${BASE_URL}/${category}-tools` (hardcoded list)
			// The enhanced-sitemap route.js used `${BASE_URL}/${category.slug}`.
			// Let's assume `${BASE_URL}/${category.slug}` is the correct canonical path for now based on improved logic in enhanced-sitemap.
			lastModified: currentDate,
			changeFrequency: "weekly",
			priority: 0.85,
		}),
	);

	// Blog posts - skipping complex FS read for now to keep it safe,
	// or I can re-implement the try-catch block from the original sitemap.js if needed.
	// The original sitemap.js had it. Let's add it back for completeness.

	let blogPages: MetadataRoute.Sitemap = [];
	try {
		const fs = require("fs");
		const path = require("path");
		const blogsDirectory = path.join(process.cwd(), "src/app/(content)/blog");
		// Check if directory exists first
		if (fs.existsSync(blogsDirectory)) {
			const blogFolders = fs
				.readdirSync(blogsDirectory)
				.filter((file: string) => {
					return fs.statSync(path.join(blogsDirectory, file)).isDirectory();
				});

			blogPages = blogFolders.map((slug: string) => ({
				url: `${BASE_URL}/blog/${slug}`,
				lastModified: currentDate,
				changeFrequency: "monthly",
				priority: 0.7,
			}));
		}
	} catch (error) {
		console.warn("Could not read blog directory for sitemap:", error);
	}

	// Downloader pages - high priority revenue generators
	const downloaderSlugs = [
		"akillitv-video-downloader",
		"bandcamp-video-downloader",
		"bilibili-video-downloader",
		"bitchute-video-downloader",
		"blogger-video-downloader",
		"blutv-video-downloader",
		"buzzfeed-video-downloader",
		"capcut-video-downloader",
		"chingari-video-downloader",
		"dailymotion-video-downloader",
		"douyin-video-downloader",
		"espn-video-downloader",
		"facebook-story-downloader",
		"facebook-video-downloader",
		"febspot-video-downloader",
		"flickr-video-downloader",
		"gaana-video-downloader",
		"ifunny-video-downloader",
		"imdb-video-downloader",
		"imgur-video-downloader",
		"instagram-downloader",
		"instagram-image-downloader",
		"instagram-reel-downloader",
		"instagram-story-downloader",
		"instagram-videos-downloader",
		"izlesene-video-downloader",
		"kickstarter-video-downloader",
		"kwai-video-downloader",
		"likee-video-downloader",
		"linkedin-video-downloader",
		"m3u8-downloader",
		"mashable-video-downloader",
		"mixcloud-video-downloader",
		"mxtakatak-video-downloader",
		"ninegag-video-downloader",
		"odnoklassniki-video-downloader",
		"online-video-downloader",
		"periscope-video-downloader",
		"pinterest-gif-downloader",
		"pinterest-image-downloader",
		"pinterest-video-downloader",
		"puhutv-video-downloader",
		"reddit-downloader",
		"reddit-video-downloader",
		"rumble-video-downloader",
		"sharechat-video-downloader",
		"snapchat-video-downloader",
		"soundcloud-video-downloader",
		"streamable-video-downloader",
		"ted-video-downloader",
		"telegram-video-downloader",
		"threads-video-downloader",
		"tumblr-video-downloader",
		"twitch-video-downloader",
		"vkontakte-video-downloader",
		"youtube-thumbnail-downloader",
	];

	const downloaderPages: MetadataRoute.Sitemap = [
		{
			url: `${BASE_URL}/all-downloaders`,
			lastModified: currentDate,
			changeFrequency: "daily",
			priority: 0.95,
		},
		...downloaderSlugs.map((slug) => ({
			url: `${BASE_URL}/${slug}`,
			lastModified: currentDate,
			changeFrequency: "daily" as const,
			priority: 0.95,
		})),
	];

	return dedupeEntries([
		...staticPages,
		...categoryPages,
		...toolPages,
		...downloaderPages,
		...blogPages,
	]).sort((a, b) => (b.priority || 0) - (a.priority || 0));
}
