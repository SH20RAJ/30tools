import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free YouTube Video Count Checker Online - No Signup | 30tools",
	description:
		"YouTube tools: YouTube Video Count Checker. Download thumbnails, get stats, optimize videos. Free, fast, and secure. All processing happens locally in your brow",
	keywords: [
		"youtube video count checker free",
		"youtube video count checker online",
		"low competition youtube video count tool",
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
	return <PremiumToolPage toolId="youtube-video-count-checker" />;
}
