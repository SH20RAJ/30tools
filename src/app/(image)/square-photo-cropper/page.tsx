import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "square-photo-cropper";
const _CATEGORY = "image";

export const metadata = {
	title: "Free Square Photo Cropper Online - No Signup | 30tools",
	description:
		"Use our free Square Photo Cropper to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try square-photo-cropper now!",
	keywords: ["square-photo-cropper", "square", "photo", "cropper"],
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
