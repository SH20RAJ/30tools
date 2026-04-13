import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "site-health-check";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Site Health Check Online - No Signup | 30tools",
	description:
		"Free Site Health Check online. Site Health Check allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
