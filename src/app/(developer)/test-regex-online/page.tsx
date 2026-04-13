import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "test-regex-online";
const _CATEGORY = "developer";

export const metadata = {
	title: "Free Test Regex Online Online - No Signup | 30tools",
	description:
		"Use our free Test Regex Online to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try test-regex-online now!",
	keywords: ["test-regex-online", "test", "regex", "online"],
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
