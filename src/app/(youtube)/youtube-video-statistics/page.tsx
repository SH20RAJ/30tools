import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free YouTube Video Statistics Online - No Signup | 30tools",
	description:
		"YouTube tools: YouTube Video Statistics. Download thumbnails, get stats, optimize videos. Free, fast, and secure. All processing happens locally in your browser",
	keywords: [
		"youtube video statistics free",
		"youtube video statistics online",
		"low competition youtube video statistics tool",
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
	return <PremiumToolPage toolId="youtube-video-statistics" />;
}
