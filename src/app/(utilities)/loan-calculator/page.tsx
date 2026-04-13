import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Loan Calculator Online - No Signup | 30tools",
	description:
		"Free utility tools: Loan Calculator. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your browse",
	keywords: [
		"loan calculator free",
		"loan calculator online",
		"low competition loan calculator tool",
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
	return <PremiumToolPage toolId="loan-calculator" />;
}
