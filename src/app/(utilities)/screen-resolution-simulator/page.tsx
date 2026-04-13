import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Screen Resolution Simulator Online - No Signup | 30tools",
	description:
		"Free utility tools: Screen Resolution Simulator. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in",
	keywords: [
		"screen resolution simulator free",
		"screen resolution simulator online",
		"low competition screen resolution simulator tool",
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
	return <PremiumToolPage toolId="screen-resolution-simulator" />;
}
