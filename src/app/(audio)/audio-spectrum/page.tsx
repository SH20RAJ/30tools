import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Audio Spectrum Online - No Signup | 30tools",
	description: "Free Audio Spectrum online. Audio Spectrum allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
	keywords: "audio spectrum, free online tool, no signup, others, audio spectrum online, 30tools",
	alternates: {
		canonical: "https://30tools.com/audio-spectrum",
	},
	openGraph: {
		title: "Free Audio Spectrum Online - No Signup | 30tools",
		description: "Free Audio Spectrum online. Audio Spectrum allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		url: "https://30tools.com/audio-spectrum",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Audio Spectrum Online - No Signup | 30tools",
		description: "Free Audio Spectrum online. Audio Spectrum allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "audio-spectrum",
		"name": "Audio Spectrum",
		"description": "Audio Spectrum - Coming Soon",
		"route": "/audio-spectrum",
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
			name: "Audio Spectrum",
			url: "/audio-spectrum",
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
						name: "Audio Spectrum",
						description: "Free Audio Spectrum online. Audio Spectrum allows you to perform online tasks quickly and easily. 100% free, no signup required, and privacy-focused processing in your browser.",
						url: "https://30tools.com/audio-spectrum",
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
