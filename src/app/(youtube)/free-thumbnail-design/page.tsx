import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "free-thumbnail-design";
const _CATEGORY = "youtube";

export const metadata = {
	title: "Free Free Thumbnail Design Online - No Signup | 30tools",
	description:
		"Use our free Free Thumbnail Design to download YouTube content instantly. No registration needed, high quality results, and secure browser-based processing. Try free-thumbnail-design now!",
	keywords: ["free-thumbnail-design", "free", "thumbnail", "design"],
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
