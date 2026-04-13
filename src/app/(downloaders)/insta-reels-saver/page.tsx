import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "insta-reels-saver";
const _CATEGORY = "downloaders";

export const metadata = {
	title: "Free Insta Reels Saver Online - No Signup | 30tools",
	description:
		"Use our free Insta Reels Saver to save social media content instantly. No registration needed, high quality results, and secure browser-based processing. Try insta-reels-saver now!",
	keywords: ["insta-reels-saver", "insta", "reels", "saver"],
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
