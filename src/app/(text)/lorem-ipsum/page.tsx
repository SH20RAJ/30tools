import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Lorem Ipsum Generator Online - No Signup | 30tools",
	description: "Generate custom Lorem Ipsum text for your designs.",
	keywords: "lorem ipsum generator, free online tool, no signup, text, lorem ipsum generator online, 30tools",
	alternates: {
		canonical: "https://30tools.com/lorem-ipsum",
	},
	openGraph: {
		title: "Free Lorem Ipsum Generator Online - No Signup | 30tools",
		description: "Generate custom Lorem Ipsum text for your designs.",
		url: "https://30tools.com/lorem-ipsum",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Lorem Ipsum Generator Online - No Signup | 30tools",
		description: "Generate custom Lorem Ipsum text for your designs.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "lorem-ipsum-generator",
		"name": "Lorem Ipsum Generator",
		"description": "Generate custom Lorem Ipsum text for your designs.",
		"route": "/lorem-ipsum",
		"extraSlugs": [
				"lorem-ipsum-generator",
				"lorem-ipsum-generator-for-figma",
				"lorem-ipsum-text-copy",
				"placeholder-text-generator"
		],
		"popular": false,
		"category": "text"
};
	const breadcrumbs = [
		{
			name: "Text Tools",
			url: "/text-tools",
		},
		{
			name: "Lorem Ipsum Generator",
			url: "/lorem-ipsum",
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
						name: "Lorem Ipsum Generator",
						description: "Generate custom Lorem Ipsum text for your designs.",
						url: "https://30tools.com/lorem-ipsum",
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
