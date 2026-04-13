import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free YouTube Comment Picker Online - No Signup | 30tools",
	description:
		"YouTube tools: YouTube Comment Picker. Download thumbnails, get stats, optimize videos. Free, fast, and secure. All processing happens locally in your browser f",
	keywords: [
		"youtube comment picker free",
		"youtube comment picker online",
		"low competition youtube comment picker tool",
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
	return <PremiumToolPage toolId="youtube-comment-picker" />;
}
