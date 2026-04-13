import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "save-reels-video";
const _CATEGORY = "downloaders";

export const metadata = {
	title: "Free Save Reels Video Online - No Signup | 30tools",
	description:
		"Use our free Save Reels Video to save social media content instantly. No registration needed, high quality results, and secure browser-based processing. Try save-reels-video now!",
	keywords: ["save-reels-video", "save", "reels", "video"],
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
