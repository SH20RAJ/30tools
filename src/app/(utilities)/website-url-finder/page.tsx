import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "website-url-finder";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Website Url Finder Online - No Signup | 30tools",
	description:
		"Free Website Url Finder online. Website Url Finder allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
