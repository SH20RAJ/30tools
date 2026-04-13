import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "piknu";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Piknu Online - No Signup | 30tools",
	description:
		"Free Piknu online. Piknu allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
