import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "ssl-expiry-date";
const _CATEGORY = "utilities";

export const metadata = {
	title: "Free Ssl Expiry Date Online - No Signup | 30tools",
	description:
		"Use our free Ssl Expiry Date to perform helpful calculations instantly. No registration needed, high quality results, and secure browser-based processing. Try ssl-expiry-date now!",
	keywords: ["ssl-expiry-date", "expiry", "date"],
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
