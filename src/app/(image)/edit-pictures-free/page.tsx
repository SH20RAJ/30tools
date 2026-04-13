import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "edit-pictures-free";
const _CATEGORY = "image";

export const metadata = {
	title: "Free Edit Pictures Free Online - No Signup | 30tools",
	description:
		"Use our free Edit Pictures Free to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try edit-pictures-free now!",
	keywords: ["edit-pictures-free", "edit", "pictures", "free"],
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
