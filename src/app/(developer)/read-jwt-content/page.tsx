import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "read-jwt-content";
const _CATEGORY = "developer";

export const metadata = {
	title: "Free Read Jwt Content Online - No Signup | 30tools",
	description:
		"Use our free Read Jwt Content to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try read-jwt-content now!",
	keywords: ["read-jwt-content", "read", "content"],
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
