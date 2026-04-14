import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free AI YouTube Script Generator Online - No Signup | 30tools",
	description: "Generate engaging YouTube video scripts with AI assistance",
	keywords: "ai youtube script generator, free online tool, no signup, youtube, ai youtube script generator online, 30tools",
	alternates: {
		canonical: "https://30tools.com/youtube-script-generator",
	},
	openGraph: {
		title: "Free AI YouTube Script Generator Online - No Signup | 30tools",
		description: "Generate engaging YouTube video scripts with AI assistance",
		url: "https://30tools.com/youtube-script-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free AI YouTube Script Generator Online - No Signup | 30tools",
		description: "Generate engaging YouTube video scripts with AI assistance",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "youtube-script-generator",
		"name": "AI YouTube Script Generator",
		"description": "Generate engaging YouTube video scripts with AI assistance",
		"route": "/youtube-script-generator",
		"extraSlugs": [
				"ai-youtube-script-writer-for-gaming",
				"download-youtube-transcript",
				"download-youtube-videos-1080p",
				"extract-youtube-subtitles",
				"save-youtube-captions",
				"youtube-analytics",
				"youtube-cover-maker",
				"youtube-gif-maker",
				"youtube-idea-generator",
				"youtube-thumbnail-generator",
				"youtube-trends",
				"youtube-video-script-maker-free"
		],
		"popular": false,
		"category": "youtube"
};
	const breadcrumbs = [
		{
			name: "Youtube Tools",
			url: "/youtube-tools",
		},
		{
			name: "AI YouTube Script Generator",
			url: "/youtube-script-generator",
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
						name: "AI YouTube Script Generator",
						description: "Generate engaging YouTube video scripts with AI assistance",
						url: "https://30tools.com/youtube-script-generator",
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
