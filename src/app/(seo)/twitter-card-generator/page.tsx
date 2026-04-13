import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Twitter Card Generator Online - No Signup | 30tools",
	description:
		"SEO tools: Twitter Card Generator. Analyze, optimize, improve search rankings. Free, professional, instant results. All processing happens locally in your brows",
	keywords: [
		"twitter card generator free",
		"twitter card generator online",
		"low competition twitter card tool",
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
	return <PremiumToolPage toolId="twitter-card-generator" />;
}
