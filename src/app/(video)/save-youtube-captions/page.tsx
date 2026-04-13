import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "save-youtube-captions";
const _CATEGORY = "video";

export const metadata = {
	title: "Free Save Youtube Captions Online - No Signup | 30tools",
	description:
		"Use our free Save Youtube Captions to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try save-youtube-captions now!",
	keywords: ["save-youtube-captions", "save", "youtube", "captions"],
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
