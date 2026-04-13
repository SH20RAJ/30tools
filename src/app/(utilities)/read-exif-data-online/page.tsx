import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "read-exif-data-online";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Read Exif Data Online Online - No Signup | 30tools",
	description:
		"Free Read Exif Data Online online. Read Exif Data Online allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
