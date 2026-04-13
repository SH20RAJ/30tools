import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "mobile-seo-checker";
const _CATEGORY = "seo";

export const metadata = {
	title: "Free Mobile Seo Checker Online - No Signup | 30tools",
	description:
		"Use our free Mobile Seo Checker to optimize your website instantly. No registration needed, high quality results, and secure browser-based processing. Try mobile-seo-checker now!",
	keywords: ["mobile-seo-checker", "mobile", "checker"],
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
