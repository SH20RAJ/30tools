import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "best-excuse-generator";
const _CATEGORY = "text";

export const metadata = {
	title: "Free Best Excuse Generator Online - No Signup | 30tools",
	description:
		"Use our free Best Excuse Generator to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try best-excuse-generator now!",
	keywords: ["best-excuse-generator", "best", "excuse", "generator"],
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
