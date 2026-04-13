import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "clean-duplicates-list";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Clean Duplicates List Online - No Signup | 30tools",
	description:
		"Free Clean Duplicates List online. Clean Duplicates List allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
