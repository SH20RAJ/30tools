import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "check-time-difference";
const _CATEGORY = "utilities";

export const metadata = {
	title: "Free Check Time Difference Online - No Signup | 30tools",
	description:
		"Use our free Check Time Difference to perform helpful calculations instantly. No registration needed, high quality results, and secure browser-based processing. Try check-time-difference now!",
	keywords: ["check-time-difference", "check", "time", "difference"],
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
