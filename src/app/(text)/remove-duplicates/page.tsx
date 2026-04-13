import RemoveDuplicates from "@/components/tools/text/RemoveDuplicates";

export const metadata = {
	title: "Free Remove Duplicates Online - No Signup | 30tools",
	description:
		"Remove duplicate lines from text lists. 100% free, no signup required, fast and secure. Works in browser. Try now! Easy and secure.",
	keywords: [
		"remove duplicates",
		"remove",
		"duplicates",
		"remove-duplicates",
		"text",
		"text tool",
		"free",
		"online",
		"tool",
		"30tools",
		"no signup",
		"fast",
		"secure",
		"browser-based",
		"instant",
		"easy",
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

export default async function ToolPage({ searchParams }) {
	const _params = await searchParams;
	return (
		<div className="container mx-auto px-4 py-8 md:py-12">
			<div className="max-w-4xl mx-auto text-center mb-8">
				<h1 className="text-3xl md:text-4xl font-bold mb-4">
					Remove Duplicates from List Online
				</h1>
				<p className="text-muted-foreground">
					Paste your text list below to automatically remove repetitive lines.
				</p>
			</div>
			<RemoveDuplicates />
		</div>
	);
}
