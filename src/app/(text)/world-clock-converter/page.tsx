import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "world-clock-converter";
const _CATEGORY = "text";

export const metadata = {
	title: "Free World Clock Converter Online - No Signup | 30tools",
	description:
		"Use our free World Clock Converter to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try world-clock-converter now!",
	keywords: ["world-clock-converter", "world", "clock", "converter"],
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
