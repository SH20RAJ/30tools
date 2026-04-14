import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Meme Video Generator Online - No Signup | 30tools",
	description: "Free Meme Video Generator online. Meme Video Generator allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords: "meme video generator, free online tool, no signup, others, meme video generator online, 30tools",
	alternates: {
		canonical: "https://30tools.com/meme-video-generator",
	},
	openGraph: {
		title: "Free Meme Video Generator Online - No Signup | 30tools",
		description: "Free Meme Video Generator online. Meme Video Generator allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/meme-video-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Meme Video Generator Online - No Signup | 30tools",
		description: "Free Meme Video Generator online. Meme Video Generator allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "meme-video-generator",
		"name": "Meme Video Generator",
		"description": "Meme Video Generator - Coming Soon",
		"route": "/meme-video-generator",
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
			name: "Meme Video Generator",
			url: "/meme-video-generator",
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
						name: "Meme Video Generator",
						description: "Free Meme Video Generator online. Meme Video Generator allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/meme-video-generator",
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
