import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free GST Calculator Online - No Signup | 30tools",
	description:
		"Free utility tools: GST Calculator. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your browser",
	keywords: [
		"gst calculator free",
		"gst calculator online",
		"low competition gst calculator tool",
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
	return <PremiumToolPage toolId="gst-calculator" />;
}
