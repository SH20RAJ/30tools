import TextEncoder from "@/components/tools/text/TextEncoder";

export const metadata = {
	title: "Free Text Encoder Online - No Signup | 30tools",
	description:
		"Free text tools: Text Encoder. Format, convert, manipulate text. Instant results, copy to clipboard, no limits. All processing happens locally in your browser f",
	keywords: [
		"text encoder",
		"text encoder free",
		"text encoder online",
		"text encoder tool",
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
					URL Encoder Decoder & Text Transformer
				</h1>
				<p className="text-muted-foreground">
					Easily convert text to URL-safe format or Base64 and back.
				</p>
			</div>
			<TextEncoder />
		</div>
	);
}
