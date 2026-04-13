import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "save-rotated-pdf";
const _CATEGORY = "pdf";

export const metadata = {
	title: "Free Save Rotated Pdf Online - No Signup | 30tools",
	description:
		"Use our free Save Rotated Pdf to manage PDF documents instantly. No registration needed, high quality results, and secure browser-based processing. Try save-rotated-pdf now!",
	keywords: ["save-rotated-pdf", "save", "rotated"],
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
