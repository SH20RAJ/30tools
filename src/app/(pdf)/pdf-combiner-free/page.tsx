import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "pdf-combiner-free";
const _CATEGORY = "pdf";

export const metadata = {
	title: "Free Pdf Combiner Free Online - No Signup | 30tools",
	description:
		"Use our free Pdf Combiner Free to manage PDF documents instantly. No registration needed, high quality results, and secure browser-based processing. Try pdf-combiner-free now!",
	keywords: ["pdf-combiner-free", "combiner", "free"],
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
