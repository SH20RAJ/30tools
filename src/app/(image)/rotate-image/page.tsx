import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Rotate Image Online - No Signup | 30tools",
	description:
		"Convert, resize, and edit images with our free Rotate Image. No registration required. Fast, secure, browser-based processing. All processing happens locally in",
	keywords: [
		"rotate image free",
		"rotate image online",
		"low competition rotate image tool",
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
	return <PremiumToolPage toolId="rotate-image" />;
}
