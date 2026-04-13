import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Credit Card Validator Online - No Signup | 30tools",
	description:
		"Free utility tools: Credit Card Validator. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your ",
	keywords: [
		"credit card validator free",
		"credit card validator online",
		"low competition credit card validator tool",
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
	return <PremiumToolPage toolId="credit-card-validator" />;
}
