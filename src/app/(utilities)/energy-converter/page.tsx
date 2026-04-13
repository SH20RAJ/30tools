import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Energy Converter Online - No Signup | 30tools",
	description:
		"Free utility tools: Energy Converter. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your brows",
	keywords: [
		"energy converter free",
		"energy converter online",
		"low competition energy tool",
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
	return <PremiumToolPage toolId="energy-converter" />;
}
