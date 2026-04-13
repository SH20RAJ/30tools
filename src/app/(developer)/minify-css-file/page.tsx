import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "minify-css-file";
const _CATEGORY = "developer";

export const metadata = {
	title: "Free Minify Css File Online - No Signup | 30tools",
	description:
		"Use our free Minify Css File to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try minify-css-file now!",
	keywords: ["minify-css-file", "minify", "file"],
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
