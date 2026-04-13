import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Decimal to HEX Converter Online - No Signup | 30tools",
	description:
		"Developer tools: Decimal to HEX Converter. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in you",
	keywords: [
		"decimal to hex converter free",
		"decimal to hex converter online",
		"low competition decimal to hex tool",
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
	return <PremiumToolPage toolId="decimal-to-hex-converter" />;
}
