import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "epoch-to-datetime";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Epoch To Datetime Online - No Signup | 30tools",
	description:
		"Free Epoch To Datetime online. Epoch To Datetime allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
