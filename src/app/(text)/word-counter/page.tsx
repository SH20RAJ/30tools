import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Word Counter Online - No Signup | 30tools",
	description:
		"Free text tools: Word Counter. Format, convert, manipulate text. Instant results, copy to clipboard, no limits. All processing happens locally in your browser f",
	keywords: [
		"word counter free",
		"word counter online",
		"low competition word counter tool",
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
	return <PremiumToolPage toolId="word-counter" />;
}
