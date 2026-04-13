import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Charge Converter Online - No Signup | 30tools",
	description:
		"Free utility tools: Charge Converter. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your brows",
	keywords: [
		"charge converter free",
		"charge converter online",
		"low competition charge tool",
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
	return <PremiumToolPage toolId="charge-converter" />;
}
