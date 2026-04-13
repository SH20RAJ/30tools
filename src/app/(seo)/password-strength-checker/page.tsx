import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "password-strength-checker";
const _CATEGORY = "seo";

export const metadata = {
	title: "Free Password Strength Checker Online - No Signup | 30tools",
	description:
		"Use our free Password Strength Checker to optimize your website instantly. No registration needed, high quality results, and secure browser-based processing. Try password-strength-checker now!",
	keywords: ["password-strength-checker", "password", "strength", "checker"],
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
