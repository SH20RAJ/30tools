import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "xml-sitemap-extractor";
const _CATEGORY = "developer";

export const metadata = {
	title: "Free Xml Sitemap Extractor Online - No Signup | 30tools",
	description:
		"Use our free Xml Sitemap Extractor to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try xml-sitemap-extractor now!",
	keywords: ["xml-sitemap-extractor", "sitemap", "extractor"],
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
