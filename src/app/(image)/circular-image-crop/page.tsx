import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "circular-image-crop";
const _CATEGORY = "image";

export const metadata = {
	title: "Free Circular Image Crop Online - No Signup | 30tools",
	description:
		"Use our free Circular Image Crop to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try circular-image-crop now!",
	keywords: ["circular-image-crop", "circular", "image", "crop"],
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
