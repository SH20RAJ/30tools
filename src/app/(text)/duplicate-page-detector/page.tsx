import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "duplicate-page-detector";
const _CATEGORY = "text";

export const metadata = {
	title: "Free Duplicate Page Detector Online - No Signup | 30tools",
	description:
		"Use our free Duplicate Page Detector to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try duplicate-page-detector now!",
	keywords: ["duplicate-page-detector", "duplicate", "page", "detector"],
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
