import type { Metadata } from "next";
import PdfMerger from "@/components/tools/pdf/PdfMerger";

export const metadata = {
  title: "Free PDF Merger Online - No Signup | 30tools",
  description: "Merge multiple PDF files into one document. 100% free, no signup required, fast and secure. Works in browser. Try now! Easy and secure.",
  keywords: ["pdf merger","pdf","merger","pdf-merger","pdf tool","free","online","tool","30tools","no signup","fast","secure","browser-based","instant","easy"],
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
