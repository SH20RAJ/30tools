import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Best Paraphrasing Tools Rewrite Text Online - No Signup | 30tools",
	description: "Free Best Paraphrasing Tools Rewrite Text online tool. Fast and secure.",
	keywords: "best paraphrasing tools rewrite text, free online tool, no signup, others, best paraphrasing tools rewrite text online, 30tools",
	alternates: {
		canonical: "https://30tools.com/blog/best-paraphrasing-tools-rewrite-text",
	},
	openGraph: {
		title: "Free Best Paraphrasing Tools Rewrite Text Online - No Signup | 30tools",
		description: "Free Best Paraphrasing Tools Rewrite Text online tool. Fast and secure.",
		url: "https://30tools.com/blog/best-paraphrasing-tools-rewrite-text",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Best Paraphrasing Tools Rewrite Text Online - No Signup | 30tools",
		description: "Free Best Paraphrasing Tools Rewrite Text online tool. Fast and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "best-paraphrasing-tools-rewrite-text",
		"name": "Best Paraphrasing Tools Rewrite Text",
		"description": "Free Best Paraphrasing Tools Rewrite Text online tool. Fast and secure.",
		"route": "/blog/best-paraphrasing-tools-rewrite-text",
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
			name: "Best Paraphrasing Tools Rewrite Text",
			url: "/blog/best-paraphrasing-tools-rewrite-text",
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
						name: "Best Paraphrasing Tools Rewrite Text",
						description: "Free Best Paraphrasing Tools Rewrite Text online tool. Fast and secure.",
						url: "https://30tools.com/blog/best-paraphrasing-tools-rewrite-text",
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
