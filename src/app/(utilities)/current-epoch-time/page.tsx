import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "current-epoch-time";
const _CATEGORY = "utilities";

export const metadata = {
	title: "Free Current Epoch Time Online - No Signup | 30tools",
	description:
		"Use our free Current Epoch Time to perform helpful calculations instantly. No registration needed, high quality results, and secure browser-based processing. Try current-epoch-time now!",
	keywords: ["current-epoch-time", "current", "epoch", "time"],
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
