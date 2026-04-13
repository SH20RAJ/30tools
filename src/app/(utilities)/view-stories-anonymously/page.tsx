import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "view-stories-anonymously";
const _CATEGORY = "others";

export const metadata = {
	title: "Free View Stories Anonymously Online - No Signup | 30tools",
	description:
		"Free View Stories Anonymously online. View Stories Anonymously allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
