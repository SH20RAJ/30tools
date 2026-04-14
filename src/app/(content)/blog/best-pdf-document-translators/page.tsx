import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Best Pdf Document Translators Online - No Signup | 30tools",
	description: "Free Best Pdf Document Translators online tool. Fast and secure.",
	keywords: "best pdf document translators, free online tool, no signup, others, best pdf document translators online, 30tools",
	alternates: {
		canonical: "https://30tools.com/blog/best-pdf-document-translators",
	},
	openGraph: {
		title: "Free Best Pdf Document Translators Online - No Signup | 30tools",
		description: "Free Best Pdf Document Translators online tool. Fast and secure.",
		url: "https://30tools.com/blog/best-pdf-document-translators",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Best Pdf Document Translators Online - No Signup | 30tools",
		description: "Free Best Pdf Document Translators online tool. Fast and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "best-pdf-document-translators",
		"name": "Best Pdf Document Translators",
		"description": "Free Best Pdf Document Translators online tool. Fast and secure.",
		"route": "/blog/best-pdf-document-translators",
		"extraSlugs": [],
		"popular": false,
		"category": "others"
};
	const breadcrumbs = [
		{
			name: "Others Tools",
			url: "/others-tools",
		},
		{
			name: "Best Pdf Document Translators",
			url: "/blog/best-pdf-document-translators",
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
						name: "Best Pdf Document Translators",
						description: "Free Best Pdf Document Translators online tool. Fast and secure.",
						url: "https://30tools.com/blog/best-pdf-document-translators",
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
