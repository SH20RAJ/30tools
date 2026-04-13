import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free YouTube Hashtag Extractor Online - No Signup | 30tools",
	description:
		"YouTube tools: YouTube Hashtag Extractor. Download thumbnails, get stats, optimize videos. Free, fast, and secure. All processing happens locally in your browse",
	keywords: [
		"youtube hashtag extractor free",
		"youtube hashtag extractor online",
		"low competition youtube hashtag extractor tool",
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
	return <PremiumToolPage toolId="youtube-hashtag-extractor" />;
}
