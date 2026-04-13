import PremiumToolPage from "@/components/seo/PremiumToolPage";

const TOOL_ID = "generate-random-stuff";
const _CATEGORY = "generators";

export const metadata = {
	title: "Free Generate Random Stuff Online - No Signup | 30tools",
	description:
		"Use our free Generate Random Stuff to generate random content instantly. No registration needed, high quality results, and secure browser-based processing. Try generate-random-stuff now!",
	keywords: ["generate-random-stuff", "generate", "random", "stuff"],
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
