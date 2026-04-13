import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free What Is My IP Address Online - No Signup | 30tools",
	description:
		"Free utility tools: What Is My IP Address. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your ",
	keywords: [
		"what is my ip address free",
		"what is my ip address online",
		"low competition what is my ip address tool",
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
	return <PremiumToolPage toolId="what-is-my-ip-address" />;
}
