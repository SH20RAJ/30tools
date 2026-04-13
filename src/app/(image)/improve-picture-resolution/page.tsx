import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "improve-picture-resolution";
const _CATEGORY = "image";

export const metadata = {
	title: "Free Improve Picture Resolution Online - No Signup | 30tools",
	description:
		"Use our free Improve Picture Resolution to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try improve-picture-resolution now!",
	keywords: ["improve-picture-resolution", "improve", "picture", "resolution"],
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
