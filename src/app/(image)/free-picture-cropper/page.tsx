import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "free-picture-cropper";
const _CATEGORY = "image";

export const metadata = {
	title: "Free Free Picture Cropper Online - No Signup | 30tools",
	description:
		"Use our free Free Picture Cropper to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try free-picture-cropper now!",
	keywords: ["free-picture-cropper", "free", "picture", "cropper"],
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
