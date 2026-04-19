import PdfProtectTool from "@/components/tools/pdf/PdfProtectTool";
import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free PDF Password Protect Online - No Signup | 30tools",
	description:
		"Add password protection to PDF files 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords:
		"pdf password protect, free online tool, no signup, pdf, pdf password protect online, 30tools",
	alternates: {
		canonical: "https://30tools.com/pdf-protect",
	},
	openGraph: {
		title: "Free PDF Password Protect Online - No Signup | 30tools",
		description:
			"Add password protection to PDF files 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/pdf-protect",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PDF Password Protect Online - No Signup | 30tools",
		description:
			"Add password protection to PDF files 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "pdf-protect",
		name: "PDF Password Protect",
		description: "Add password protection to PDF files",
		route: "/pdf-protect",
		extraSlugs: [
			"check-password-security",
			"check-pwned-password",
			"configurable-password-tool",
			"create-strong-password",
			"custom-password-maker",
			"data-breach-password-search",
			"generate-secure-password",
			"have-i-been-pwned-password",
			"lock-pdf-from-editing-free",
			"password-breach-checker",
			"password-generator2",
			"password-leak-check",
			"password-protect-pdf",
			"password-protect-pdf-online",
			"password-safety-checker",
			"password-strength-checker",
			"password-tester-online",
			"pdf-password-remover",
			"remove-pdf-password",
			"secure-password-creator",
			"test-password-strength",
			"verify-password-safety",
		],
		popular: false,
		category: "pdf",
	};
	const breadcrumbs = [
		{
			name: "Pdf Tools",
			url: "/pdf-tools",
		},
		{
			name: "PDF Password Protect",
			url: "/pdf-protect",
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
						name: "PDF Password Protect",
						description: "Add password protection to PDF files",
						url: "https://30tools.com/pdf-protect",
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
				<PdfProtectTool />
			</ToolLayout>
		</>
	);
}
