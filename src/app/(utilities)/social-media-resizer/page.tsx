import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Social Media Resizer Online - No Signup | 30tools",
	description: "Free Social Media Resizer online. Social Media Resizer allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords: "social media resizer, free online tool, no signup, others, social media resizer online, 30tools",
	alternates: {
		canonical: "https://30tools.com/social-media-resizer",
	},
	openGraph: {
		title: "Free Social Media Resizer Online - No Signup | 30tools",
		description: "Free Social Media Resizer online. Social Media Resizer allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/social-media-resizer",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Social Media Resizer Online - No Signup | 30tools",
		description: "Free Social Media Resizer online. Social Media Resizer allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "social-media-resizer",
		"name": "Social Media Resizer",
		"description": "Free Social Media Resizer online. Social Media Resizer allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		"route": "/social-media-resizer",
		"extraSlugs": [
			"resize-image-for-social-media",
			"social-media-downloader",
			"social-media-post-size",
			"social-media-resizer"
		],
		"category": "others"
	};
	const breadcrumbs = [
		{
			name: "Others Tools",
			url: "/others-tools",
		},
		{
			name: "Social Media Resizer",
			url: "/social-media-resizer",
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
						name: "Social Media Resizer",
						description: "Free Social Media Resizer online. Social Media Resizer allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/social-media-resizer",
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
