import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free ASCII to Binary Converter Online - No Signup | 30tools",
	description:
		"Developer tools: ASCII to Binary Converter. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in yo",
	keywords: [
		"ascii to binary converter free",
		"ascii to binary converter online",
		"low competition ascii to binary tool",
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
	return <PremiumToolPage toolId="ascii-to-binary-converter" />;
}
