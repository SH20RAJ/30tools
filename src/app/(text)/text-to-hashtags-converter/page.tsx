import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Text to Hashtags Converter Online - No Signup | 30tools",
	description:
		"Free text tools: Text to Hashtags Converter. Format, convert, manipulate text. Instant results, copy to clipboard, no limits. All processing happens locally in ",
	keywords: [
		"text to hashtags converter free",
		"text to hashtags converter online",
		"low competition text to hashtags tool",
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
	return <PremiumToolPage toolId="text-to-hashtags-converter" />;
}
