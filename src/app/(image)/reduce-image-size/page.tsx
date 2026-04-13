import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "reduce-image-size";
const _CATEGORY = "image";

export const metadata = {
	title: "Free Reduce Image Size Online - No Signup | 30tools",
	description:
		"Use our free Reduce Image Size to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try reduce-image-size now!",
	keywords: ["reduce-image-size", "reduce", "image", "size"],
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
