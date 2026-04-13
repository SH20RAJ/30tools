import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "facebook-cover-resizer";
const _CATEGORY = "video";

export const metadata = {
	title: "Free Facebook Cover Resizer Online - No Signup | 30tools",
	description:
		"Use our free Facebook Cover Resizer to process video files instantly. No registration needed, high quality results, and secure browser-based processing. Try facebook-cover-resizer now!",
	keywords: ["facebook-cover-resizer", "facebook", "cover", "resizer"],
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
