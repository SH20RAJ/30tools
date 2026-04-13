import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free PNG to WebP Converter Online - No Signup | 30tools",
	description:
		"Convert, resize, and edit images with our free PNG to WebP Converter. No registration required. Fast, secure, browser-based processing. All processing happens l",
	keywords: [
		"png to webp converter free",
		"png to webp converter online",
		"low competition png to webp tool",
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
	return <PremiumToolPage toolId="png-to-webp-converter" />;
}
