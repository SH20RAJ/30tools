import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "split-video-file";
const _CATEGORY = "pdf";

export const metadata = {
	title: "Free Split Video File Online - No Signup | 30tools",
	description:
		"Use our free Split Video File to manage PDF documents instantly. No registration needed, high quality results, and secure browser-based processing. Try split-video-file now!",
	keywords: ["split-video-file", "split", "video", "file"],
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
