import ToolLayout from "@/components/tools/shared/ToolLayout";
import Fragment from "react";


export const metadata = {
	title: "Best Free Converters in 2026 (File, Data, and Media) | 30tools Expert Guide",
	description: "The best free converters in 2026 for JSON, CSV, XML, images, and documents. No signup required.",
	keywords: "best free converters in 2026 (file, data, and media), best free converters in 2026 (file, data, and media) guide, 30tools",
	alternates: {
		canonical: "https://30tools.com/best-free-converters-in-2026",
	},
	openGraph: {
		title: "Best Free Converters in 2026 (File, Data, and Media) | 30tools Expert Guide",
		description: "The best free converters in 2026 for JSON, CSV, XML, images, and documents. No signup required.",
		url: "https://30tools.com/best-free-converters-in-2026",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Best Free Converters in 2026 (File, Data, and Media) | 30tools Expert Guide",
		description: "The best free converters in 2026 for JSON, CSV, XML, images, and documents. No signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "best-free-converters-in-2026",
        "name": "Best Free Converters in 2026 (File, Data, and Media)",
        "description": "The best free converters in 2026 for JSON, CSV, XML, images, and documents. No signup required.",
        "route": "/best-free-converters-in-2026",
        "extraSlugs": [],
        "popular": false,
        "category": "content"
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
						url: "https://30tools.com/best-free-converters-in-2026",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "content" }}>
				<div className='min-h-[100px]'  />
			</ToolLayout>
		</>
	);
}
