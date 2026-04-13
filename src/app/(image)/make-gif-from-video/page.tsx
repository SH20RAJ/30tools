import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "make-gif-from-video";
const _CATEGORY = "image";

export const metadata = {
	title: "Free Make Gif From Video Online - No Signup | 30tools",
	description:
		"Use our free Make Gif From Video to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try make-gif-from-video now!",
	keywords: ["make-gif-from-video", "make", "from", "video"],
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
