import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Text Repeater Online - No Signup | 30tools",
	description:
		"Free text tools: Text Repeater. Format, convert, manipulate text. Instant results, copy to clipboard, no limits. All processing happens locally in your browser ",
	keywords: [
		"text repeater free",
		"text repeater online",
		"low competition text repeater tool",
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
	return <PremiumToolPage toolId="text-repeater" />;
}
