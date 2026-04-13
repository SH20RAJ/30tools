import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "download-insta-carousel";
const _CATEGORY = "video";

export const metadata = {
	title: "Free Download Insta Carousel Online - No Signup | 30tools",
	description:
		"Use our free Download Insta Carousel to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try download-insta-carousel now!",
	keywords: ["download-insta-carousel", "download", "insta", "carousel"],
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
