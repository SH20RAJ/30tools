import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "check-website-errors";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Check Website Errors Online - No Signup | 30tools",
	description:
		"Free Check Website Errors online. Check Website Errors allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
