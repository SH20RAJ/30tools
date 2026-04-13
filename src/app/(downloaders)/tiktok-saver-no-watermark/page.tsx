import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "tiktok-saver-no-watermark";
const _CATEGORY = "downloaders";

export const metadata = {
	title: "Free Tiktok Saver No Watermark Online - No Signup | 30tools",
	description:
		"Use our free Tiktok Saver No Watermark to save social media content instantly. No registration needed, high quality results, and secure browser-based processing. Try tiktok-saver-no-watermark now!",
	keywords: ["tiktok-saver-no-watermark", "tiktok", "saver", "watermark"],
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
