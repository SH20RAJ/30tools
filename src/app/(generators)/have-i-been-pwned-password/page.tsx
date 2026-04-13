import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "have-i-been-pwned-password";
const _CATEGORY = "generators";

export const metadata = {
	title: "Free Have I Been Pwned Password Online - No Signup | 30tools",
	description:
		"Use our free Have I Been Pwned Password to generate random content instantly. No registration needed, high quality results, and secure browser-based processing. Try have-i-been-pwned-password now!",
	keywords: ["have-i-been-pwned-password", "have", "been", "pwned", "password"],
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
