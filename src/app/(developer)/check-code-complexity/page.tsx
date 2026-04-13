import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "check-code-complexity";
const _CATEGORY = "developer";

export const metadata = {
	title: "Free Check Code Complexity Online - No Signup | 30tools",
	description:
		"Use our free Check Code Complexity to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try check-code-complexity now!",
	keywords: ["check-code-complexity", "check", "code", "complexity"],
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
