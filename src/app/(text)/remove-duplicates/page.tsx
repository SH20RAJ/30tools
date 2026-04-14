import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Remove Duplicates Online - No Signup | 30tools",
	description: "Free Remove Duplicates online. Remove Duplicates allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords: "remove duplicates, free online tool, no signup, others, remove duplicates online, 30tools",
	alternates: {
		canonical: "https://30tools.com/remove-duplicates",
	},
	openGraph: {
		title: "Free Remove Duplicates Online - No Signup | 30tools",
		description: "Free Remove Duplicates online. Remove Duplicates allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/remove-duplicates",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Remove Duplicates Online - No Signup | 30tools",
		description: "Free Remove Duplicates online. Remove Duplicates allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "remove-duplicates",
		"name": "Remove Duplicates",
		"description": "Remove Duplicates - Coming Soon",
		"route": "/remove-duplicates",
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
			name: "Remove Duplicates",
			url: "/remove-duplicates",
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
						name: "Remove Duplicates",
						description: "Free Remove Duplicates online. Remove Duplicates allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/remove-duplicates",
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
