import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "anonymous-ig-viewer";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Anonymous Ig Viewer Online - No Signup | 30tools",
	description:
		"Free Anonymous Ig Viewer online. Anonymous Ig Viewer allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
