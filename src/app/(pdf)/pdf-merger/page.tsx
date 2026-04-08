import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PdfMerger from "@/components/tools/pdf/PdfMerger";

export const metadata = generateToolMetadata("pdf-merger", "pdf");

export default async function ToolPage({ searchParams }) {
	const params = await searchParams;
	const lang = params.lang || "en";
	return (
		<div className="container mx-auto px-4 py-8 md:py-12">
			<div className="max-w-4xl mx-auto text-center mb-8">
				<h1 className="text-3xl md:text-4xl font-bold mb-4">Merge PDF Files</h1>
				<p className="text-muted-foreground">
					Combine multiple PDF documents into a single file. Drag and drop to
					reorder.
				</p>
			</div>
			<PdfMerger />
		</div>
	);
}
