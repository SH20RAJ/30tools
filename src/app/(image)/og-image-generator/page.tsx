import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free OG Image Generator Online - No Signup | 30tools",
	description: "Create beautiful Open Graph images for your website for free. Customize templates, backgrounds, and text.",
	keywords: "og image generator, free online tool, no signup, image, og image generator online, 30tools",
	alternates: {
		canonical: "https://30tools.com/og-image-generator",
	},
	openGraph: {
		title: "Free OG Image Generator Online - No Signup | 30tools",
		description: "Create beautiful Open Graph images for your website for free. Customize templates, backgrounds, and text.",
		url: "https://30tools.com/og-image-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free OG Image Generator Online - No Signup | 30tools",
		description: "Create beautiful Open Graph images for your website for free. Customize templates, backgrounds, and text.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "og-image-generator",
		"name": "OG Image Generator",
		"description": "Create beautiful Open Graph images for your website for free. Customize templates, backgrounds, and text.",
		"route": "/og-image-generator",
		"extraSlugs": [
				"create-og-image-for-website",
				"open-graph-image-generator-free"
		],
		"popular": true,
		"category": "image"
};
	const breadcrumbs = [
		{
			name: "Image Tools",
			url: "/image-tools",
		},
		{
			name: "OG Image Generator",
			url: "/og-image-generator",
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
						name: "OG Image Generator",
						description: "Create beautiful Open Graph images for your website for free. Customize templates, backgrounds, and text.",
						url: "https://30tools.com/og-image-generator",
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
