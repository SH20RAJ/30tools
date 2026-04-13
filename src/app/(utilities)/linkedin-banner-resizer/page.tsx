import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "linkedin-banner-resizer";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Linkedin Banner Resizer Online - No Signup | 30tools",
	description:
		"Free Linkedin Banner Resizer online. Linkedin Banner Resizer allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
