import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "google-title-rewrites";
const _CATEGORY = "youtube";

export const metadata = {
	title: "Free Google Title Rewrites Online - No Signup | 30tools",
	description:
		"Use our free Google Title Rewrites to download YouTube content instantly. No registration needed, high quality results, and secure browser-based processing. Try google-title-rewrites now!",
	keywords: ["google-title-rewrites", "google", "title", "rewrites"],
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
