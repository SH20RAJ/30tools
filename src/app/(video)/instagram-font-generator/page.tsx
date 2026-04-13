import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "instagram-font-generator";
const _CATEGORY = "video";

export const metadata = {
	title: "Free Instagram Font Generator Online - No Signup | 30tools",
	description:
		"Use our free Instagram Font Generator to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try instagram-font-generator now!",
	keywords: ["instagram-font-generator", "instagram", "font", "generator"],
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
