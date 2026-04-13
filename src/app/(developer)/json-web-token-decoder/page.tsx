import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "json-web-token-decoder";
const _CATEGORY = "developer";

export const metadata = {
	title: "Free Json Web Token Decoder Online - No Signup | 30tools",
	description:
		"Use our free Json Web Token Decoder to format and convert code data instantly. No registration needed, high quality results, and secure browser-based processing. Try json-web-token-decoder now!",
	keywords: ["json-web-token-decoder", "json", "token", "decoder"],
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
