import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "wa-number-validator";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Wa Number Validator Online - No Signup | 30tools",
	description:
		"Free Wa Number Validator online. Wa Number Validator allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
