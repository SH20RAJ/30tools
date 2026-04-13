import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "w3c-html-validation-alternative";
const _CATEGORY = "others";

export const metadata = {
	title: "Free W3c Html Validation Alternative Online - No Signup | 30tools",
	description:
		"Free W3c Html Validation Alternative online. W3c Html Validation Alternative allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
