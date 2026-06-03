import type { MonetizationSafety } from "./seo-opportunities";

export const monetizationRules = {
	riskySlugs: [
		"youtube-video-downloader",
		"youtube-shorts-downloader",
		"tiktok-downloader",
		"tiktok-saver-no-watermark",
		"instagram-downloader",
		"instagram-reel-downloader",
		"instagram-reels-downloader",
		"facebook-video-downloader",
		"facebook-story-downloader",
		"mp4-to-mp3",
		"online-video-downloader",
		"universal-video-downloader",
		"free-mp3-extractor",
		"video-downloader",
		"reddit-video-downloader",
		"twitter-video-downloader",
	],
	riskyCategories: ["downloaders", "youtube", "social", "video", "youtube-redirects"],
	noAdsOnRiskyPages: true,
};

export type MonetizationDecision = {
	safety: MonetizationSafety;
	adsAllowed: boolean;
	affiliateAllowed: boolean;
	serviceCTA: boolean;
	reason: string;
};

export function getMonetizationDecision({
	slug = "",
	category = "",
	overrideSafety,
}: {
	slug?: string;
	category?: string;
	overrideSafety?: MonetizationSafety;
}): MonetizationDecision {
	const normalizedSlug = slug.toLowerCase();
	const normalizedCategory = category.toLowerCase();
	const isRiskySlug = monetizationRules.riskySlugs.some((item) =>
		normalizedSlug.includes(item),
	);
	const isRiskyCategory = monetizationRules.riskyCategories.some((item) =>
		normalizedCategory.includes(item),
	);
	const safety = overrideSafety || (isRiskySlug || isRiskyCategory ? "risky" : "safe");

	if (safety === "risky") {
		return {
			safety,
			adsAllowed: false,
			affiliateAllowed: false,
			serviceCTA: false,
			reason: "Ads disabled on downloader, copyright-sensitive, or account-risk pages.",
		};
	}

	if (safety === "caution") {
		return {
			safety,
			adsAllowed: false,
			affiliateAllowed: true,
			serviceCTA: false,
			reason: "Ads disabled by caution policy; contextual recommendations only.",
		};
	}

	return {
		safety,
		adsAllowed: true,
		affiliateAllowed: true,
		serviceCTA: true,
		reason: "Safe utility page suitable for tasteful in-flow ads and contextual CTAs.",
	};
}

export const affiliateRecommendations = {
	design: {
		label: "Design workflow",
		title: "Need templates or menu designs?",
		description: "Use this slot for a design affiliate such as Canva templates, kept contextual to QR and image pages.",
	},
	developer: {
		label: "Developer workflow",
		title: "Building an API-backed app?",
		description: "Use this slot for hosting, monitoring, or developer API affiliate offers relevant to the current tester.",
	},
	seo: {
		label: "SEO workflow",
		title: "Auditing a live website?",
		description: "Use this slot for hosting, indexing, analytics, or SEO monitoring recommendations.",
	},
	hosting: {
		label: "Hosting workflow",
		title: "Need faster hosting?",
		description: "Use this slot for hosting credits or performance-focused infrastructure recommendations.",
	},
} as const;
