import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "html-head-tags-maker";
const _CATEGORY = "generators";

export const metadata = {
	title: "Free Html Head Tags Maker Online - No Signup | 30tools",
	description:
		"Use our free Html Head Tags Maker to generate random content instantly. No registration needed, high quality results, and secure browser-based processing. Try html-head-tags-maker now!",
	keywords: ["html-head-tags-maker", "html", "head", "tags", "maker"],
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
