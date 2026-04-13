import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "aesthetic-bio-generator";
const _CATEGORY = "text";

export const metadata = {
	title: "Free Aesthetic Bio Generator Online - No Signup | 30tools",
	description:
		"Use our free Aesthetic Bio Generator to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try aesthetic-bio-generator now!",
	keywords: ["aesthetic-bio-generator", "aesthetic", "generator"],
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
