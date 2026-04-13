import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "online-logo-design";
const _CATEGORY = "image";

export const metadata = {
	title: "Free Online Logo Design Online - No Signup | 30tools",
	description:
		"Use our free Online Logo Design to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try online-logo-design now!",
	keywords: ["online-logo-design", "online", "logo", "design"],
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
