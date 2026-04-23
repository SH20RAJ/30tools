import ToolLayout from "@/components/tools/shared/ToolLayout";
import Fragment from "react";


export const metadata = {
	title: "How to Format JSON Properly (Without Breaking Data) | 30tools Expert Guide",
	description: "Learn how to format JSON correctly with a simple workflow for validation, cleanup, and conversion-safe output.",
	keywords: "how to format json properly (without breaking data), how to format json properly (without breaking data) guide, 30tools",
	alternates: {
		canonical: "https://30tools.com/how-to-format-json-properly",
	},
	openGraph: {
		title: "How to Format JSON Properly (Without Breaking Data) | 30tools Expert Guide",
		description: "Learn how to format JSON correctly with a simple workflow for validation, cleanup, and conversion-safe output.",
		url: "https://30tools.com/how-to-format-json-properly",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "How to Format JSON Properly (Without Breaking Data) | 30tools Expert Guide",
		description: "Learn how to format JSON correctly with a simple workflow for validation, cleanup, and conversion-safe output.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "how-to-format-json-properly",
        "name": "How to Format JSON Properly (Without Breaking Data)",
        "description": "Learn how to format JSON correctly with a simple workflow for validation, cleanup, and conversion-safe output.",
        "route": "/how-to-format-json-properly",
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
						url: "https://30tools.com/how-to-format-json-properly",
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
