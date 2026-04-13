import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "responsive-design-checker";
const _CATEGORY = "seo";

export const metadata = {
	title: "Free Responsive Design Checker Online - No Signup | 30tools",
	description:
		"Use our free Responsive Design Checker to optimize your website instantly. No registration needed, high quality results, and secure browser-based processing. Try responsive-design-checker now!",
	keywords: ["responsive-design-checker", "responsive", "design", "checker"],
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
