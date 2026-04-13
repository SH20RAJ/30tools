import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "get-emails-from-string";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Get Emails From String Online - No Signup | 30tools",
	description:
		"Free Get Emails From String online. Get Emails From String allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
