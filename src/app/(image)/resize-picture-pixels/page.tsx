import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "resize-picture-pixels";
const _CATEGORY = "image";

export const metadata = {
	title: "Free Resize Picture Pixels Online - No Signup | 30tools",
	description:
		"Use our free Resize Picture Pixels to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try resize-picture-pixels now!",
	keywords: ["resize-picture-pixels", "resize", "picture", "pixels"],
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
