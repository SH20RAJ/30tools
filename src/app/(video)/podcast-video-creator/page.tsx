import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Podcast Video Creator Online - No Signup | 30tools",
	description: "Free Podcast Video Creator online. Podcast Video Creator allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords: "podcast video creator, free online tool, no signup, others, podcast video creator online, 30tools",
	alternates: {
		canonical: "https://30tools.com/podcast-video-creator",
	},
	openGraph: {
		title: "Free Podcast Video Creator Online - No Signup | 30tools",
		description: "Free Podcast Video Creator online. Podcast Video Creator allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/podcast-video-creator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Podcast Video Creator Online - No Signup | 30tools",
		description: "Free Podcast Video Creator online. Podcast Video Creator allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "podcast-video-creator",
		"name": "Podcast Video Creator",
		"description": "Podcast Video Creator - Coming Soon",
		"route": "/podcast-video-creator",
		"extraSlugs": [
			"picture-collage-creator",
			"web-gradient-creator",
			"zip-creator"
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
			name: "Podcast Video Creator",
			url: "/podcast-video-creator",
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
						name: "Podcast Video Creator",
						description: "Free Podcast Video Creator online. Podcast Video Creator allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/podcast-video-creator",
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
