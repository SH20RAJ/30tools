import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Text Compare Online - No Signup | 30tools",
	description:
		"Free text tools: Text Compare. Format, convert, manipulate text. Instant results, copy to clipboard, no limits. All processing happens locally in your browser f",
	keywords: [
		"text compare free",
		"text compare online",
		"low competition text compare tool",
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
	return <PremiumToolPage toolId="text-compare" />;
}
