import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "website-icon-generator";
const _CATEGORY = "image";

export const metadata = {
	title: "Free Website Icon Generator Online - No Signup | 30tools",
	description:
		"Use our free Website Icon Generator to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try website-icon-generator now!",
	keywords: ["website-icon-generator", "website", "icon", "generator"],
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
