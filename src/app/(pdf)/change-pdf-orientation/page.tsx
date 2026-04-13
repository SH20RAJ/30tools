import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "change-pdf-orientation";
const _CATEGORY = "pdf";

export const metadata = {
	title: "Free Change Pdf Orientation Online - No Signup | 30tools",
	description:
		"Use our free Change Pdf Orientation to manage PDF documents instantly. No registration needed, high quality results, and secure browser-based processing. Try change-pdf-orientation now!",
	keywords: ["change-pdf-orientation", "change", "orientation"],
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
