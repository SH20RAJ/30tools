import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free JavaScript Minifier Online – Fast & No Signup | 30tools",
	description: "Compress and minify your JavaScript files to reduce payload size and speed up your website. Our free online tool removes unnecessary code while preserving functionality. 100% free, fast, and no signup required.",
	keywords: "javascript minifier, free javascript minifier, online javascript minifier, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/javascript-minifier",
	},
	openGraph: {
		title: "Free JavaScript Minifier Online – Fast & No Signup | 30tools",
		description: "Compress and minify your JavaScript files to reduce payload size and speed up your website. Our free online tool removes unnecessary code while preserving functionality. 100% free, fast, and no signup required.",
		url: "https://30tools.com/javascript-minifier",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JavaScript Minifier Online – Fast & No Signup | 30tools",
		description: "Compress and minify your JavaScript files to reduce payload size and speed up your website. Our free online tool removes unnecessary code while preserving functionality. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "javascript-minifier",
        "name": "JavaScript Minifier",
        "description": "Compress and minify your JavaScript files to reduce payload size and speed up your website. Our free online tool removes unnecessary code while preserving functionality.",
        "route": "/javascript-minifier",
        "extraSlugs": [
                "free-javascript-minifier-online",
                "javascript-minifier-tool",
                "compress-js-online"
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
						url: "https://30tools.com/javascript-minifier",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "developer" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
