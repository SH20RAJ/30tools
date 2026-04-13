import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "capitalize-text-online";
const _CATEGORY = "text";

export const metadata = {
	title: "Free Capitalize Text Online Online - No Signup | 30tools",
	description:
		"Use our free Capitalize Text Online to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try capitalize-text-online now!",
	keywords: ["capitalize-text-online", "capitalize", "text", "online"],
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
