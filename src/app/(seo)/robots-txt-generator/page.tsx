import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Robots.txt Generator Online - No Signup | 30tools",
	description: "Generate robots.txt files for website crawling control",
	keywords: "robots.txt generator, free online tool, no signup, seo, robots.txt generator online, 30tools",
	alternates: {
		canonical: "https://30tools.com/robots-txt-generator",
	},
	openGraph: {
		title: "Free Robots.txt Generator Online - No Signup | 30tools",
		description: "Generate robots.txt files for website crawling control",
		url: "https://30tools.com/robots-txt-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Robots.txt Generator Online - No Signup | 30tools",
		description: "Generate robots.txt files for website crawling control",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "robots-txt-generator",
		"name": "Robots.txt Generator",
		"description": "Generate robots.txt files for website crawling control",
		"route": "/robots-txt-generator",
		"extraSlugs": [
			"create-robots-txt",
			"robots-file-maker",
			"robots-txt-builder"
		],
		"popular": true,
		"category": "seo"
	};
	const breadcrumbs = [
		{
			name: "Seo Tools",
			url: "/seo-tools",
		},
		{
			name: "Robots.txt Generator",
			url: "/robots-txt-generator",
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
						name: "Robots.txt Generator",
						description: "Generate robots.txt files for website crawling control",
						url: "https://30tools.com/robots-txt-generator",
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
