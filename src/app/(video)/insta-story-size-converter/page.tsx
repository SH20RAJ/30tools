import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "insta-story-size-converter";
const _CATEGORY = "video";

export const metadata = {
	title: "Free Insta Story Size Converter Online - No Signup | 30tools",
	description:
		"Use our free Insta Story Size Converter to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try insta-story-size-converter now!",
	keywords: [
		"insta-story-size-converter",
		"insta",
		"story",
		"size",
		"converter",
	],
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
