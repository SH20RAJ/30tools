import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "fix-text-spacing";
const _CATEGORY = "text";

export const metadata = {
	title: "Free Fix Text Spacing Online - No Signup | 30tools",
	description:
		"Use our free Fix Text Spacing to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try fix-text-spacing now!",
	keywords: ["fix-text-spacing", "text", "spacing"],
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
