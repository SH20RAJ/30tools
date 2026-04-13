import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Credit Card Generator Online - No Signup | 30tools",
	description:
		"Free utility tools: Credit Card Generator. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your ",
	keywords: [
		"credit card generator free",
		"credit card generator online",
		"low competition credit card tool",
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
	return <PremiumToolPage toolId="credit-card-generator" />;
}
