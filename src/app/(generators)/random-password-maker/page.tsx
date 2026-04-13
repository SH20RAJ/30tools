import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "random-password-maker";
const _CATEGORY = "generators";

export const metadata = {
	title: "Free Random Password Maker Online - No Signup | 30tools",
	description:
		"Use our free Random Password Maker to generate random content instantly. No registration needed, high quality results, and secure browser-based processing. Try random-password-maker now!",
	keywords: ["random-password-maker", "random", "password", "maker"],
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
