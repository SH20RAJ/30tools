import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free JavaScript Beautifier Online - No Signup | 30tools",
	description:
		"Developer tools: JavaScript Beautifier. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in your b",
	keywords: [
		"javascript beautifier free",
		"javascript beautifier online",
		"low competition javascript beautifier tool",
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
	return <PremiumToolPage toolId="javascript-beautifier" />;
}
