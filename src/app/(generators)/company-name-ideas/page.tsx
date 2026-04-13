import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "company-name-ideas";
const _CATEGORY = "generators";

export const metadata = {
	title: "Free Company Name Ideas Online - No Signup | 30tools",
	description:
		"Use our free Company Name Ideas to generate random content instantly. No registration needed, high quality results, and secure browser-based processing. Try company-name-ideas now!",
	keywords: ["company-name-ideas", "company", "name", "ideas"],
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
