import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "regular-expression-validator";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Regular Expression Validator Online - No Signup | 30tools",
	description:
		"Free Regular Expression Validator online. Regular Expression Validator allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
