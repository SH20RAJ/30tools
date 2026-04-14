import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Pdf Protector Online - No Signup | 30tools",
	description: "Free Pdf Protector online. Pdf Protector allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords: "pdf protector, free online tool, no signup, others, pdf protector online, 30tools",
	alternates: {
		canonical: "https://30tools.com/pdf-protector",
	},
	openGraph: {
		title: "Free Pdf Protector Online - No Signup | 30tools",
		description: "Free Pdf Protector online. Pdf Protector allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/pdf-protector",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Pdf Protector Online - No Signup | 30tools",
		description: "Free Pdf Protector online. Pdf Protector allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "pdf-protector",
		"name": "Pdf Protector",
		"description": "Pdf Protector - Coming Soon",
		"route": "/pdf-protector",
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
			name: "Pdf Protector",
			url: "/pdf-protector",
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
						name: "Pdf Protector",
						description: "Free Pdf Protector online. Pdf Protector allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/pdf-protector",
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
