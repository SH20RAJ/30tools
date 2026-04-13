import PdfCompressor from "@/components/tools/pdf/PdfCompressor";

export const metadata = {
	title: "Free PDF Compressor Online - No Signup | 30tools",
	description:
		"Professional PDF tools: PDF Compressor. Merge, split, compress, convert. 100% free, no watermarks, works on all devices. All processing happens locally in your ",
	keywords: [
		"pdf compressor",
		"pdf compressor free",
		"pdf compressor online",
		"pdf compressor tool",
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
	const params = await searchParams;
	const _lang = params.lang || "en";
	return (
		<div className="container mx-auto px-4 py-8 md:py-12">
			<div className="max-w-4xl mx-auto text-center mb-8">
				<h1 className="text-3xl md:text-4xl font-bold mb-4">
					Compress PDF File
				</h1>
				<p className="text-muted-foreground">
					Optimize your PDF documents to reduce file size.
				</p>
			</div>
			<PdfCompressor />
		</div>
	);
}
