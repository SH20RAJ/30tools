import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "download-youtube-videos-1080p";
const _CATEGORY = "video";

export const metadata = {
	title: "Free Download Youtube Videos 1080p Online - No Signup | 30tools",
	description:
		"Use our free Download Youtube Videos 1080p to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try download-youtube-videos-1080p now!",
	keywords: [
		"download-youtube-videos-1080p",
		"download",
		"youtube",
		"videos",
		"1080p",
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
