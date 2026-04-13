import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "remove-markdown-formatting";
const _CATEGORY = "text";

export const metadata = {
	title: "Free Remove Markdown Formatting Online - No Signup | 30tools",
	description:
		"Use our free Remove Markdown Formatting to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try remove-markdown-formatting now!",
	keywords: ["remove-markdown-formatting", "remove", "markdown", "formatting"],
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
