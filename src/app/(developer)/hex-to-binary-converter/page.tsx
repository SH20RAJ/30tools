import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free HEX to Binary Converter Online - No Signup | 30tools",
	description:
		"Developer tools: HEX to Binary Converter. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in your",
	keywords: [
		"hex to binary converter free",
		"hex to binary converter online",
		"low competition hex to binary tool",
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
	return <PremiumToolPage toolId="hex-to-binary-converter" />;
}
