import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Search Online - No Signup | 30tools",
	description: "Free Search online. Search allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords: "search, free online tool, no signup, others, search online, 30tools",
	alternates: {
		canonical: "https://30tools.com/search",
	},
	openGraph: {
		title: "Free Search Online - No Signup | 30tools",
		description: "Free Search online. Search allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/search",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Search Online - No Signup | 30tools",
		description: "Free Search online. Search allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "search",
		"name": "Search",
		"description": "Free Search online. Search allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		"route": "/search",
		"extraSlugs": [
			"search"
		],
		"category": "others"
	};
	const breadcrumbs = [
		{
			name: "Others Tools",
			url: "/others-tools",
		},
		{
			name: "Search",
			url: "/search",
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
						name: "Search",
						description: "Free Search online. Search allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/search",
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
