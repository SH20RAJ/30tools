import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free CSS Minifier Online - No Signup | 30tools",
	description:
		"Developer tools: CSS Minifier. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in your browser fo",
	keywords: [
		"css minifier free",
		"css minifier online",
		"low competition css minifier tool",
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
	return <PremiumToolPage toolId="css-minifier" />;
}
