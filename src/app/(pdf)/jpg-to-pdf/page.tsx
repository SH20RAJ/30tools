import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free JPG to PDF Online - No Signup | 30tools",
	description: "Convert JPG/JPEG images to PDF documents quickly and easily. Free online tool.",
	keywords: "jpg to pdf, free online tool, no signup, pdf, jpg to pdf online, 30tools",
	alternates: {
		canonical: "https://30tools.com/jpg-to-pdf",
	},
	openGraph: {
		title: "Free JPG to PDF Online - No Signup | 30tools",
		description: "Convert JPG/JPEG images to PDF documents quickly and easily. Free online tool.",
		url: "https://30tools.com/jpg-to-pdf",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JPG to PDF Online - No Signup | 30tools",
		description: "Convert JPG/JPEG images to PDF documents quickly and easily. Free online tool.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "jpg-to-pdf",
		"name": "JPG to PDF",
		"description": "Convert JPG/JPEG images to PDF documents quickly and easily. Free online tool.",
		"route": "/jpg-to-pdf",
		"extraSlugs": [
			"combine-jpg-to-pdf",
			"convert-jpeg-to-pdf",
			"convert-jpg-to-pdf",
			"convert-pdf-to-jpg",
			"jpg-to-pdf-converter-free-online",
			"pdf-pages-to-jpg"
		],
		"popular": true,
		"category": "pdf"
	};
	const breadcrumbs = [
		{
			name: "Pdf Tools",
			url: "/pdf-tools",
		},
		{
			name: "JPG to PDF",
			url: "/jpg-to-pdf",
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
						name: "JPG to PDF",
						description: "Convert JPG/JPEG images to PDF documents quickly and easily. Free online tool.",
						url: "https://30tools.com/jpg-to-pdf",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout
				tool={tool}
				breadcrumbs={breadcrumbs}
			>
				<ToolInteractivePlaceholder toolName={tool.name} />
			</ToolLayout>
		</>
	);
}
