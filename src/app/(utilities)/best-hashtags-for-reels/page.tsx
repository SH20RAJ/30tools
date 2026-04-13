import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "best-hashtags-for-reels";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Best Hashtags For Reels Online - No Signup | 30tools",
	description:
		"Free Best Hashtags For Reels online. Best Hashtags For Reels allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
