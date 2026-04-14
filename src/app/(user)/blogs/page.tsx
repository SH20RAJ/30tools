import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Blogs Online - No Signup | 30tools",
	description: "Free Blogs online tool. Fast and secure.",
	keywords: "blogs, free online tool, no signup, others, blogs online, 30tools",
	alternates: {
		canonical: "https://30tools.com/blogs",
	},
	openGraph: {
		title: "Free Blogs Online - No Signup | 30tools",
		description: "Free Blogs online tool. Fast and secure.",
		url: "https://30tools.com/blogs",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Blogs Online - No Signup | 30tools",
		description: "Free Blogs online tool. Fast and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "blogs",
		"name": "Blogs",
		"description": "Free Blogs online tool. Fast and secure.",
		"route": "/blogs",
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
			name: "Blogs",
			url: "/blogs",
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
						name: "Blogs",
						description: "Free Blogs online tool. Fast and secure.",
						url: "https://30tools.com/blogs",
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
