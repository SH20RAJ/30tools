import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free MD5 Generator Online - No Signup | 30tools",
	description:
		"Free utility tools: MD5 Generator. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your browser ",
	keywords: [
		"md5 generator free",
		"md5 generator online",
		"low competition md5 tool",
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
	return <PremiumToolPage toolId="md5-generator" />;
}
