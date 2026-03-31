import type { Metadata } from "next";
import TextEncoder from "@/components/tools/text/TextEncoder";

export const metadata: Metadata = {
	title: {
		absolute: "URL Encoder Decoder Free Online | Text to URL Encoding",
	},
	description:
		"Free online URL encoder decoder. Convert any text to URL-safe format or Base64 instantly. Secure, fast, and perfect for developers debugging API queries.",
	keywords: [
		"url encoder decoder",
		"text to url encoding online",
		"base64 encoder online",
		"online text transformer",
		"encode text for url",
		"decode url string",
		"web developer text tools",
	],
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
