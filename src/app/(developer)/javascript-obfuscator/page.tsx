import PremiumToolPage from "@/components/seo/PremiumToolPage";
export const metadata = {
	title: "Free JavaScript Obfuscator Online - No Signup | 30tools",
	description:
		"Developer tools: JavaScript Obfuscator. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in your b",
	keywords: [
		"javascript obfuscator free",
		"javascript obfuscator online",
		"low competition javascript obfuscator tool",
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
	return <PremiumToolPage toolId="javascript-obfuscator" />;
}
