import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "words-per-minute-test";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Words Per Minute Test Online - No Signup | 30tools",
	description:
		"Free Words Per Minute Test online. Words Per Minute Test allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
