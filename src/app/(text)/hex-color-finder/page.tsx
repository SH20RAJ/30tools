import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "hex-color-finder";
const _CATEGORY = "text";

export const metadata = {
	title: "Free Hex Color Finder Online - No Signup | 30tools",
	description:
		"Use our free Hex Color Finder to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try hex-color-finder now!",
	keywords: ["hex-color-finder", "color", "finder"],
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
