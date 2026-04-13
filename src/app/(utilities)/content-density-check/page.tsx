import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "content-density-check";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Content Density Check Online - No Signup | 30tools",
	description:
		"Free Content Density Check online. Content Density Check allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
