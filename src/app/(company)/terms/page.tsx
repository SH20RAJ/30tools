import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Terms Online - No Signup | 30tools",
	description: "Free Terms online tool. Fast and secure.",
	keywords: "terms, free online tool, no signup, others, terms online, 30tools",
	alternates: {
		canonical: "https://30tools.com/terms",
	},
	openGraph: {
		title: "Free Terms Online - No Signup | 30tools",
		description: "Free Terms online tool. Fast and secure.",
		url: "https://30tools.com/terms",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Terms Online - No Signup | 30tools",
		description: "Free Terms online tool. Fast and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "terms",
		"name": "Terms",
		"description": "Free Terms online tool. Fast and secure.",
		"route": "/terms",
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
			name: "Terms",
			url: "/terms",
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
						name: "Terms",
						description: "Free Terms online tool. Fast and secure.",
						url: "https://30tools.com/terms",
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
