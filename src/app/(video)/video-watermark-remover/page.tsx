import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Video Watermark Remover Online - No Signup | 30tools",
	description: "Free Video Watermark Remover online. Video Watermark Remover allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords: "video watermark remover, free online tool, no signup, others, video watermark remover online, 30tools",
	alternates: {
		canonical: "https://30tools.com/video-watermark-remover",
	},
	openGraph: {
		title: "Free Video Watermark Remover Online - No Signup | 30tools",
		description: "Free Video Watermark Remover online. Video Watermark Remover allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/video-watermark-remover",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Video Watermark Remover Online - No Signup | 30tools",
		description: "Free Video Watermark Remover online. Video Watermark Remover allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "video-watermark-remover",
		"name": "Video Watermark Remover",
		"description": "Video Watermark Remover - Coming Soon",
		"route": "/video-watermark-remover",
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
			name: "Video Watermark Remover",
			url: "/video-watermark-remover",
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
						name: "Video Watermark Remover",
						description: "Free Video Watermark Remover online. Video Watermark Remover allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/video-watermark-remover",
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
