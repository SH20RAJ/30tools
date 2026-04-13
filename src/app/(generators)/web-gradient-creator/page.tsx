import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "web-gradient-creator";
const _CATEGORY = "generators";

export const metadata = {
	title: "Free Web Gradient Creator Online - No Signup | 30tools",
	description:
		"Use our free Web Gradient Creator to generate random content instantly. No registration needed, high quality results, and secure browser-based processing. Try web-gradient-creator now!",
	keywords: ["web-gradient-creator", "gradient", "creator"],
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
