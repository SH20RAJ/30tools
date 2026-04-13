import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "compress-files-to-zip";
const _CATEGORY = "image";

export const metadata = {
	title: "Free Compress Files To Zip Online - No Signup | 30tools",
	description:
		"Use our free Compress Files To Zip to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try compress-files-to-zip now!",
	keywords: ["compress-files-to-zip", "compress", "files"],
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
