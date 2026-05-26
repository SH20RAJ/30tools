import ToolLayout from "@/components/tools/shared/ToolLayout";
import Fragment from "react";


export const metadata = {
	title: "Top 10 Free JSON Tools Online for Developer Workflows | 30tools",
	description: "Speed up your developer workflow with our curated list of the top 10 free JSON tools. Format, validate, convert, and minify JSON payloads in your browser.",
	keywords: "top 10 json tools online for faster developer workflows, top 10 json tools online for faster developer workflows guide, 30tools, top-10-json-tools-online, top 10 json tools online, free top-10-json-tools-online, top 10 json tools online online, 30tools guide, online tool guide, free tool category, tool directory, tool overview",
	alternates: {
		canonical: "https://30tools.com/top-10-json-tools-online",
	},
	openGraph: {
		title: "Top 10 Free JSON Tools Online for Developer Workflows | 30tools",
		description: "Speed up your developer workflow with our curated list of the top 10 free JSON tools. Format, validate, convert, and minify JSON payloads in your browser.",
		url: "https://30tools.com/top-10-json-tools-online",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Top 10 Free JSON Tools Online for Developer Workflows | 30tools",
		description: "Speed up your developer workflow with our curated list of the top 10 free JSON tools. Format, validate, convert, and minify JSON payloads in your browser.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "top-10-json-tools-online",
        "name": "Top 10 JSON Tools Online for Faster Developer Workflows",
        "description": "A practical list of the top 10 JSON tools online for formatting, validation, conversion, and schema-ready payload workflows.",
        "route": "/top-10-json-tools-online",
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
						url: "https://30tools.com/top-10-json-tools-online",
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
