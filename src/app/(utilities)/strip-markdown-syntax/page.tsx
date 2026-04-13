import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "strip-markdown-syntax";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Strip Markdown Syntax Online - No Signup | 30tools",
	description:
		"Free Strip Markdown Syntax online. Strip Markdown Syntax allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
