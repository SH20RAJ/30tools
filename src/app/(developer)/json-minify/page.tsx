import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free JSON Minify Online – Fast & No Signup | 30tools",
	description: "Compress and minify your JSON data to reduce its size for web transmission. Our free online tool removes all unnecessary whitespace and comments instantly. 100% free, fast, and no signup required.",
	keywords: "json minify, free json minify, online json minify, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/json-minify",
	},
	openGraph: {
		title: "Free JSON Minify Online – Fast & No Signup | 30tools",
		description: "Compress and minify your JSON data to reduce its size for web transmission. Our free online tool removes all unnecessary whitespace and comments instantly. 100% free, fast, and no signup required.",
		url: "https://30tools.com/json-minify",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JSON Minify Online – Fast & No Signup | 30tools",
		description: "Compress and minify your JSON data to reduce its size for web transmission. Our free online tool removes all unnecessary whitespace and comments instantly. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "json-minify",
        "name": "JSON Minify",
        "description": "Compress and minify your JSON data to reduce its size for web transmission. Our free online tool removes all unnecessary whitespace and comments instantly.",
        "route": "/json-minify",
        "extraSlugs": [
                "free-json-minify-online",
                "json-minify-tool",
                "minify-js-online",
                "json-compressor-online"
        ],
        "popular": false,
        "category": "developer"
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
						url: "https://30tools.com/json-minify",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "developer" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
