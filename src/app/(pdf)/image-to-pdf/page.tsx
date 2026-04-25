import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Image to PDF Online – Fast & No Signup | 30tools",
	description: "Convert multiple images to a single PDF document 100% free, fast, and no signup required.",
	keywords: "image to pdf, free image to pdf, online image to pdf, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/image-to-pdf",
	},
	openGraph: {
		title: "Free Image to PDF Online – Fast & No Signup | 30tools",
		description: "Convert multiple images to a single PDF document 100% free, fast, and no signup required.",
		url: "https://30tools.com/image-to-pdf",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Image to PDF Online – Fast & No Signup | 30tools",
		description: "Convert multiple images to a single PDF document 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "image-to-pdf",
        "name": "Image to PDF",
        "description": "Convert multiple images to a single PDF document",
        "route": "/image-to-pdf",
        "extraSlugs": [
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
                "web-to-pdf-online"
        ],
        "popular": true,
        "category": "pdf"
};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: tool.name,
						description: tool.description,
						url: "https://30tools.com/image-to-pdf",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "pdf" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
