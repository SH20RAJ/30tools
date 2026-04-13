import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "cut-and-merge-video";
const _CATEGORY = "video";

export const metadata = {
	title: "Free Cut And Merge Video Online - No Signup | 30tools",
	description:
		"Use our free Cut And Merge Video to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try cut-and-merge-video now!",
	keywords: ["cut-and-merge-video", "merge", "video"],
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
