import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Word to Number Converter Online - No Signup | 30tools",
	description:
		"Free text tools: Word to Number Converter. Format, convert, manipulate text. Instant results, copy to clipboard, no limits. All processing happens locally in yo",
	keywords: [
		"word to number converter free",
		"word to number converter online",
		"low competition word to number tool",
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
	return <PremiumToolPage toolId="word-to-number-converter" />;
}
