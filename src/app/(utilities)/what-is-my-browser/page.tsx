import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free What Is My Browser Online - No Signup | 30tools",
	description:
		"Free utility tools: What Is My Browser. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your bro",
	keywords: [
		"what is my browser free",
		"what is my browser online",
		"low competition what is my browser tool",
	],
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

export default function ToolPage() {
	return <PremiumToolPage toolId="what-is-my-browser" />;
}
