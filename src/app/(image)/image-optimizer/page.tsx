import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Image Optimizer Online - No Signup | 30tools",
	description: "Free Image Optimizer online tool. Fast and secure.",
	keywords: "image optimizer, free online tool, no signup, image, image optimizer online, 30tools",
	alternates: {
		canonical: "https://30tools.com/image-optimizer",
	},
	openGraph: {
		title: "Free Image Optimizer Online - No Signup | 30tools",
		description: "Free Image Optimizer online tool. Fast and secure.",
		url: "https://30tools.com/image-optimizer",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Image Optimizer Online - No Signup | 30tools",
		description: "Free Image Optimizer online tool. Fast and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "image-optimizer",
		"name": "Image Optimizer",
		"description": "Free Image Optimizer online tool. Fast and secure.",
		"route": "/image-optimizer",
		"extraSlugs": [],
		"popular": false,
		"category": "image"
	};
	const breadcrumbs = [
		{
			name: "Image Tools",
			url: "/image-tools",
		},
		{
			name: "Image Optimizer",
			url: "/image-optimizer",
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
						name: "Image Optimizer",
						description: "Free Image Optimizer online tool. Fast and secure.",
						url: "https://30tools.com/image-optimizer",
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
