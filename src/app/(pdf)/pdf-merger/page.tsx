import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free PDF Merger Online - No Signup | 30tools",
	description: "Merge multiple PDF files into one document",
	keywords: "pdf merger, free online tool, no signup, pdf, pdf merger online, 30tools",
	alternates: {
		canonical: "https://30tools.com/pdf-merger",
	},
	openGraph: {
		title: "Free PDF Merger Online - No Signup | 30tools",
		description: "Merge multiple PDF files into one document",
		url: "https://30tools.com/pdf-merger",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PDF Merger Online - No Signup | 30tools",
		description: "Merge multiple PDF files into one document",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "pdf-merger",
		"name": "PDF Merger",
		"description": "Merge multiple PDF files into one document",
		"route": "/pdf-merger",
		"extraSlugs": [
				"merge-multiple-pdf-into-one-free",
				"online-pdf-joiner",
				"audio-cutter-merger"
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
			name: "PDF Merger",
			url: "/pdf-merger",
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
						name: "PDF Merger",
						description: "Merge multiple PDF files into one document",
						url: "https://30tools.com/pdf-merger",
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
