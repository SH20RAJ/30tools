import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Number to Roman Numerals Online - No Signup | 30tools",
	description:
		"Free utility tools: Number to Roman Numerals. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in yo",
	keywords: [
		"number to roman numerals free",
		"number to roman numerals online",
		"low competition number to roman numerals tool",
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
	return <PremiumToolPage toolId="number-to-roman-numerals" />;
}
