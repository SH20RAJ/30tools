import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "verify-whatsapp-account";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Verify Whatsapp Account Online - No Signup | 30tools",
	description:
		"Free Verify Whatsapp Account online. Verify Whatsapp Account allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
