import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "insta-hashtag-finder";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Insta Hashtag Finder Online - No Signup | 30tools",
	description:
		"Free Insta Hashtag Finder online. Insta Hashtag Finder allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
