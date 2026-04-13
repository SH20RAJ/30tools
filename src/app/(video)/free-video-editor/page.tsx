import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "free-video-editor";
const _CATEGORY = "video";

export const metadata = {
	title: "Free Free Video Editor Online - No Signup | 30tools",
	description:
		"Use our free Free Video Editor to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try free-video-editor now!",
	keywords: ["free-video-editor", "free", "video", "editor"],
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
