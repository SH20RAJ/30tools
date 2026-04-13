import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Average Calculator Online - No Signup | 30tools",
	description:
		"Free utility tools: Average Calculator. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your bro",
	keywords: [
		"average calculator free",
		"average calculator online",
		"low competition average calculator tool",
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
	return <PremiumToolPage toolId="average-calculator" />;
}
