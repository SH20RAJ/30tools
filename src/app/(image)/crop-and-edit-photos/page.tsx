import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "crop-and-edit-photos";
const _CATEGORY = "image";

export const metadata = {
	title: "Free Crop And Edit Photos Online - No Signup | 30tools",
	description:
		"Use our free Crop And Edit Photos to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try crop-and-edit-photos now!",
	keywords: ["crop-and-edit-photos", "crop", "edit", "photos"],
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
