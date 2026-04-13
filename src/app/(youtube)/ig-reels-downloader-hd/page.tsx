import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "ig-reels-downloader-hd";
const _CATEGORY = "youtube";

export const metadata = {
	title: "Free Ig Reels Downloader Hd Online - No Signup | 30tools",
	description:
		"Use our free Ig Reels Downloader Hd to download YouTube content instantly. No registration needed, high quality results, and secure browser-based processing. Try ig-reels-downloader-hd now!",
	keywords: ["ig-reels-downloader-hd", "reels", "downloader"],
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
