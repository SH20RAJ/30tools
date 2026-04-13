import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free YouTube Channel Banner Downloader Online - No Signup | 30tools",
	description:
		"YouTube tools: YouTube Channel Banner Downloader. Download thumbnails, get stats, optimize videos. Free, fast, and secure. All processing happens locally in you",
	keywords: [
		"youtube channel banner downloader free",
		"youtube channel banner downloader online",
		"low competition youtube channel banner downloader tool",
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
	return <PremiumToolPage toolId="youtube-channel-banner-downloader" />;
}
