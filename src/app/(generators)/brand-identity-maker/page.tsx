import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "brand-identity-maker";
const _CATEGORY = "generators";

export const metadata = {
	title: "Free Brand Identity Maker Online - No Signup | 30tools",
	description:
		"Use our free Brand Identity Maker to generate random content instantly. No registration needed, high quality results, and secure browser-based processing. Try brand-identity-maker now!",
	keywords: ["brand-identity-maker", "brand", "identity", "maker"],
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
