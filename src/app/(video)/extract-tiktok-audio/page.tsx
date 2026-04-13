import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "extract-tiktok-audio";
const _CATEGORY = "video";

export const metadata = {
	title: "Free Extract Tiktok Audio Online - No Signup | 30tools",
	description:
		"Use our free Extract Tiktok Audio to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try extract-tiktok-audio now!",
	keywords: ["extract-tiktok-audio", "extract", "tiktok", "audio"],
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
