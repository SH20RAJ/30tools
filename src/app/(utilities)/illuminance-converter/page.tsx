import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Illuminance Converter Online - No Signup | 30tools",
	description:
		"Free utility tools: Illuminance Converter. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your ",
	keywords: [
		"illuminance converter free",
		"illuminance converter online",
		"low competition illuminance tool",
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
	return <PremiumToolPage toolId="illuminance-converter" />;
}
