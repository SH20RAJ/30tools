import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "xml-pretty-print";
const _CATEGORY = "developer";

export const metadata = {
	title: "Free Xml Pretty Print Online - No Signup | 30tools",
	description:
		"Use our free Xml Pretty Print to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try xml-pretty-print now!",
	keywords: ["xml-pretty-print", "pretty", "print"],
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
