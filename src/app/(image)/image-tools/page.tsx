import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Free Image Tools Online Online – Fast & No Signup | 30tools",
	description: "Browse our collection of free online image tools. 100% free, no signup required, and privacy-focused.",
	keywords: "free image tools online, free free image tools online, online free image tools online, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/image-tools",
	},
	openGraph: {
		title: "Free Free Image Tools Online Online – Fast & No Signup | 30tools",
		description: "Browse our collection of free online image tools. 100% free, no signup required, and privacy-focused.",
		url: "https://30tools.com/image-tools",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Free Image Tools Online Online – Fast & No Signup | 30tools",
		description: "Browse our collection of free online image tools. 100% free, no signup required, and privacy-focused.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "image-tools",
        "name": "Free Image Tools Online",
        "description": "Browse our collection of free online image tools. 100% free, no signup required, and privacy-focused.",
        "route": "/image-tools",
        "extraSlugs": [],
        "popular": false,
        "category": "image"
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
						url: "https://30tools.com/image-tools",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "image" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
