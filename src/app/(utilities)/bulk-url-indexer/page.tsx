import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "bulk-url-indexer";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Bulk Url Indexer Online - No Signup | 30tools",
	description:
		"Free Bulk Url Indexer online. Bulk Url Indexer allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
