import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Video Background Remover Online - No Signup | 30tools",
	description: "Free Video Background Remover online. Video Background Remover allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords: "video background remover, free online tool, no signup, others, video background remover online, 30tools",
	alternates: {
		canonical: "https://30tools.com/video-background-remover",
	},
	openGraph: {
		title: "Free Video Background Remover Online - No Signup | 30tools",
		description: "Free Video Background Remover online. Video Background Remover allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/video-background-remover",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Video Background Remover Online - No Signup | 30tools",
		description: "Free Video Background Remover online. Video Background Remover allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "video-background-remover",
		"name": "Video Background Remover",
		"description": "Video Background Remover - Coming Soon",
		"route": "/video-background-remover",
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
			name: "Video Background Remover",
			url: "/video-background-remover",
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
						name: "Video Background Remover",
						description: "Free Video Background Remover online. Video Background Remover allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/video-background-remover",
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
