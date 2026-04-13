import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "css-gradient-generator";
const _CATEGORY = "text";

export const metadata = {
	title: "Free Css Gradient Generator Online - No Signup | 30tools",
	description:
		"Use our free Css Gradient Generator to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try css-gradient-generator now!",
	keywords: ["css-gradient-generator", "gradient", "generator"],
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
