import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Convert to ICO Online - No Signup | 30tools",
	description:
		"Convert, resize, and edit images with our free Convert to ICO. No registration required. Fast, secure, browser-based processing. All processing happens locally ",
	keywords: [
		"convert to ico free",
		"convert to ico online",
		"low competition convert to ico tool",
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
	return <PremiumToolPage toolId="convert-to-ico" />;
}
