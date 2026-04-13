import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "delete-duplicate-text";
const _CATEGORY = "text";

export const metadata = {
	title: "Free Delete Duplicate Text Online - No Signup | 30tools",
	description:
		"Use our free Delete Duplicate Text to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try delete-duplicate-text now!",
	keywords: ["delete-duplicate-text", "delete", "duplicate", "text"],
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
