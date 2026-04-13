import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Image to Base64 Converter Online - No Signup | 30tools",
	description:
		"Convert, resize, and edit images with our free Image to Base64 Converter. No registration required. Fast, secure, browser-based processing. All processing happe",
	keywords: [
		"image to base64 converter free",
		"image to base64 converter online",
		"low competition image to base64 tool",
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
	return <PremiumToolPage toolId="image-to-base64-converter" />;
}
