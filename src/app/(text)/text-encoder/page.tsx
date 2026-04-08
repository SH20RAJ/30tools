import type { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo-helper";
import TextEncoder from "@/components/tools/text/TextEncoder";

export const metadata = generateToolMetadata("text-encoder", "others");

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
