import { generateCollectionPageSchema } from "@/lib/seo";

export const metadata = {
	title: "Free PDF Tools Online - No Signup | 30tools",
	description:
		"Professional free PDF tools: merge, split, compress, convert to/from Word, protect with passwords, and unlock secured PDFs. Maintains original formatting, fonts, and hyperlinks. No signup, no watermarks, zero-storage security policy.",
	keywords:
		"pdf tools, pdf merger, pdf splitter, pdf compressor, free pdf tools online, online pdf editor, convert pdf to word, word to pdf, image to pdf converter, secure pdf tools, pdf utilities, unlock pdf, protect pdf, compress pdf online free, pdf to image, pdf password remover",
	openGraph: {
		title: "Free PDF Tools Online - No Signup | 30tools",
		description:
			"Merge, split, compress, and convert PDFs for free. No signup, no watermarks, zero-storage security policy.",
		url: "https://30tools.com/pdf-tools",
		siteName: "30tools",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Free PDF Tools",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PDF Tools Online - No Signup | 30tools",
		description:
			"Merge, split, compress, and convert PDFs for free. No signup, no watermarks, zero-storage security policy.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

const collectionPageSchema = generateCollectionPageSchema('pdf', {
	name: 'Free Online PDF Tools Collection',
	description: 'A complete suite of free online PDF tools to merge, split, compress, and convert PDF files securely.'
});

export default function PDFToolsLayout({ children }) {
	return (
		<div className="min-h-screen flex flex-col bg-background selection:bg-primary/10">
			<main className="flex-1">{children}</main>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(collectionPageSchema),
				}}
			/>
		</div>
	);
}

