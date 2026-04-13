import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "page-title-optimization";
const _CATEGORY = "seo";

export const metadata = {
	title: "Free Page Title Optimization Online - No Signup | 30tools",
	description:
		"Use our free Page Title Optimization to optimize your website instantly. No registration needed, high quality results, and secure browser-based processing. Try page-title-optimization now!",
	keywords: ["page-title-optimization", "page", "title", "optimization"],
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
