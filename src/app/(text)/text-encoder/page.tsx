import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Text Encoder Online - No Signup | 30tools",
	description: "Free Text Encoder online. Text Encoder allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords: "text encoder, free online tool, no signup, others, text encoder online, 30tools",
	alternates: {
		canonical: "https://30tools.com/text-encoder",
	},
	openGraph: {
		title: "Free Text Encoder Online - No Signup | 30tools",
		description: "Free Text Encoder online. Text Encoder allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/text-encoder",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Text Encoder Online - No Signup | 30tools",
		description: "Free Text Encoder online. Text Encoder allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "text-encoder",
		"name": "Text Encoder",
		"description": "Text Encoder - Coming Soon",
		"route": "/text-encoder",
		"extraSlugs": [
				"url-encoder"
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
			name: "Text Encoder",
			url: "/text-encoder",
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
						name: "Text Encoder",
						description: "Free Text Encoder online. Text Encoder allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/text-encoder",
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
