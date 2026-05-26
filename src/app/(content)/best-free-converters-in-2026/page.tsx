import ToolLayout from "@/components/tools/shared/ToolLayout";
import Fragment from "react";


export const metadata = {
	title: "Best Free File, Data, and Media Converters in 2026 | 30tools",
	description: "Convert any file, media format, or data payload instantly. Explore our ranked list of the best free online converter tools for 2026. No registration needed.",
	keywords: "best free converters in 2026 (file, data, and media), and media) guide, 30tools, best-free-converters-in-2026, best free converters in 2026, free best-free-converters-in-2026, best free converters in 2026 online, 30tools guide, online tool guide, free tool category",
	alternates: {
		canonical: "https://30tools.com/best-free-converters-in-2026",
	},
	openGraph: {
		title: "Best Free File, Data, and Media Converters in 2026 | 30tools",
		description: "Convert any file, media format, or data payload instantly. Explore our ranked list of the best free online converter tools for 2026. No registration needed.",
		url: "https://30tools.com/best-free-converters-in-2026",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Best Free File, Data, and Media Converters in 2026 | 30tools",
		description: "Convert any file, media format, or data payload instantly. Explore our ranked list of the best free online converter tools for 2026. No registration needed.",
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
