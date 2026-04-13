import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "avi-video-converter";
const _CATEGORY = "video";

export const metadata = {
	title: "Free Avi Video Converter Online - No Signup | 30tools",
	description:
		"Use our free Avi Video Converter to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try avi-video-converter now!",
	keywords: ["avi-video-converter", "video", "converter"],
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
