import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Text to Decimal Converter Online - No Signup | 30tools",
	description:
		"Developer tools: Text to Decimal Converter. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in yo",
	keywords: [
		"text to decimal converter free",
		"text to decimal converter online",
		"low competition text to decimal tool",
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
	return <PremiumToolPage toolId="text-to-decimal-converter" />;
}
