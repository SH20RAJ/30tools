import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Faceless Video Generator Online - No Signup | 30tools",
	description: "Free Faceless Video Generator online. Faceless Video Generator allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords: "faceless video generator, free online tool, no signup, others, faceless video generator online, 30tools",
	alternates: {
		canonical: "https://30tools.com/faceless-video-generator",
	},
	openGraph: {
		title: "Free Faceless Video Generator Online - No Signup | 30tools",
		description: "Free Faceless Video Generator online. Faceless Video Generator allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/faceless-video-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Faceless Video Generator Online - No Signup | 30tools",
		description: "Free Faceless Video Generator online. Faceless Video Generator allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "faceless-video-generator",
		"name": "Faceless Video Generator",
		"description": "Faceless Video Generator - Coming Soon",
		"route": "/faceless-video-generator",
		"extraSlugs": [
				"html5-video-player-generator",
				"online-video-player-creator"
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
			name: "Faceless Video Generator",
			url: "/faceless-video-generator",
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
						name: "Faceless Video Generator",
						description: "Free Faceless Video Generator online. Faceless Video Generator allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/faceless-video-generator",
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
