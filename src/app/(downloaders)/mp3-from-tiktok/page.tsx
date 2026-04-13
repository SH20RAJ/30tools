import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "mp3-from-tiktok";
const _CATEGORY = "downloaders";

export const metadata = {
	title: "Free Mp3 From Tiktok Online - No Signup | 30tools",
	description:
		"Use our free Mp3 From Tiktok to save social media content instantly. No registration needed, high quality results, and secure browser-based processing. Try mp3-from-tiktok now!",
	keywords: ["mp3-from-tiktok", "from", "tiktok"],
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
