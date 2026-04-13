import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free XML to JSON Converter Online - No Signup | 30tools",
	description:
		"Developer tools: XML to JSON Converter. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in your b",
	keywords: [
		"xml to json converter free",
		"xml to json converter online",
		"low competition xml to json tool",
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
	return <PremiumToolPage toolId="xml-to-json-converter" />;
}
