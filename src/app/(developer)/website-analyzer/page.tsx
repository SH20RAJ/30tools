import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Website Analyzer Online - No Signup | 30tools",
	description: "Free Website Analyzer online. Website Analyzer allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords: "website analyzer, free online tool, no signup, others, website analyzer online, 30tools",
	alternates: {
		canonical: "https://30tools.com/website-analyzer",
	},
	openGraph: {
		title: "Free Website Analyzer Online - No Signup | 30tools",
		description: "Free Website Analyzer online. Website Analyzer allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/website-analyzer",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Website Analyzer Online - No Signup | 30tools",
		description: "Free Website Analyzer online. Website Analyzer allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "website-analyzer",
		"name": "Website Analyzer",
		"description": "Website Analyzer - Coming Soon",
		"route": "/website-analyzer",
		"extraSlugs": [
			"website-content-analyzer"
		],
		"popular": false,
		"category": "others"
	};
	const breadcrumbs = [
		{
			name: "Others Tools",
			url: "/others-tools",
		},
		{
			name: "Website Analyzer",
			url: "/website-analyzer",
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
						name: "Website Analyzer",
						description: "Free Website Analyzer online. Website Analyzer allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/website-analyzer",
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
