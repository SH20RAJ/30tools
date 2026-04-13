import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "play-avi-as-mp4";
const _CATEGORY = "video";

export const metadata = {
	title: "Free Play Avi As Mp4 Online - No Signup | 30tools",
	description:
		"Use our free Play Avi As Mp4 to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try play-avi-as-mp4 now!",
	keywords: ["play-avi-as-mp4", "play"],
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
