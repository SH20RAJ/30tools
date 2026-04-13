import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "story-viewer-without-account";
const _CATEGORY = "video";

export const metadata = {
	title: "Free Story Viewer Without Account Online - No Signup | 30tools",
	description:
		"Use our free Story Viewer Without Account to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try story-viewer-without-account now!",
	keywords: [
		"story-viewer-without-account",
		"story",
		"viewer",
		"without",
		"account",
	],
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
