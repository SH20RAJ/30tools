import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "check-html-syntax";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Check Html Syntax Online - No Signup | 30tools",
	description:
		"Free Check Html Syntax online. Check Html Syntax allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
