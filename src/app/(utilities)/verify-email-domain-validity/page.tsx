import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "verify-email-domain-validity";
const _CATEGORY = "utilities";

export const metadata = {
	title: "Free Verify Email Domain Validity Online - No Signup | 30tools",
	description:
		"Use our free Verify Email Domain Validity to perform helpful calculations instantly. No registration needed, high quality results, and secure browser-based processing. Try verify-email-domain-validity now!",
	keywords: [
		"verify-email-domain-validity",
		"verify",
		"email",
		"domain",
		"validity",
	],
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
