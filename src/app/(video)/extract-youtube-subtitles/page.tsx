import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "extract-youtube-subtitles";
const _CATEGORY = "video";

export const metadata = {
	title: "Free Extract Youtube Subtitles Online - No Signup | 30tools",
	description:
		"Use our free Extract Youtube Subtitles to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try extract-youtube-subtitles now!",
	keywords: ["extract-youtube-subtitles", "extract", "youtube", "subtitles"],
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
