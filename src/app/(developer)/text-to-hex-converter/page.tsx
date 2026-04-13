import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Text to HEX Converter Online - No Signup | 30tools",
	description:
		"Developer tools: Text to HEX Converter. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in your b",
	keywords: [
		"text to hex converter free",
		"text to hex converter online",
		"low competition text to hex tool",
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
	return <PremiumToolPage toolId="text-to-hex-converter" />;
}
