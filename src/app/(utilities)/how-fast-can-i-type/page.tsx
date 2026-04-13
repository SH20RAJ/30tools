import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "how-fast-can-i-type";
const _CATEGORY = "others";

export const metadata = {
	title: "Free How Fast Can I Type Online - No Signup | 30tools",
	description:
		"Free How Fast Can I Type online. How Fast Can I Type allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
