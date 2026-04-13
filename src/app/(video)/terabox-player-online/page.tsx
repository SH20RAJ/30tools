import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "terabox-player-online";
const _CATEGORY = "video";

export const metadata = {
	title: "Free Terabox Player Online Online - No Signup | 30tools",
	description:
		"Use our free Terabox Player Online to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try terabox-player-online now!",
	keywords: ["terabox-player-online", "terabox", "player", "online"],
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
