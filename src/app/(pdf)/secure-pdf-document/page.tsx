import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "secure-pdf-document";
const _CATEGORY = "pdf";

export const metadata = {
	title: "Free Secure Pdf Document Online - No Signup | 30tools",
	description:
		"Use our free Secure Pdf Document to manage PDF documents instantly. No registration needed, high quality results, and secure browser-based processing. Try secure-pdf-document now!",
	keywords: ["secure-pdf-document", "secure", "document"],
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
