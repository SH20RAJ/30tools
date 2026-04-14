import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Publer Reviews Online - No Signup | 30tools",
	description: "Free Publer Reviews online tool. Fast and secure.",
	keywords: "publer reviews, free online tool, no signup, others, publer reviews online, 30tools",
	alternates: {
		canonical: "https://30tools.com/blog/publer-reviews",
	},
	openGraph: {
		title: "Free Publer Reviews Online - No Signup | 30tools",
		description: "Free Publer Reviews online tool. Fast and secure.",
		url: "https://30tools.com/blog/publer-reviews",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Publer Reviews Online - No Signup | 30tools",
		description: "Free Publer Reviews online tool. Fast and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "publer-reviews",
		"name": "Publer Reviews",
		"description": "Free Publer Reviews online tool. Fast and secure.",
		"route": "/blog/publer-reviews",
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
			name: "Publer Reviews",
			url: "/blog/publer-reviews",
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
						name: "Publer Reviews",
						description: "Free Publer Reviews online tool. Fast and secure.",
						url: "https://30tools.com/blog/publer-reviews",
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
