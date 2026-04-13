import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Youtube Video Title Capitalizer Online - No Signup | 30tools",
	description:
		"YouTube tools: Youtube Video Title Capitalizer. Download thumbnails, get stats, optimize videos. Free, fast, and secure. All processing happens locally in your ",
	keywords: [
		"youtube video title capitalizer free",
		"youtube video title capitalizer online",
		"low competition youtube video title capitalizer tool",
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
	return <PremiumToolPage toolId="youtube-title-capitalizer" />;
}
