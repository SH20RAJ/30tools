import type { MetadataRoute } from "next";
import { getAllCategories, getAllTools } from "@/constants/tools-utils";
import { blogs } from "@/constants/blog-data";

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

function withLanguages(
	url: string,
	currentDate: Date,
	changeFrequency:
		| "always"
		| "hourly"
		| "daily"
		| "weekly"
		| "monthly"
		| "yearly"
		| "never",
	priority: number,
) {
	return [
		{
			url,
			lastModified: currentDate,
			changeFrequency,
			priority,
		},
		...LANGUAGES.map((lang) => ({
			url: `${url}${url.includes("?") ? "&" : "?"}lang=${lang}`,
			lastModified: currentDate,
			changeFrequency,
			priority: Math.max(0.1, priority - 0.1),
		})),
	];
}

const LANGUAGES = [
	"en",
	"es",
	"fr",
	"de",
	"it",
	"pt",
	"hi",
	"ja",
	"zh",
	"ko",
	"ru",
	"ar",
	"tr",
	"vi",
	"id",
];

export default function sitemap(): MetadataRoute.Sitemap {
	const allTools = getAllTools();
	const allCategories = getAllCategories();
	const currentDate = new Date();

	// Static pages with optimized priorities
	const staticPagesSlugs = [
		"",
		"/search",
		"/about",
		"/contact",
		"/privacy",
		"/terms",
		"/blog",
	];

	const staticPages: MetadataRoute.Sitemap = staticPagesSlugs.flatMap((slug) => {
		const baseEntry = {
			url: `${BASE_URL}${slug}`,
			lastModified: currentDate,
			changeFrequency: "daily" as const,
			priority: slug === "" ? 1.0 : 0.8,
		};

		return LANGUAGES.map((lang) => ({
			...baseEntry,
			url: `${BASE_URL}${slug}${slug.includes("?") ? "&" : "?"}lang=${lang}`,
			priority: Math.max(0.1, (baseEntry.priority || 0) - 0.1),
		}));
	});

	// Tool pages with intelligent priority calculation
	const toolPages: MetadataRoute.Sitemap = allTools.flatMap((tool: any) => {
		// Category-based priority adjustments
		const categoryPriorities: Record<string, number> = {
			image: 0.95,
			pdf: 0.92,
			video: 0.9,
			text: 0.9,
			seo: 0.9,
			developer: 0.9,
			utilities: 0.9,
			audio: 0.9,
			converter: 0.9,
			design: 0.9,
			legal: 0.9,
			calculators: 0.9,
		};

		const priority = Math.min(
			0.98,
			(categoryPriorities[tool.category] || 0.8) + (tool.popular === true ? 0.03 : 0),
		);

		let changeFrequency:
			| "always"
			| "hourly"
			| "daily"
			| "weekly"
			| "monthly"
			| "yearly"
			| "never" = "weekly";
		if (["image", "pdf", "video"].includes(tool.category)) {
			changeFrequency = "daily";
		} else if (["text", "seo", "developer"].includes(tool.category)) {
			changeFrequency = "weekly";
		} else {
			changeFrequency = "monthly";
		}

		const mainEntryUrl = normalizeSiteUrl(
			tool.external ? tool.route : `${BASE_URL}${tool.route}`,
		);

		if (!mainEntryUrl) return [];

		const entries = withLanguages(
			mainEntryUrl,
			currentDate,
			changeFrequency,
			Math.round(priority * 100) / 100,
		);

		// Add entries for extra slugs if they exist
		const extraEntries = (tool.extraSlugs || []).flatMap((slug: string) => {
			const url = normalizeSiteUrl(`${BASE_URL}/${slug}`);
			if (!url) return [];

			return withLanguages(
				url,
				currentDate,
				changeFrequency,
				Math.round((priority - 0.05) * 100) / 100,
			);
		});

		return [...entries, ...extraEntries];
	});

	// Category landing pages
	const categoryPages: MetadataRoute.Sitemap = allCategories.flatMap(
		(category: any) => {
			const baseUrl = `${BASE_URL}/${category.slug}`;
			return LANGUAGES.map((lang) => ({
				url: `${baseUrl}?lang=${lang}`,
				lastModified: currentDate,
				changeFrequency: "weekly" as const,
				priority: 0.85,
			}));
		},
	);

	// Blog posts
	const blogPages: MetadataRoute.Sitemap = blogs.flatMap((blog) => {
		const baseUrl = `${BASE_URL}/blog/${blog.slug}`;
		return LANGUAGES.map((lang) => ({
			url: `${baseUrl}?lang=${lang}`,
			lastModified: new Date(blog.date || currentDate),
			changeFrequency: "monthly" as const,
			priority: 0.7,
		}));
	});

	// Downloader pages
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
		...LANGUAGES.map((lang) => ({
			url: `${BASE_URL}/all-downloaders?lang=${lang}`,
			lastModified: currentDate,
			changeFrequency: "daily" as const,
			priority: 0.95,
		})),
		...downloaderSlugs.flatMap((slug) =>
			LANGUAGES.map((lang) => ({
				url: `${BASE_URL}/${slug}?lang=${lang}`,
				lastModified: currentDate,
				changeFrequency: "daily" as const,
				priority: 0.95,
			})),
		),
	];

	return dedupeEntries([
		...staticPages,
		...categoryPages,
		...toolPages,
		...downloaderPages,
		...blogPages,
	]).sort((a, b) => (b.priority || 0) - (a.priority || 0));
}

