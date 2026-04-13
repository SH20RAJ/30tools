import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "cool-bio-fonts";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Cool Bio Fonts Online - No Signup | 30tools",
	description:
		"Free Cool Bio Fonts online. Cool Bio Fonts allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
