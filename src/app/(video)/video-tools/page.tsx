import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Video Tools Online – Fast & No Signup | 30tools",
	description: "Compress videos, convert formats, and create GIFs 100% free, fast, and no signup required.",
	keywords: "video tools, free video tools, online video tools, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/video-tools",
	},
	openGraph: {
		title: "Free Video Tools Online – Fast & No Signup | 30tools",
		description: "Compress videos, convert formats, and create GIFs 100% free, fast, and no signup required.",
		url: "https://30tools.com/video-tools",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Video Tools Online – Fast & No Signup | 30tools",
		description: "Compress videos, convert formats, and create GIFs 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "video-tools",
        "name": "Video Tools",
        "description": "Compress videos, convert formats, and create GIFs",
        "route": "/video-tools",
        "extraSlugs": [],
        "popular": false,
        "category": "video"
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
						url: "https://30tools.com/video-tools",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "video" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
