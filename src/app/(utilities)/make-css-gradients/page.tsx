import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "make-css-gradients";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Make Css Gradients Online - No Signup | 30tools",
	description:
		"Free Make Css Gradients online. Make Css Gradients allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
