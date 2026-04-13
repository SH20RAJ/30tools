import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Text to Binary Converter Online - No Signup | 30tools",
	description:
		"Developer tools: Text to Binary Converter. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in you",
	keywords: [
		"text to binary converter free",
		"text to binary converter online",
		"low competition text to binary tool",
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
	return <PremiumToolPage toolId="text-to-binary-converter" />;
}
