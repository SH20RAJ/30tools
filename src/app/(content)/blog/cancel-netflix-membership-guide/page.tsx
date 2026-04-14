import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Cancel Netflix Membership Guide Online - No Signup | 30tools",
	description: "Free Cancel Netflix Membership Guide online tool. Fast and secure.",
	keywords: "cancel netflix membership guide, free online tool, no signup, others, cancel netflix membership guide online, 30tools",
	alternates: {
		canonical: "https://30tools.com/blog/cancel-netflix-membership-guide",
	},
	openGraph: {
		title: "Free Cancel Netflix Membership Guide Online - No Signup | 30tools",
		description: "Free Cancel Netflix Membership Guide online tool. Fast and secure.",
		url: "https://30tools.com/blog/cancel-netflix-membership-guide",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Cancel Netflix Membership Guide Online - No Signup | 30tools",
		description: "Free Cancel Netflix Membership Guide online tool. Fast and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "cancel-netflix-membership-guide",
		"name": "Cancel Netflix Membership Guide",
		"description": "Free Cancel Netflix Membership Guide online tool. Fast and secure.",
		"route": "/blog/cancel-netflix-membership-guide",
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
			name: "Cancel Netflix Membership Guide",
			url: "/blog/cancel-netflix-membership-guide",
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
						name: "Cancel Netflix Membership Guide",
						description: "Free Cancel Netflix Membership Guide online tool. Fast and secure.",
						url: "https://30tools.com/blog/cancel-netflix-membership-guide",
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
