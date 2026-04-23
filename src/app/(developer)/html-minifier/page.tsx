import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free HTML Minifier Online – Fast & No Signup | 30tools",
	description: "Compress and minify your HTML code to improve website speed. Our free online tool removes unnecessary whitespace, comments, and line breaks for faster page load times. 100% free, fast, and no signup required.",
	keywords: "html minifier, free html minifier, online html minifier, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/html-minifier",
	},
	openGraph: {
		title: "Free HTML Minifier Online – Fast & No Signup | 30tools",
		description: "Compress and minify your HTML code to improve website speed. Our free online tool removes unnecessary whitespace, comments, and line breaks for faster page load times. 100% free, fast, and no signup required.",
		url: "https://30tools.com/html-minifier",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free HTML Minifier Online – Fast & No Signup | 30tools",
		description: "Compress and minify your HTML code to improve website speed. Our free online tool removes unnecessary whitespace, comments, and line breaks for faster page load times. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "html-minifier",
        "name": "HTML Minifier",
        "description": "Compress and minify your HTML code to improve website speed. Our free online tool removes unnecessary whitespace, comments, and line breaks for faster page load times.",
        "route": "/html-minifier",
        "extraSlugs": [
                "free-html-minifier-online",
                "html-minifier-tool",
                "optimize-html-for-web"
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
						url: "https://30tools.com/html-minifier",
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
