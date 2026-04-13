import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Binary to Text Converter Online - No Signup | 30tools",
	description:
		"Developer tools: Binary to Text Converter. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in you",
	keywords: [
		"binary to text converter free",
		"binary to text converter online",
		"low competition binary to text tool",
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
	return <PremiumToolPage toolId="binary-to-text-converter" />;
}
