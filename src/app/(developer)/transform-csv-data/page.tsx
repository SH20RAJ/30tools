import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "transform-csv-data";
const _CATEGORY = "developer";

export const metadata = {
	title: "Free Transform Csv Data Online - No Signup | 30tools",
	description:
		"Use our free Transform Csv Data to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try transform-csv-data now!",
	keywords: ["transform-csv-data", "transform", "data"],
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
