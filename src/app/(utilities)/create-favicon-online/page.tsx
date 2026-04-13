import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "create-favicon-online";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Create Favicon Online Online - No Signup | 30tools",
	description:
		"Free Create Favicon Online online. Create Favicon Online allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
