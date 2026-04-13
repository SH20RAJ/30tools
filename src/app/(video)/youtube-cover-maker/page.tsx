import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "youtube-cover-maker";
const _CATEGORY = "video";

export const metadata = {
	title: "Free Youtube Cover Maker Online - No Signup | 30tools",
	description:
		"Use our free Youtube Cover Maker to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try youtube-cover-maker now!",
	keywords: ["youtube-cover-maker", "youtube", "cover", "maker"],
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
