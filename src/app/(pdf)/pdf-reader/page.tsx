import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import PdfReader from "@/components/tools/pdf/PdfReader";

export const metadata = generateToolMetadata("pdf-reader", "others");

export default async function ToolPage({ searchParams }) {
	const params = await searchParams;
	const lang = params.lang || "en";
	return (
		<div className="container mx-auto px-4 py-8 md:py-12 min-h-screen flex flex-col">
			<div className="max-w-4xl mx-auto text-center mb-8">
				<h1 className="text-3xl md:text-4xl font-bold mb-4">
					Online PDF Reader
				</h1>
				<p className="text-muted-foreground">
					Open and view PDF files instantly in your browser.
				</p>
			</div>
			<PdfReader />
		</div>
	);
}
