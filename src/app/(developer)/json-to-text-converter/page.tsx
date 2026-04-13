import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free JSON to Text Converter Online - No Signup | 30tools",
	description:
		"Developer tools: JSON to Text Converter. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in your ",
	keywords: [
		"json to text converter free",
		"json to text converter online",
		"low competition json to text tool",
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
	return <PremiumToolPage toolId="json-to-text-converter" />;
}
