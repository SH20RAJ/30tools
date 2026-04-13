import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "instazoom-alternative";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Instazoom Alternative Online - No Signup | 30tools",
	description:
		"Free Instazoom Alternative online. Instazoom Alternative allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
