import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "instagram-fancy-text";
const _CATEGORY = "video";

export const metadata = {
	title: "Free Instagram Fancy Text Online - No Signup | 30tools",
	description:
		"Use our free Instagram Fancy Text to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try instagram-fancy-text now!",
	keywords: ["instagram-fancy-text", "instagram", "fancy", "text"],
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
