import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "compress-javascript-code";
const _CATEGORY = "image";

export const metadata = {
	title: "Free Compress Javascript Code Online - No Signup | 30tools",
	description:
		"Use our free Compress Javascript Code to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try compress-javascript-code now!",
	keywords: ["compress-javascript-code", "compress", "javascript", "code"],
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
