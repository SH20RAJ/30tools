import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "optimize-images-for-web";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Optimize Images For Web Online - No Signup | 30tools",
	description:
		"Free Optimize Images For Web online. Optimize Images For Web allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
