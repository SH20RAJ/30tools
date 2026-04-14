import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Youtube Shorts Creator Online - No Signup | 30tools",
	description: "Free Youtube Shorts Creator online. Youtube Shorts Creator allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords: "youtube shorts creator, free online tool, no signup, others, youtube shorts creator online, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-shorts-creator",
	},
	openGraph: {
		title: "Free Youtube Shorts Creator Online - No Signup | 30tools",
		description: "Free Youtube Shorts Creator online. Youtube Shorts Creator allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/youtube-shorts-creator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Youtube Shorts Creator Online - No Signup | 30tools",
		description: "Free Youtube Shorts Creator online. Youtube Shorts Creator allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "youtube-shorts-creator",
		"name": "Youtube Shorts Creator",
		"description": "Youtube Shorts Creator - Coming Soon",
		"route": "/youtube-shorts-creator",
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
			name: "Youtube Shorts Creator",
			url: "/youtube-shorts-creator",
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
						name: "Youtube Shorts Creator",
						description: "Free Youtube Shorts Creator online. Youtube Shorts Creator allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/youtube-shorts-creator",
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
