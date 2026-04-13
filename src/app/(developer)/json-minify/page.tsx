import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free JSON Minify Online - No Signup | 30tools",
	description:
		"Developer tools: JSON Minify. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in your browser for",
	keywords: [
		"json minify free",
		"json minify online",
		"low competition json minify tool",
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
	return <PremiumToolPage toolId="json-minify" />;
}
