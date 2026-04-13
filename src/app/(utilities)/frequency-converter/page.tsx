import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Frequency Converter Online - No Signup | 30tools",
	description:
		"Free utility tools: Frequency Converter. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your br",
	keywords: [
		"frequency converter free",
		"frequency converter online",
		"low competition frequency tool",
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
	return <PremiumToolPage toolId="frequency-converter" />;
}
