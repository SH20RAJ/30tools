import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "seo-competition-analysis";
const _CATEGORY = "seo";

export const metadata = {
	title: "Free Seo Competition Analysis Online - No Signup | 30tools",
	description:
		"Use our free Seo Competition Analysis to optimize your website instantly. No registration needed, high quality results, and secure browser-based processing. Try seo-competition-analysis now!",
	keywords: ["seo-competition-analysis", "competition", "analysis"],
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
