import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Audio Player Online - No Signup | 30tools",
	description: "Free Audio Player online. Audio Player allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords: "audio player, free online tool, no signup, others, audio player online, 30tools",
	alternates: {
		canonical: "https://30tools.com/audio-player",
	},
	openGraph: {
		title: "Free Audio Player Online - No Signup | 30tools",
		description: "Free Audio Player online. Audio Player allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/audio-player",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Audio Player Online - No Signup | 30tools",
		description: "Free Audio Player online. Audio Player allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "audio-player",
		"name": "Audio Player",
		"description": "Audio Player - Coming Soon",
		"route": "/audio-player",
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
			name: "Audio Player",
			url: "/audio-player",
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
						name: "Audio Player",
						description: "Free Audio Player online. Audio Player allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/audio-player",
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
