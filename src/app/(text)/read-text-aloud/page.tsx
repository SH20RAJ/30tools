import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "read-text-aloud";
const _CATEGORY = "text";

export const metadata = {
	title: "Free Read Text Aloud Online - No Signup | 30tools",
	description:
		"Use our free Read Text Aloud to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try read-text-aloud now!",
	keywords: ["read-text-aloud", "read", "text", "aloud"],
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
