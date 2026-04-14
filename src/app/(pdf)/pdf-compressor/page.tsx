import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free PDF Compressor Online - No Signup | 30tools",
	description: "Reduce PDF file size online free without losing quality. Our 2026 updated PDF size reducer uses advanced browser-side compression to safely shrink documents for email and web uploads. 100% private and secure.",
	keywords: "pdf compressor, free online tool, no signup, pdf, pdf compressor online, 30tools",
	alternates: {
		canonical: "https://30tools.com/pdf-compressor",
	},
	openGraph: {
		title: "Free PDF Compressor Online - No Signup | 30tools",
		description: "Reduce PDF file size online free without losing quality. Our 2026 updated PDF size reducer uses advanced browser-side compression to safely shrink documents for email and web uploads. 100% private and secure.",
		url: "https://30tools.com/pdf-compressor",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PDF Compressor Online - No Signup | 30tools",
		description: "Reduce PDF file size online free without losing quality. Our 2026 updated PDF size reducer uses advanced browser-side compression to safely shrink documents for email and web uploads. 100% private and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "pdf-compressor",
		"name": "PDF Compressor",
		"description": "Reduce PDF file size online free without losing quality. Our 2026 updated PDF size reducer uses advanced browser-side compression to safely shrink documents for email and web uploads. 100% private and secure.",
		"route": "/pdf-compressor",
		"extraSlugs": [
			"compress-pdf-to-200kb",
			"shrink-pdf-file-size-free"
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
			name: "PDF Compressor",
			url: "/pdf-compressor",
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
						name: "PDF Compressor",
						description: "Reduce PDF file size online free without losing quality. Our 2026 updated PDF size reducer uses advanced browser-side compression to safely shrink documents for email and web uploads. 100% private and secure.",
						url: "https://30tools.com/pdf-compressor",
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
