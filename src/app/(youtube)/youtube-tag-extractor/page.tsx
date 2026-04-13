import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free YouTube Tag Extractor Online - No Signup | 30tools",
	description:
		"YouTube tools: YouTube Tag Extractor. Download thumbnails, get stats, optimize videos. Free, fast, and secure. All processing happens locally in your browser fo",
	keywords: [
		"youtube tag extractor free",
		"youtube tag extractor online",
		"low competition youtube tag extractor tool",
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
	return <PremiumToolPage toolId="youtube-tag-extractor" />;
}
