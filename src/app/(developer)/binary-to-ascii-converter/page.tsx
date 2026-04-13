import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Binary to ASCII Converter Online - No Signup | 30tools",
	description:
		"Developer tools: Binary to ASCII Converter. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in yo",
	keywords: [
		"binary to ascii converter free",
		"binary to ascii converter online",
		"low competition binary to ascii tool",
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
	return <PremiumToolPage toolId="binary-to-ascii-converter" />;
}
