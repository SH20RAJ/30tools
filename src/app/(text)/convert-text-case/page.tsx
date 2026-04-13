import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "convert-text-case";
const _CATEGORY = "text";

export const metadata = {
	title: "Free Convert Text Case Online - No Signup | 30tools",
	description:
		"Use our free Convert Text Case to transform and analyze text instantly. No registration needed, high quality results, and secure browser-based processing. Try convert-text-case now!",
	keywords: ["convert-text-case", "convert", "text", "case"],
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
