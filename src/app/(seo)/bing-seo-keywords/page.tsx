import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "bing-seo-keywords";
const _CATEGORY = "seo";

export const metadata = {
	title: "Free Bing Seo Keywords Online - No Signup | 30tools",
	description:
		"Use our free Bing Seo Keywords to optimize your website instantly. No registration needed, high quality results, and secure browser-based processing. Try bing-seo-keywords now!",
	keywords: ["bing-seo-keywords", "bing", "keywords"],
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
