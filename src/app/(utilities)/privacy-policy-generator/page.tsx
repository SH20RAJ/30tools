import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Privacy Policy Generator Online - No Signup | 30tools",
	description:
		"Free utility tools: Privacy Policy Generator. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in yo",
	keywords: [
		"privacy policy generator free",
		"privacy policy generator online",
		"low competition privacy policy tool",
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
	return <PremiumToolPage toolId="privacy-policy-generator" />;
}
