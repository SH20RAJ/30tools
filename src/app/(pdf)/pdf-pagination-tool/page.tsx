import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "pdf-pagination-tool";
const _CATEGORY = "pdf";

export const metadata = {
	title: "Free Pdf Pagination Tool Online - No Signup | 30tools",
	description:
		"Use our free Pdf Pagination Tool to manage PDF documents instantly. No registration needed, high quality results, and secure browser-based processing. Try pdf-pagination-tool now!",
	keywords: ["pdf-pagination-tool", "pagination", "tool"],
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
