import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free YouTube Channel Age Checker Online - No Signup | 30tools",
	description:
		"YouTube tools: YouTube Channel Age Checker. Download thumbnails, get stats, optimize videos. Free, fast, and secure. All processing happens locally in your brow",
	keywords: [
		"youtube channel age checker free",
		"youtube channel age checker online",
		"low competition youtube channel age tool",
	],
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function ToolPage() {
	return <PremiumToolPage toolId="youtube-channel-age-checker" />;
}
