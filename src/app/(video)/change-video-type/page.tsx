import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "change-video-type";
const _CATEGORY = "video";

export const metadata = {
	title: "Free Change Video Type Online - No Signup | 30tools",
	description:
		"Use our free Change Video Type to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try change-video-type now!",
	keywords: ["change-video-type", "change", "video", "type"],
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
