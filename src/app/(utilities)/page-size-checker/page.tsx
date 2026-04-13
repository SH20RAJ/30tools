import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Page Size Checker Online - No Signup | 30tools",
	description:
		"Free utility tools: Page Size Checker. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your brow",
	keywords: [
		"page size checker free",
		"page size checker online",
		"low competition page size tool",
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
	return <PremiumToolPage toolId="page-size-checker" />;
}
