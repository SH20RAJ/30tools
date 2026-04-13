import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "regex-match-tester";
const _CATEGORY = "developer";

export const metadata = {
	title: "Free Regex Match Tester Online - No Signup | 30tools",
	description:
		"Use our free Regex Match Tester to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try regex-match-tester now!",
	keywords: ["regex-match-tester", "regex", "match", "tester"],
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
