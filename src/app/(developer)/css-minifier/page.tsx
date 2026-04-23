import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free CSS Minifier Online – Fast & No Signup | 30tools",
	description: "Compress and minify your CSS files to reduce page load times and improve website performance. Our free online tool removes unnecessary whitespace and comments instantly. Privacy-focused. 100% free, fast, and no signup required.",
	keywords: "css minifier, free css minifier, online css minifier, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/css-minifier",
	},
	openGraph: {
		title: "Free CSS Minifier Online – Fast & No Signup | 30tools",
		description: "Compress and minify your CSS files to reduce page load times and improve website performance. Our free online tool removes unnecessary whitespace and comments instantly. Privacy-focused. 100% free, fast, and no signup required.",
		url: "https://30tools.com/css-minifier",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free CSS Minifier Online – Fast & No Signup | 30tools",
		description: "Compress and minify your CSS files to reduce page load times and improve website performance. Our free online tool removes unnecessary whitespace and comments instantly. Privacy-focused. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "css-minifier",
        "name": "CSS Minifier",
        "description": "Compress and minify your CSS files to reduce page load times and improve website performance. Our free online tool removes unnecessary whitespace and comments instantly. Privacy-focused.",
        "route": "/css-minifier",
        "extraSlugs": [
                "css-minifier-tool",
                "free-css-minifier-online",
                "online-css-minifier",
                "stylesheet-minifier",
                "optimize-css-for-web"
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
						url: "https://30tools.com/css-minifier",
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
