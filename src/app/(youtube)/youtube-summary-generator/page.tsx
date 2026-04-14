import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Youtube Summary Generator Online - No Signup | 30tools",
	description: "Free Youtube Summary Generator online. Youtube Summary Generator allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords: "youtube summary generator, free online tool, no signup, others, youtube summary generator online, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-summary-generator",
	},
	openGraph: {
		title: "Free Youtube Summary Generator Online - No Signup | 30tools",
		description: "Free Youtube Summary Generator online. Youtube Summary Generator allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/youtube-summary-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Youtube Summary Generator Online - No Signup | 30tools",
		description: "Free Youtube Summary Generator online. Youtube Summary Generator allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "youtube-summary-generator",
		"name": "Youtube Summary Generator",
		"description": "Youtube Summary Generator - Coming Soon",
		"route": "/youtube-summary-generator",
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
			name: "Youtube Summary Generator",
			url: "/youtube-summary-generator",
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
						name: "Youtube Summary Generator",
						description: "Free Youtube Summary Generator online. Youtube Summary Generator allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/youtube-summary-generator",
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
