import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "generate-payment-url";
const _CATEGORY = "generators";

export const metadata = {
	title: "Free Generate Payment Url Online - No Signup | 30tools",
	description:
		"Use our free Generate Payment Url to generate random content instantly. No registration needed, high quality results, and secure browser-based processing. Try generate-payment-url now!",
	keywords: ["generate-payment-url", "generate", "payment"],
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
