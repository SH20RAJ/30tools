import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "load-time-checker";
const _CATEGORY = "seo";

export const metadata = {
	title: "Free Load Time Checker Online - No Signup | 30tools",
	description:
		"Use our free Load Time Checker to optimize your website instantly. No registration needed, high quality results, and secure browser-based processing. Try load-time-checker now!",
	keywords: ["load-time-checker", "load", "time", "checker"],
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
