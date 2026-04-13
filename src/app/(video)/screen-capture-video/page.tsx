import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "screen-capture-video";
const _CATEGORY = "video";

export const metadata = {
	title: "Free Screen Capture Video Online - No Signup | 30tools",
	description:
		"Use our free Screen Capture Video to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try screen-capture-video now!",
	keywords: ["screen-capture-video", "screen", "capture", "video"],
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
