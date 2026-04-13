import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "minify-js-online";
const _CATEGORY = "developer";

export const metadata = {
	title: "Free Minify Js Online Online - No Signup | 30tools",
	description:
		"Use our free Minify Js Online to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try minify-js-online now!",
	keywords: ["minify-js-online", "minify", "online"],
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
