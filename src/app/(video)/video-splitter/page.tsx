import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Video Splitter Online - No Signup | 30tools",
	description: "Free Video Splitter online. Video Splitter allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords: "video splitter, free online tool, no signup, others, video splitter online, 30tools",
	alternates: {
		canonical: "https://30tools.com/video-splitter",
	},
	openGraph: {
		title: "Free Video Splitter Online - No Signup | 30tools",
		description: "Free Video Splitter online. Video Splitter allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/video-splitter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Video Splitter Online - No Signup | 30tools",
		description: "Free Video Splitter online. Video Splitter allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "video-splitter",
		"name": "Video Splitter",
		"description": "Video Splitter - Coming Soon",
		"route": "/video-splitter",
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
			name: "Video Splitter",
			url: "/video-splitter",
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
						name: "Video Splitter",
						description: "Free Video Splitter online. Video Splitter allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/video-splitter",
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
