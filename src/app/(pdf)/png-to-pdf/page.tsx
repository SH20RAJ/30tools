import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free PNG to PDF Online - No Signup | 30tools",
	description: "Convert PNG images to PDF documents quickly and easily. Free online tool.",
	keywords: "png to pdf, free online tool, no signup, pdf, png to pdf online, 30tools",
	alternates: {
		canonical: "https://30tools.com/png-to-pdf",
	},
	openGraph: {
		title: "Free PNG to PDF Online - No Signup | 30tools",
		description: "Convert PNG images to PDF documents quickly and easily. Free online tool.",
		url: "https://30tools.com/png-to-pdf",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PNG to PDF Online - No Signup | 30tools",
		description: "Convert PNG images to PDF documents quickly and easily. Free online tool.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "png-to-pdf",
		"name": "PNG to PDF",
		"description": "Convert PNG images to PDF documents quickly and easily. Free online tool.",
		"route": "/png-to-pdf",
		"extraSlugs": [
			"combine-png-to-pdf",
			"convert-png-to-pdf",
			"convert-png-to-pdf-free",
			"pdf-from-png",
			"png-images-to-pdf",
			"png-to-pdf-multiple-images",
			"turn-png-into-pdf"
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
			name: "PNG to PDF",
			url: "/png-to-pdf",
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
						name: "PNG to PDF",
						description: "Convert PNG images to PDF documents quickly and easily. Free online tool.",
						url: "https://30tools.com/png-to-pdf",
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
