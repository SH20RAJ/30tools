import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free QR Code Decoder Online - No Signup | 30tools",
	description:
		"Free utility tools: QR Code Decoder. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your browse",
	keywords: [
		"qr code decoder free",
		"qr code decoder online",
		"low competition qr code decoder tool",
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
	return <PremiumToolPage toolId="qr-code-decoder" />;
}
