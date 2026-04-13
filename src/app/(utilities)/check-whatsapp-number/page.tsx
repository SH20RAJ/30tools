import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "check-whatsapp-number";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Check Whatsapp Number Online - No Signup | 30tools",
	description:
		"Free Check Whatsapp Number online. Check Whatsapp Number allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
