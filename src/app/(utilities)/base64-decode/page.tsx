import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Base64 Decode Online - No Signup | 30tools",
	description:
		"Free utility tools: Base64 Decode. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your browser ",
	keywords: [
		"base64 decode free",
		"base64 decode online",
		"low competition base64 decode tool",
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
	return <PremiumToolPage toolId="base64-decode" />;
}
