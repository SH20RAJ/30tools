import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata = {
	title: "Free Top Sentence Rewriters Review Online - No Signup | 30tools",
	description: "Free Top Sentence Rewriters Review online tool. Fast and secure.",
	keywords: "top sentence rewriters review, free online tool, no signup, others, top sentence rewriters review online, 30tools",
	alternates: {
		canonical: "https://30tools.com/blog/top-sentence-rewriters-review",
	},
	openGraph: {
		title: "Free Top Sentence Rewriters Review Online - No Signup | 30tools",
		description: "Free Top Sentence Rewriters Review online tool. Fast and secure.",
		url: "https://30tools.com/blog/top-sentence-rewriters-review",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Top Sentence Rewriters Review Online - No Signup | 30tools",
		description: "Free Top Sentence Rewriters Review online tool. Fast and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "top-sentence-rewriters-review",
		"name": "Top Sentence Rewriters Review",
		"description": "Free Top Sentence Rewriters Review online tool. Fast and secure.",
		"route": "/blog/top-sentence-rewriters-review",
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
			name: "Top Sentence Rewriters Review",
			url: "/blog/top-sentence-rewriters-review",
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
						name: "Top Sentence Rewriters Review",
						description: "Free Top Sentence Rewriters Review online tool. Fast and secure.",
						url: "https://30tools.com/blog/top-sentence-rewriters-review",
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
				<ToolPlaceholderPage toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
