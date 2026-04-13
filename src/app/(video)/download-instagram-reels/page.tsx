import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "download-instagram-reels";
const _CATEGORY = "video";

export const metadata = {
	title: "Free Download Instagram Reels Online - No Signup | 30tools",
	description:
		"Use our free Download Instagram Reels to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try download-instagram-reels now!",
	keywords: ["download-instagram-reels", "download", "instagram", "reels"],
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
