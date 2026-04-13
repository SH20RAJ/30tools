import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "fb-video-saver";
const _CATEGORY = "downloaders";

export const metadata = {
	title: "Free Fb Video Saver Online - No Signup | 30tools",
	description:
		"Use our free Fb Video Saver to save social media content instantly. No registration needed, high quality results, and secure browser-based processing. Try fb-video-saver now!",
	keywords: ["fb-video-saver", "video", "saver"],
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
