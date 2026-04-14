import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Video Joiner Online - No Signup | 30tools",
	description: "Free Video Joiner online. Video Joiner allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords: "video joiner, free online tool, no signup, others, video joiner online, 30tools",
	alternates: {
		canonical: "https://30tools.com/video-joiner",
	},
	openGraph: {
		title: "Free Video Joiner Online - No Signup | 30tools",
		description: "Free Video Joiner online. Video Joiner allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/video-joiner",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Video Joiner Online - No Signup | 30tools",
		description: "Free Video Joiner online. Video Joiner allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "video-joiner",
		"name": "Video Joiner",
		"description": "Video Joiner - Coming Soon",
		"route": "/video-joiner",
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
			name: "Video Joiner",
			url: "/video-joiner",
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
						name: "Video Joiner",
						description: "Free Video Joiner online. Video Joiner allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/video-joiner",
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
