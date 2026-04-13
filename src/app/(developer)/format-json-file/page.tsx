import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "format-json-file";
const _CATEGORY = "developer";

export const metadata = {
	title: "Free Format Json File Online - No Signup | 30tools",
	description:
		"Use our free Format Json File to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try format-json-file now!",
	keywords: ["format-json-file", "format", "json", "file"],
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
