import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "title-tag-preview";
const _CATEGORY = "youtube";

export const metadata = {
	title: "Free Title Tag Preview Online - No Signup | 30tools",
	description:
		"Use our free Title Tag Preview to download YouTube content instantly. No registration needed, high quality results, and secure browser-based processing. Try title-tag-preview now!",
	keywords: ["title-tag-preview", "title", "preview"],
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
