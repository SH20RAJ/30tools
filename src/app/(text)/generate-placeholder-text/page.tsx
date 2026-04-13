import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "generate-placeholder-text";
const _CATEGORY = "text";

export const metadata = {
	title: "Free Generate Placeholder Text Online - No Signup | 30tools",
	description:
		"Use our free Generate Placeholder Text to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try generate-placeholder-text now!",
	keywords: ["generate-placeholder-text", "generate", "placeholder", "text"],
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
