import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free PDF to Word Online – Fast & No Signup | 30tools",
	description: "Convert PDF files to editable Word documents 100% free, fast, and no signup required.",
	keywords: "pdf to word, free pdf to word, online pdf to word, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/pdf-to-word",
	},
	openGraph: {
		title: "Free PDF to Word Online – Fast & No Signup | 30tools",
		description: "Convert PDF files to editable Word documents 100% free, fast, and no signup required.",
		url: "https://30tools.com/pdf-to-word",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PDF to Word Online – Fast & No Signup | 30tools",
		description: "Convert PDF files to editable Word documents 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "pdf-to-word",
        "name": "PDF to Word",
        "description": "Convert PDF files to editable Word documents",
        "route": "/pdf-to-word",
        "extraSlugs": [
                "convert-pdf-to-docx-editable-free",
                "editable-pdf-to-word",
                "microsoft-word-to-pdf",
                "pdf-to-doc-converter",
                "save-word-as-pdf",
                "word-document-to-pdf"
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
						url: "https://30tools.com/pdf-to-word",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "pdf" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
