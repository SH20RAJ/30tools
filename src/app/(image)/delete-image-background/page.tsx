import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "delete-image-background";
const _CATEGORY = "image";

export const metadata = {
	title: "Free Delete Image Background Online - No Signup | 30tools",
	description:
		"Use our free Delete Image Background to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try delete-image-background now!",
	keywords: ["delete-image-background", "delete", "image", "background"],
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
