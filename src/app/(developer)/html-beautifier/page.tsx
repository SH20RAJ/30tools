import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free HTML Beautifier Online – Fast & No Signup | 30tools",
	description: "Format and prettify your HTML code instantly. Our free online HTML Beautifier fixes indentation, improves readability, and cleans up messy markup for better web development. 100% free, fast, and no signup required.",
	keywords: "html beautifier, free html beautifier, online html beautifier, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/html-beautifier",
	},
	openGraph: {
		title: "Free HTML Beautifier Online – Fast & No Signup | 30tools",
		description: "Format and prettify your HTML code instantly. Our free online HTML Beautifier fixes indentation, improves readability, and cleans up messy markup for better web development. 100% free, fast, and no signup required.",
		url: "https://30tools.com/html-beautifier",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free HTML Beautifier Online – Fast & No Signup | 30tools",
		description: "Format and prettify your HTML code instantly. Our free online HTML Beautifier fixes indentation, improves readability, and cleans up messy markup for better web development. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "html-beautifier",
        "name": "HTML Beautifier",
        "description": "Format and prettify your HTML code instantly. Our free online HTML Beautifier fixes indentation, improves readability, and cleans up messy markup for better web development.",
        "route": "/html-beautifier",
        "extraSlugs": [
                "check-html-markup",
                "check-html-syntax",
                "free-html-beautifier-online",
                "html-beautifier-tool",
                "html-validator",
                "validate-html-online",
                "w3c-html-validation-alternative",
                "prettify-html-code-online"
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
						url: "https://30tools.com/html-beautifier",
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
