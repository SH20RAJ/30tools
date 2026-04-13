import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "seo-position-tracker";
const _CATEGORY = "seo";

export const metadata = {
	title: "Free Seo Position Tracker Online - No Signup | 30tools",
	description:
		"Use our free Seo Position Tracker to optimize your website instantly. No registration needed, high quality results, and secure browser-based processing. Try seo-position-tracker now!",
	keywords: ["seo-position-tracker", "position", "tracker"],
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
