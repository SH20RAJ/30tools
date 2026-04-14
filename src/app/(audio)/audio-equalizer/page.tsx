import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Audio Equalizer Online - No Signup | 30tools",
	description: "Free Audio Equalizer online. Audio Equalizer allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords: "audio equalizer, free online tool, no signup, others, audio equalizer online, 30tools",
	alternates: {
		canonical: "https://30tools.com/audio-equalizer",
	},
	openGraph: {
		title: "Free Audio Equalizer Online - No Signup | 30tools",
		description: "Free Audio Equalizer online. Audio Equalizer allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/audio-equalizer",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Audio Equalizer Online - No Signup | 30tools",
		description: "Free Audio Equalizer online. Audio Equalizer allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "audio-equalizer",
		"name": "Audio Equalizer",
		"description": "Audio Equalizer - Coming Soon",
		"route": "/audio-equalizer",
		"extraSlugs": [
				"audio-tools",
				"audio-trimmer",
				"change-audio-format",
				"mp4-audio-ripper",
				"optimize-audio-files",
				"shorten-audio-clip",
				"split-audio-file"
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
			name: "Audio Equalizer",
			url: "/audio-equalizer",
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
						name: "Audio Equalizer",
						description: "Free Audio Equalizer online. Audio Equalizer allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/audio-equalizer",
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
