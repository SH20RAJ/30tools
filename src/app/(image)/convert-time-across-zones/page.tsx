import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "convert-time-across-zones";
const _CATEGORY = "image";

export const metadata = {
	title: "Free Convert Time Across Zones Online - No Signup | 30tools",
	description:
		"Use our free Convert Time Across Zones to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try convert-time-across-zones now!",
	keywords: ["convert-time-across-zones", "convert", "time", "across", "zones"],
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
