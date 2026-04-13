import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "create-color-scheme";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Create Color Scheme Online - No Signup | 30tools",
	description:
		"Free Create Color Scheme online. Create Color Scheme allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
