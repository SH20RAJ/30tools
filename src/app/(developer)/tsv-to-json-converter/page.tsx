import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free TSV to JSON Converter Online - No Signup | 30tools",
	description:
		"Developer tools: TSV to JSON Converter. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in your b",
	keywords: [
		"tsv to json converter free",
		"tsv to json converter online",
		"low competition tsv to json tool",
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
	return <PremiumToolPage toolId="tsv-to-json-converter" />;
}
