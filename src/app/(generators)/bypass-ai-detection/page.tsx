import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "bypass-ai-detection";
const _CATEGORY = "generators";

export const metadata = {
	title: "Free Bypass Ai Detection Online - No Signup | 30tools",
	description:
		"Use our free Bypass Ai Detection to generate random content instantly. No registration needed, high quality results, and secure browser-based processing. Try bypass-ai-detection now!",
	keywords: ["bypass-ai-detection", "bypass", "detection"],
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
