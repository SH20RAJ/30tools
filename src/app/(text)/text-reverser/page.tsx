import type { Metadata } from "next";
import TextReverser from "@/components/tools/text/TextReverser";

export const metadata = {
  title: "Free Text Reverser Online - No Signup | 30tools",
  description: "Free text tools: Text Reverser. Format, convert, manipulate text. Instant results, copy to clipboard, no limits. All processing happens locally in your browser ",
  keywords: ["text reverser","text reverser free","text reverser online","text reverser tool"],
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
