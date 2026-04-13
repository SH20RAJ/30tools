import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "character-count-tool";
const _CATEGORY = "text";

export const metadata = {
	title: "Free Character Count Tool Online - No Signup | 30tools",
	description:
		"Use our free Character Count Tool to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try character-count-tool now!",
	keywords: ["character-count-tool", "character", "count", "tool"],
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
