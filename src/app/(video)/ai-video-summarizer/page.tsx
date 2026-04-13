import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata = {
	title: "Free Ai Video Summarizer Online - No Signup | 30tools",
	description: "Free Ai Video Summarizer online. Ai Video Summarizer allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords: "ai video summarizer, free online tool, no signup, others, ai video summarizer online, 30tools",
	alternates: {
		canonical: "https://30tools.com/ai-video-summarizer",
	},
	openGraph: {
		title: "Free Ai Video Summarizer Online - No Signup | 30tools",
		description: "Free Ai Video Summarizer online. Ai Video Summarizer allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/ai-video-summarizer",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Ai Video Summarizer Online - No Signup | 30tools",
		description: "Free Ai Video Summarizer online. Ai Video Summarizer allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "ai-video-summarizer",
		"name": "Ai Video Summarizer",
		"description": "Ai Video Summarizer - Coming Soon",
		"route": "/ai-video-summarizer",
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
			name: "Ai Video Summarizer",
			url: "/ai-video-summarizer",
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
						name: "Ai Video Summarizer",
						description: "Free Ai Video Summarizer online. Ai Video Summarizer allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/ai-video-summarizer",
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
