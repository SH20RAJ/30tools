import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "test-structured-data";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Test Structured Data Online - No Signup | 30tools",
	description:
		"Free Test Structured Data online. Test Structured Data allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
