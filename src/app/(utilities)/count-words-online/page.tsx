import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "count-words-online";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Count Words Online Online - No Signup | 30tools",
	description:
		"Free Count Words Online online. Count Words Online allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
