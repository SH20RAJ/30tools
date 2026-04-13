import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "audio-cutter-merger";
const _CATEGORY = "audio";

export const metadata = {
	title: "Free Audio Cutter Merger Online - No Signup | 30tools",
	description:
		"Use our free Audio Cutter Merger to edit audio files instantly. No registration needed, high quality results, and secure browser-based processing. Try audio-cutter-merger now!",
	keywords: ["audio-cutter-merger", "audio", "cutter", "merger"],
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
