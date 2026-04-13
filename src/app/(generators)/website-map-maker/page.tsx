import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "website-map-maker";
const _CATEGORY = "generators";

export const metadata = {
	title: "Free Website Map Maker Online - No Signup | 30tools",
	description:
		"Use our free Website Map Maker to generate random content instantly. No registration needed, high quality results, and secure browser-based processing. Try website-map-maker now!",
	keywords: ["website-map-maker", "website", "maker"],
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
