import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "download-tiktok-sound";
const _CATEGORY = "video";

export const metadata = {
	title: "Free Download Tiktok Sound Online - No Signup | 30tools",
	description:
		"Use our free Download Tiktok Sound to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try download-tiktok-sound now!",
	keywords: ["download-tiktok-sound", "download", "tiktok", "sound"],
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
