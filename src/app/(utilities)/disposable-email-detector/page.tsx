import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "disposable-email-detector";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Disposable Email Detector Online - No Signup | 30tools",
	description:
		"Free Disposable Email Detector online. Disposable Email Detector allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
