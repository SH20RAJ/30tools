import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Currency Converter Online - No Signup | 30tools",
	description:
		"Free utility tools: Currency Converter. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your bro",
	keywords: [
		"currency converter free",
		"currency converter online",
		"low competition currency tool",
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
	return <PremiumToolPage toolId="currency-converter" />;
}
