import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata = {
	title: "Free Make Your Own Terabox Video Player Online - No Signup | 30tools",
	description: "Free Make Your Own Terabox Video Player online tool. Fast and secure.",
	keywords: "make your own terabox video player, free online tool, no signup, others, make your own terabox video player online, 30tools",
	alternates: {
		canonical: "https://30tools.com/blog/make-your-own-terabox-video-player",
	},
	openGraph: {
		title: "Free Make Your Own Terabox Video Player Online - No Signup | 30tools",
		description: "Free Make Your Own Terabox Video Player online tool. Fast and secure.",
		url: "https://30tools.com/blog/make-your-own-terabox-video-player",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Make Your Own Terabox Video Player Online - No Signup | 30tools",
		description: "Free Make Your Own Terabox Video Player online tool. Fast and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "make-your-own-terabox-video-player",
		"name": "Make Your Own Terabox Video Player",
		"description": "Free Make Your Own Terabox Video Player online tool. Fast and secure.",
		"route": "/blog/make-your-own-terabox-video-player",
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
			name: "Make Your Own Terabox Video Player",
			url: "/blog/make-your-own-terabox-video-player",
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
						name: "Make Your Own Terabox Video Player",
						description: "Free Make Your Own Terabox Video Player online tool. Fast and secure.",
						url: "https://30tools.com/blog/make-your-own-terabox-video-player",
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
				<ToolPlaceholderPage toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
