import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free JavaScript Minifier Online - No Signup | 30tools",
	description:
		"Developer tools: JavaScript Minifier. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in your bro",
	keywords: [
		"javascript minifier free",
		"javascript minifier online",
		"low competition javascript minifier tool",
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
	return <PremiumToolPage toolId="javascript-minifier" />;
}
