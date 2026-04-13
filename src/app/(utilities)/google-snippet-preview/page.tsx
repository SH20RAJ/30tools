import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "google-snippet-preview";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Google Snippet Preview Online - No Signup | 30tools",
	description:
		"Free Google Snippet Preview online. Google Snippet Preview allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
