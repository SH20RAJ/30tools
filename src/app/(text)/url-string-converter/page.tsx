import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "url-string-converter";
const _CATEGORY = "text";

export const metadata = {
	title: "Free Url String Converter Online - No Signup | 30tools",
	description:
		"Use our free Url String Converter to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try url-string-converter now!",
	keywords: ["url-string-converter", "string", "converter"],
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
