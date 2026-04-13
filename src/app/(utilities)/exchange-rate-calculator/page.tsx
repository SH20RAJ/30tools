import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "exchange-rate-calculator";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Exchange Rate Calculator Online - No Signup | 30tools",
	description:
		"Free Exchange Rate Calculator online. Exchange Rate Calculator allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
