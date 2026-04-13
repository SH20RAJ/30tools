import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "download-twitter-clips";
const _CATEGORY = "video";

export const metadata = {
	title: "Free Download Twitter Clips Online - No Signup | 30tools",
	description:
		"Use our free Download Twitter Clips to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try download-twitter-clips now!",
	keywords: ["download-twitter-clips", "download", "twitter", "clips"],
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
