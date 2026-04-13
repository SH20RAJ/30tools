import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "unix-timestamp-to-date";
const _CATEGORY = "utilities";

export const metadata = {
	title: "Free Unix Timestamp To Date Online - No Signup | 30tools",
	description:
		"Use our free Unix Timestamp To Date to perform helpful calculations instantly. No registration needed, high quality results, and secure browser-based processing. Try unix-timestamp-to-date now!",
	keywords: ["unix-timestamp-to-date", "unix", "timestamp", "date"],
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
