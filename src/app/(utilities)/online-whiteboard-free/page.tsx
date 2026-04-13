import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "online-whiteboard-free";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Online Whiteboard Free Online - No Signup | 30tools",
	description:
		"Free Online Whiteboard Free online. Online Whiteboard Free allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
