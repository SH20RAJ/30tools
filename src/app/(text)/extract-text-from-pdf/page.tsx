import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "extract-text-from-pdf";
const _CATEGORY = "text";

export const metadata = {
	title: "Free Extract Text From Pdf Online - No Signup | 30tools",
	description:
		"Use our free Extract Text From Pdf to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try extract-text-from-pdf now!",
	keywords: ["extract-text-from-pdf", "extract", "text", "from"],
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
