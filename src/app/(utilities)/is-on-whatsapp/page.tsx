import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "is-on-whatsapp";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Is On Whatsapp Online - No Signup | 30tools",
	description:
		"Free Is On Whatsapp online. Is On Whatsapp allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
