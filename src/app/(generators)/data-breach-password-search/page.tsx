import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "data-breach-password-search";
const _CATEGORY = "generators";

export const metadata = {
	title: "Free Data Breach Password Search Online - No Signup | 30tools",
	description:
		"Use our free Data Breach Password Search to generate random content instantly. No registration needed, high quality results, and secure browser-based processing. Try data-breach-password-search now!",
	keywords: [
		"data-breach-password-search",
		"data",
		"breach",
		"password",
		"search",
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
