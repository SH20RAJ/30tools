import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free Website Ranking Checker Online - No Signup | 30tools",
	description:
		"SEO tools: Website Ranking Checker. Analyze, optimize, improve search rankings. Free, professional, instant results. All processing happens locally in your brow",
	keywords: [
		"website ranking checker free",
		"website ranking checker online",
		"low competition website ranking tool",
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
	return <PremiumToolPage toolId="website-ranking-checker" />;
}
