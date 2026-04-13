import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "analyze-meta-tags";
const _CATEGORY = "seo";

export const metadata = {
	title: "Free Analyze Meta Tags Online - No Signup | 30tools",
	description:
		"Use our free Analyze Meta Tags to optimize your website instantly. No registration needed, high quality results, and secure browser-based processing. Try analyze-meta-tags now!",
	keywords: ["analyze-meta-tags", "analyze", "meta", "tags"],
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

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
