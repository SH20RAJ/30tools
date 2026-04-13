import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "modify-mp3-file";
const _CATEGORY = "downloaders";

export const metadata = {
	title: "Free Modify Mp3 File Online - No Signup | 30tools",
	description:
		"Use our free Modify Mp3 File to save social media content instantly. No registration needed, high quality results, and secure browser-based processing. Try modify-mp3-file now!",
	keywords: ["modify-mp3-file", "modify", "file"],
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
