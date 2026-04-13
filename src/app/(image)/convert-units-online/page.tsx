import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "convert-units-online";
const _CATEGORY = "image";

export const metadata = {
	title: "Free Convert Units Online Online - No Signup | 30tools",
	description:
		"Use our free Convert Units Online to compress, convert, and edit images instantly. No registration needed, high quality results, and secure browser-based processing. Try convert-units-online now!",
	keywords: ["convert-units-online", "convert", "units", "online"],
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
