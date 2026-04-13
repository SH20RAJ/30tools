import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free HEX to RGB Converter Online - No Signup | 30tools",
	description:
		"Free utility tools: HEX to RGB Converter. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your b",
	keywords: [
		"hex to rgb converter free",
		"hex to rgb converter online",
		"low competition hex to rgb tool",
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
	return <PremiumToolPage toolId="hex-to-rgb-converter" />;
}
