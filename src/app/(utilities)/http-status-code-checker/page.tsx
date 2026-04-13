import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free HTTP Status Code Checker Online - No Signup | 30tools",
	description:
		"Free utility tools: HTTP Status Code Checker. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in yo",
	keywords: [
		"http status code checker free",
		"http status code checker online",
		"low competition http status code tool",
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
	return <PremiumToolPage toolId="http-status-code-checker" />;
}
