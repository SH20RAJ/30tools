import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "crawl-control-tool";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Crawl Control Tool Online - No Signup | 30tools",
	description:
		"Free Crawl Control Tool online. Crawl Control Tool allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
