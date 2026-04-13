import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free YouTube Embed Code Generator Online - No Signup | 30tools",
	description:
		"YouTube tools: YouTube Embed Code Generator. Download thumbnails, get stats, optimize videos. Free, fast, and secure. All processing happens locally in your bro",
	keywords: [
		"youtube embed code generator free",
		"youtube embed code generator online",
		"low competition youtube embed code tool",
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
	return <PremiumToolPage toolId="youtube-embed-code-generator" />;
}
