import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "convert-video-format";
const _CATEGORY = "video";

export const metadata = {
	title: "Free Convert Video Format Online - No Signup | 30tools",
	description:
		"Use our free Convert Video Format to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try convert-video-format now!",
	keywords: ["convert-video-format", "convert", "video", "format"],
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
