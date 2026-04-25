import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free CSS Beautifier Online – Fast & No Signup | 30tools",
	description: "Format and prettify your CSS code instantly with our free online CSS Beautifier. Improve code readability, fix indentation, and organize your stylesheets for better maintenance. Fast and secure. 100% free, fast, and no signup required.",
	keywords: "css beautifier, free css beautifier, online css beautifier, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/css-beautifier",
	},
	openGraph: {
		title: "Free CSS Beautifier Online – Fast & No Signup | 30tools",
		description: "Format and prettify your CSS code instantly with our free online CSS Beautifier. Improve code readability, fix indentation, and organize your stylesheets for better maintenance. Fast and secure. 100% free, fast, and no signup required.",
		url: "https://30tools.com/css-beautifier",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free CSS Beautifier Online – Fast & No Signup | 30tools",
		description: "Format and prettify your CSS code instantly with our free online CSS Beautifier. Improve code readability, fix indentation, and organize your stylesheets for better maintenance. Fast and secure. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "css-beautifier",
        "name": "CSS Beautifier",
        "description": "Format and prettify your CSS code instantly with our free online CSS Beautifier. Improve code readability, fix indentation, and organize your stylesheets for better maintenance. Fast and secure.",
        "route": "/css-beautifier",
        "extraSlugs": [
                "beautify-css",
                "compress-css-online",
                "compress-html-css-js",
                "css-beautifier-tool",
                "css-box-shadow",
                "css-formatter",
                "css-gradient-maker",
                "css-optimizer-online",
                "css-shadow-maker",
                "format-html-css-js",
                "free-css-beautifier-online",
                "json-beautifier",
                "make-css-gradients",
                "minify-css-file",
                "reduce-css-size",
                "online-css-formatter"
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
						url: "https://30tools.com/css-beautifier",
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
