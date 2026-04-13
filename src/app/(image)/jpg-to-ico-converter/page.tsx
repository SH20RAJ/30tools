import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free JPG to ICO Converter Online - No Signup | 30tools",
	description:
		"Convert, resize, and edit images with our free JPG to ICO Converter. No registration required. Fast, secure, browser-based processing. All processing happens lo",
	keywords: [
		"jpg to ico converter free",
		"jpg to ico converter online",
		"low competition jpg to ico tool",
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
	return <PremiumToolPage toolId="jpg-to-ico-converter" />;
}
