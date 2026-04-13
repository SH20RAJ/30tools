import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "metric-imperial-converter";
const _CATEGORY = "text";

export const metadata = {
	title: "Free Metric Imperial Converter Online - No Signup | 30tools",
	description:
		"Use our free Metric Imperial Converter to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try metric-imperial-converter now!",
	keywords: ["metric-imperial-converter", "metric", "imperial", "converter"],
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
