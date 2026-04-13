import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "website-backlink-analysis";
const _CATEGORY = "seo";

export const metadata = {
	title: "Free Website Backlink Analysis Online - No Signup | 30tools",
	description:
		"Use our free Website Backlink Analysis to optimize your website instantly. No registration needed, high quality results, and secure browser-based processing. Try website-backlink-analysis now!",
	keywords: ["website-backlink-analysis", "website", "backlink", "analysis"],
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
