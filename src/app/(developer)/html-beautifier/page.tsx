import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free HTML Beautifier Online - No Signup | 30tools",
	description:
		"Developer tools: HTML Beautifier. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in your browser",
	keywords: [
		"html beautifier free",
		"html beautifier online",
		"low competition html beautifier tool",
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
	return <PremiumToolPage toolId="html-beautifier" />;
}
