import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Text to Slug Converter Online - No Signup | 30tools",
	description:
		"Free text tools: Text to Slug Converter. Format, convert, manipulate text. Instant results, copy to clipboard, no limits. All processing happens locally in your",
	keywords: [
		"text to slug converter free",
		"text to slug converter online",
		"low competition text to slug tool",
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
	return <PremiumToolPage toolId="text-to-slug-converter" />;
}
