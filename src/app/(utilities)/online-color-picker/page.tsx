import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "online-color-picker";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Online Color Picker Online - No Signup | 30tools",
	description:
		"Free Online Color Picker online. Online Color Picker allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
