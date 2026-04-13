import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "alt-text-checker";
const _CATEGORY = "text";

export const metadata = {
	title: "Free Alt Text Checker Online - No Signup | 30tools",
	description:
		"Use our free Alt Text Checker to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try alt-text-checker now!",
	keywords: ["alt-text-checker", "text", "checker"],
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
