import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free YouTube Channel Logo Downloader Online - No Signup | 30tools",
	description:
		"YouTube tools: YouTube Channel Logo Downloader. Download thumbnails, get stats, optimize videos. Free, fast, and secure. All processing happens locally in your ",
	keywords: [
		"youtube channel logo downloader free",
		"youtube channel logo downloader online",
		"low competition youtube channel logo downloader tool",
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
	return <PremiumToolPage toolId="youtube-channel-logo-downloader" />;
}
