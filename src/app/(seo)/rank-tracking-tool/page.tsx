import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "rank-tracking-tool";
const _CATEGORY = "seo";

export const metadata = {
	title: "Free Rank Tracking Tool Online - No Signup | 30tools",
	description:
		"Use our free Rank Tracking Tool to optimize your website instantly. No registration needed, high quality results, and secure browser-based processing. Try rank-tracking-tool now!",
	keywords: ["rank-tracking-tool", "rank", "tracking", "tool"],
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
