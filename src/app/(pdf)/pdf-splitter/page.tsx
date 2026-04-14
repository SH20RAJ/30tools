import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free PDF Splitter Online - No Signup | 30tools",
	description: "Split PDF files into separate pages or ranges",
	keywords: "pdf splitter, free online tool, no signup, pdf, pdf splitter online, 30tools",
	alternates: {
		canonical: "https://30tools.com/pdf-splitter",
	},
	openGraph: {
		title: "Free PDF Splitter Online - No Signup | 30tools",
		description: "Split PDF files into separate pages or ranges",
		url: "https://30tools.com/pdf-splitter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PDF Splitter Online - No Signup | 30tools",
		description: "Split PDF files into separate pages or ranges",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "pdf-splitter",
		"name": "PDF Splitter",
		"description": "Split PDF files into separate pages or ranges",
		"route": "/pdf-splitter",
		"extraSlugs": [
			"split-pdf-pages-online-free",
			"pdf-page-extractor"
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
			name: "PDF Splitter",
			url: "/pdf-splitter",
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
						name: "PDF Splitter",
						description: "Split PDF files into separate pages or ranges",
						url: "https://30tools.com/pdf-splitter",
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
