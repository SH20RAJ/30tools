import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "embed-video-player";
const _CATEGORY = "video";

export const metadata = {
	title: "Free Embed Video Player Online - No Signup | 30tools",
	description:
		"Use our free Embed Video Player to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try embed-video-player now!",
	keywords: ["embed-video-player", "embed", "video", "player"],
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
