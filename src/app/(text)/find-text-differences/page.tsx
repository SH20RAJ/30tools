import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "find-text-differences";
const _CATEGORY = "text";

export const metadata = {
	title: "Free Find Text Differences Online - No Signup | 30tools",
	description:
		"Use our free Find Text Differences to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try find-text-differences now!",
	keywords: ["find-text-differences", "find", "text", "differences"],
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
