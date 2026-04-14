import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Pdf Tools Online - No Signup | 30tools",
	description: "Free Pdf Tools online tool. Fast and secure.",
	keywords: "pdf tools, free online tool, no signup, pdf, pdf tools online, 30tools",
	alternates: {
		canonical: "https://30tools.com/pdf-tools",
	},
	openGraph: {
		title: "Free Pdf Tools Online - No Signup | 30tools",
		description: "Free Pdf Tools online tool. Fast and secure.",
		url: "https://30tools.com/pdf-tools",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Pdf Tools Online - No Signup | 30tools",
		description: "Free Pdf Tools online tool. Fast and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "pdf-tools",
		"name": "Pdf Tools",
		"description": "Free Pdf Tools online tool. Fast and secure.",
		"route": "/pdf-tools",
		"extraSlugs": [],
		"popular": false,
		"category": "pdf"
	};
	const breadcrumbs = [
		{
			name: "Pdf Tools",
			url: "/pdf-tools",
		},
		{
			name: "Pdf Tools",
			url: "/pdf-tools",
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
						name: "Pdf Tools",
						description: "Free Pdf Tools online tool. Fast and secure.",
						url: "https://30tools.com/pdf-tools",
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
