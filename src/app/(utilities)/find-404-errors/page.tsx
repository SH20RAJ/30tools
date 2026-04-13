import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "find-404-errors";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Find 404 Errors Online - No Signup | 30tools",
	description:
		"Free Find 404 Errors online. Find 404 Errors allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
