import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "find-backlinks-url";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Find Backlinks Url Online - No Signup | 30tools",
	description:
		"Free Find Backlinks Url online. Find Backlinks Url allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
