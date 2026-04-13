import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "render-markdown-html";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Render Markdown Html Online - No Signup | 30tools",
	description:
		"Free Render Markdown Html online. Render Markdown Html allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
