import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "js-compressor-minifier";
const _CATEGORY = "others";

export const metadata = {
	title: "Free Js Compressor Minifier Online - No Signup | 30tools",
	description:
		"Free Js Compressor Minifier online. Js Compressor Minifier allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	robots: { index: true, follow: true },
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
