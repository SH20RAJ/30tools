import PDFToWordTool from "@/components/tools/pdf/PDFToWordTool";
import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Online PDF to Word Converter - Editable Docx in Seconds",
	description:
		"Convert your PDF files into fully editable Word documents (Docx) with high accuracy. No signup required, 100% free, and secure browser-based processing. 30tools.",
	keywords:
		"pdf to word converter, editable word from pdf, convert pdf to docx free, online pdf to word, pdf to doc converter, 30tools",
	alternates: {
		canonical: "https://30tools.com/pdf-to-word",
	},
	openGraph: {
		title: "PDF to Word Converter Online - Free & Editable",
		description:
			"Transform PDF files to editable Word documents instantly. High accuracy conversion, no software to install, no signup needed.",
		url: "https://30tools.com/pdf-to-word",
		siteName: "30tools",
		images: [{ url: "/api/og?title=PDF%20to%20Word%20Converter" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Online PDF to Word Converter - 30tools",
		description:
			"Convert PDF to editable Word documents with high accuracy. 100% free and secure.",
		images: ["/api/og?title=PDF%20to%20Word%20Converter"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "pdf-to-word",
		name: "PDF to Word",
		description: "Convert PDF files to editable Word documents",
		route: "/pdf-to-word",
		extraSlugs: [
			"convert-pdf-to-docx-editable-free",
			"editable-pdf-to-word",
			"microsoft-word-to-pdf",
			"pdf-to-doc-converter",
			"save-word-as-pdf",
			"word-document-to-pdf",
		],
		popular: true,
		category: "pdf",
	};
	const breadcrumbs = [
		{
			name: "Pdf Tools",
			url: "/pdf-tools",
		},
		{
			name: "PDF to Word",
			url: "/pdf-to-word",
		},
	];
	const relatedTools = [
		{
			id: "image-to-pdf",
			name: "Image to PDF",
			description: "Convert multiple images to a single PDF document",
			route: "/image-to-pdf",
			extraSlugs: [
				"add-page-numbers-to-pdf-online",
				"add-password-to-pdf",
				"annotate-pdf-online",
				"change-pdf-orientation",
				"combine-pdf-files",
				"compress-pdf-online",
				"convert-images-to-pdf",
				"create-epub-from-pdf",
				"cut-pdf-pages",
				"decrypt-pdf-file",
				"edit-pdf-online-free",
				"encrypt-pdf",
				"excel-sheet-to-pdf",
				"excel-to-pdf",
				"export-pdf-to-image",
				"extract-pdf-pages",
				"html-to-pdf",
				"insert-page-numbers-in-pdf",
				"join-pdf-documents",
				"jpeg-to-pdf-online",
				"jpg-to-pdf-high-quality-free",
				"lock-pdf-file",
				"make-pdf-from-photos",
				"merge-multiple-pdf",
				"merge-pdf-online",
				"modify-pdf-content",
				"open-protected-pdf",
				"optimize-pdf-for-web",
				"paginate-pdf",
				"pdf-add-page-numbers",
				"pdf-combiner-free",
				"pdf-pagination-tool",
				"pdf-size-reducer",
				"pdf-tools",
				"powerpoint-to-pdf",
				"presentation-to-pdf",
				"print-html-to-pdf",
				"reduce-pdf-size",
				"save-excel-as-pdf",
				"save-pdf-as-image",
				"save-powerpoint-as-pdf",
				"save-rotated-pdf",
				"save-webpage-as-pdf",
				"secure-pdf-document",
				"separate-pdf-files",
				"shrink-pdf-file",
				"slides-to-pdf",
				"split-pdf-pages",
				"spreadsheet-to-pdf",
				"unlock-pdf-online",
				"web-to-pdf-online",
			],
			popular: true,
			category: "pdf",
		},
		{
			id: "jpg-to-pdf",
			name: "JPG to PDF",
			description:
				"Convert JPG/JPEG images to PDF documents quickly and easily. Free online tool.",
			route: "/jpg-to-pdf",
			extraSlugs: [
				"combine-jpg-to-pdf",
				"convert-jpeg-to-pdf",
				"convert-jpg-to-pdf",
				"convert-pdf-to-jpg",
				"jpg-to-pdf-converter-free-online",
				"pdf-pages-to-jpg",
			],
			popular: true,
			category: "pdf",
		},
		{
			id: "pdf-compressor",
			name: "PDF Compressor",
			description:
				"Reduce PDF file size online free without losing quality. Our 2026 updated PDF size reducer uses advanced browser-side compression to safely shrink documents for email and web uploads. 100% private and secure.",
			route: "/pdf-compressor",
			extraSlugs: ["compress-pdf-to-200kb", "shrink-pdf-file-size-free"],
			popular: true,
			category: "pdf",
		},
	];

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: "PDF to Word",
						description: "Convert PDF files to editable Word documents",
						url: "https://30tools.com/pdf-to-word",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout
				tool={tool}
				breadcrumbs={breadcrumbs}
				relatedTools={relatedTools}
			>
				<PDFToWordTool />
			</ToolLayout>
		</>
	);
}
