import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free HTML Encoder Online - No Signup | 30tools",
	description:
		"Developer tools: HTML Encoder. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in your browser fo",
	keywords: [
		"html encoder free",
		"html encoder online",
		"low competition html encoder tool",
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
	return <PremiumToolPage toolId="html-encoder" />;
}
