import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Watermark Remover Online - No Signup | 30tools",
	description: "Free Watermark Remover online. Watermark Remover allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords: "watermark remover, free online tool, no signup, others, watermark remover online, 30tools",
	alternates: {
		canonical: "https://30tools.com/watermark-remover",
	},
	openGraph: {
		title: "Free Watermark Remover Online - No Signup | 30tools",
		description: "Free Watermark Remover online. Watermark Remover allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/watermark-remover",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Watermark Remover Online - No Signup | 30tools",
		description: "Free Watermark Remover online. Watermark Remover allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "watermark-remover",
		"name": "Watermark Remover",
		"description": "Watermark Remover - Coming Soon",
		"route": "/watermark-remover",
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
			name: "Watermark Remover",
			url: "/watermark-remover",
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
						name: "Watermark Remover",
						description: "Free Watermark Remover online. Watermark Remover allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/watermark-remover",
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
