import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "good-excuses-for-work";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Good Excuses For Work Online - No Signup | 30tools",
	description:
		"Free Good Excuses For Work online. Good Excuses For Work allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
