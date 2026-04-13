import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "file-checksum-calculator";
const _CATEGORY = "others";

export const metadata = {
	title: "Free File Checksum Calculator Online - No Signup | 30tools",
	description:
		"Free File Checksum Calculator online. File Checksum Calculator allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
