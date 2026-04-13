import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "creative-business-names";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Creative Business Names Online - No Signup | 30tools",
	description:
		"Free Creative Business Names online. Creative Business Names allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
