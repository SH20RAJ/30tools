import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Google Cache Checker Online - No Signup | 30tools",
	description:
		"SEO tools: Google Cache Checker. Analyze, optimize, improve search rankings. Free, professional, instant results. All processing happens locally in your browser",
	keywords: [
		"google cache checker free",
		"google cache checker online",
		"low competition google cache tool",
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
	return <PremiumToolPage toolId="google-cache-checker" />;
}
