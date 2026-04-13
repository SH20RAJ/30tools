import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "detect-fake-email";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Detect Fake Email Online - No Signup | 30tools",
	description:
		"Free Detect Fake Email online. Detect Fake Email allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
