import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata = {
	title: "Free Course Video Maker Online - No Signup | 30tools",
	description: "Free Course Video Maker online. Course Video Maker allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords: "course video maker, free online tool, no signup, others, course video maker online, 30tools",
	alternates: {
		canonical: "https://30tools.com/course-video-maker",
	},
	openGraph: {
		title: "Free Course Video Maker Online - No Signup | 30tools",
		description: "Free Course Video Maker online. Course Video Maker allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/course-video-maker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Course Video Maker Online - No Signup | 30tools",
		description: "Free Course Video Maker online. Course Video Maker allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "course-video-maker",
		"name": "Course Video Maker",
		"description": "Course Video Maker - Coming Soon",
		"route": "/course-video-maker",
		"extraSlugs": [
				"aesthetic-collage-maker",
				"android-icon-maker",
				"brand-identity-maker",
				"css3-gradient-maker",
				"custom-video-player-maker",
				"free-poetry-maker",
				"rich-snippets-maker",
				"simple-video-maker"
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
			name: "Course Video Maker",
			url: "/course-video-maker",
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
						name: "Course Video Maker",
						description: "Free Course Video Maker online. Course Video Maker allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/course-video-maker",
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
