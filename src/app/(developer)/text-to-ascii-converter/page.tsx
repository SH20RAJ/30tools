import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Text to ASCII Converter Online - No Signup | 30tools",
	description:
		"Developer tools: Text to ASCII Converter. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in your",
	keywords: [
		"text to ascii converter free",
		"text to ascii converter online",
		"low competition text to ascii tool",
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
	return <PremiumToolPage toolId="text-to-ascii-converter" />;
}
