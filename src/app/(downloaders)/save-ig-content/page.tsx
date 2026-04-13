import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "save-ig-content";
const _CATEGORY = "downloaders";

export const metadata = {
	title: "Free Save Ig Content Online - No Signup | 30tools",
	description:
		"Use our free Save Ig Content to save social media content instantly. No registration needed, high quality results, and secure browser-based processing. Try save-ig-content now!",
	keywords: ["save-ig-content", "save", "content"],
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
