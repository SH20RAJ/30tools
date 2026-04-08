import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import TextReverser from "@/components/tools/text/TextReverser";

export const metadata = generateToolMetadata("text-reverser", "text");

export default async function ToolPage({ searchParams }) {
	const _params = await searchParams;
	return (
		<div className="container mx-auto px-4 py-8 md:py-12">
			<div className="max-w-4xl mx-auto text-center mb-8">
				<h1 className="text-3xl md:text-4xl font-bold mb-4">
					Backwards Text Generator & Reverser
				</h1>
				<p className="text-muted-foreground">
					Reverse your text, words, or standard lines instantly.
				</p>
			</div>
			<TextReverser />
		</div>
	);
}
