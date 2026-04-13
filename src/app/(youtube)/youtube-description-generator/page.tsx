import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free YouTube Description Generator Online - No Signup | 30tools",
	description:
		"YouTube tools: YouTube Description Generator. Download thumbnails, get stats, optimize videos. Free, fast, and secure. All processing happens locally in your br",
	keywords: [
		"youtube description generator free",
		"youtube description generator online",
		"low competition youtube description tool",
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
	return <PremiumToolPage toolId="youtube-description-generator" />;
}
