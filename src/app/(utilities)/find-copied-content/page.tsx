import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "find-copied-content";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Find Copied Content Online - No Signup | 30tools",
	description:
		"Free Find Copied Content online. Find Copied Content allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
