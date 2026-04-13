import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Text Sorter Online - No Signup | 30tools",
	description:
		"Free text tools: Text Sorter. Format, convert, manipulate text. Instant results, copy to clipboard, no limits. All processing happens locally in your browser fo",
	keywords: [
		"text sorter free",
		"text sorter online",
		"low competition text sorter tool",
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
	return <PremiumToolPage toolId="text-sorter" />;
}
