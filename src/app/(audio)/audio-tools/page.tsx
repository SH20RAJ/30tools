import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";

export const metadata = {
	title: "Free Audio Tools Online - No Signup | 30tools",
	description: "Free Audio Tools online tool. Fast and secure.",
	keywords: "audio tools, free online tool, no signup, audio, audio tools online, 30tools",
	alternates: {
		canonical: "https://30tools.com/audio-tools",
	},
	openGraph: {
		title: "Free Audio Tools Online - No Signup | 30tools",
		description: "Free Audio Tools online tool. Fast and secure.",
		url: "https://30tools.com/audio-tools",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Audio Tools Online - No Signup | 30tools",
		description: "Free Audio Tools online tool. Fast and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "audio-tools",
		"name": "Audio Tools",
		"description": "Free Audio Tools online tool. Fast and secure.",
		"route": "/audio-tools",
		"extraSlugs": [],
		"popular": false,
		"category": "audio"
	};
	const breadcrumbs = [
		{
			name: "Audio Tools",
			url: "/audio-tools",
		},
		{
			name: "Audio Tools",
			url: "/audio-tools",
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
						name: "Audio Tools",
						description: "Free Audio Tools online tool. Fast and secure.",
						url: "https://30tools.com/audio-tools",
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
