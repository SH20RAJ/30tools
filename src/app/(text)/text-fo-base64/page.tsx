import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "text-fo-base64";
const _CATEGORY = "text";

export const metadata = {
	title: "Free Text Fo Base64 Online - No Signup | 30tools",
	description:
		"Use our free Text Fo Base64 to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try text-fo-base64 now!",
	keywords: ["text-fo-base64", "text", "base64"],
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
