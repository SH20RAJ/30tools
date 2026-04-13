import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "save-insta-pfp";
const _CATEGORY = "downloaders";

export const metadata = {
	title: "Free Save Insta Pfp Online - No Signup | 30tools",
	description:
		"Use our free Save Insta Pfp to save social media content instantly. No registration needed, high quality results, and secure browser-based processing. Try save-insta-pfp now!",
	keywords: ["save-insta-pfp", "save", "insta"],
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
