import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "sitemap-url-downloader";
const _CATEGORY = "seo";

export const metadata = {
	title: "Free Sitemap Url Downloader Online - No Signup | 30tools",
	description:
		"Use our free Sitemap Url Downloader to optimize your website instantly. No registration needed, high quality results, and secure browser-based processing. Try sitemap-url-downloader now!",
	keywords: ["sitemap-url-downloader", "sitemap", "downloader"],
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
