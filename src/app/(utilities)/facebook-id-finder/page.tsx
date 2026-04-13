import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Facebook ID Finder Online - No Signup | 30tools",
	description:
		"Free utility tools: Facebook ID Finder. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your bro",
	keywords: [
		"facebook id finder free",
		"facebook id finder online",
		"low competition facebook id finder tool",
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
	return <PremiumToolPage toolId="facebook-id-finder" />;
}
