import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "mobile-optimization-tool";
const _CATEGORY = "seo";

export const metadata = {
	title: "Free Mobile Optimization Tool Online - No Signup | 30tools",
	description:
		"Use our free Mobile Optimization Tool to optimize your website instantly. No registration needed, high quality results, and secure browser-based processing. Try mobile-optimization-tool now!",
	keywords: ["mobile-optimization-tool", "mobile", "optimization", "tool"],
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
