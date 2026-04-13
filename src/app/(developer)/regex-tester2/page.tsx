import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "regex-tester2";
const _CATEGORY = "developer";

export const metadata = {
	title: "Free Regex Tester2 Online - No Signup | 30tools",
	description:
		"Use our free Regex Tester2 to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try regex-tester2 now!",
	keywords: ["regex-tester2", "regex", "tester2"],
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default async function Page() {
	return <PremiumToolPage toolId={TOOL_ID} />;
}
