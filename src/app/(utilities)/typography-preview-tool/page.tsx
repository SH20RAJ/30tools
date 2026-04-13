import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "typography-preview-tool";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Typography Preview Tool Online - No Signup | 30tools",
	description:
		"Free Typography Preview Tool online. Typography Preview Tool allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
