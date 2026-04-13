import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "startup-name-generator";
const _CATEGORY = "text";

export const metadata = {
	title: "Free Startup Name Generator Online - No Signup | 30tools",
	description:
		"Use our free Startup Name Generator to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try startup-name-generator now!",
	keywords: ["startup-name-generator", "startup", "name", "generator"],
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
