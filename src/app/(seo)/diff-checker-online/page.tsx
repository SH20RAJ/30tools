import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "diff-checker-online";
const _CATEGORY = "seo";

export const metadata = {
	title: "Free Diff Checker Online Online - No Signup | 30tools",
	description:
		"Use our free Diff Checker Online to optimize your website instantly. No registration needed, high quality results, and secure browser-based processing. Try diff-checker-online now!",
	keywords: ["diff-checker-online", "diff", "checker", "online"],
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
