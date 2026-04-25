import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Audio Tools Online – Fast & No Signup | 30tools",
	description: "Compress and convert audio files between formats 100% free, fast, and no signup required.",
	keywords: "audio tools, free audio tools, online audio tools, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/audio-tools",
	},
	openGraph: {
		title: "Free Audio Tools Online – Fast & No Signup | 30tools",
		description: "Compress and convert audio files between formats 100% free, fast, and no signup required.",
		url: "https://30tools.com/audio-tools",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Audio Tools Online – Fast & No Signup | 30tools",
		description: "Compress and convert audio files between formats 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "audio-tools",
        "name": "Audio Tools",
        "description": "Compress and convert audio files between formats",
        "route": "/audio-tools",
        "extraSlugs": [],
        "popular": false,
        "category": "audio"
};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: tool.name,
						description: tool.description,
						url: "https://30tools.com/audio-tools",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "audio" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
