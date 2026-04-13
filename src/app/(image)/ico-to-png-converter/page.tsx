import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free ICO to PNG Converter Online - No Signup | 30tools",
	description:
		"Convert, resize, and edit images with our free ICO to PNG Converter. No registration required. Fast, secure, browser-based processing. All processing happens lo",
	keywords: [
		"ico to png converter free",
		"ico to png converter online",
		"low competition ico to png tool",
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
	return <PremiumToolPage toolId="ico-to-png-converter" />;
}
