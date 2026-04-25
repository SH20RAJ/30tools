import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free JavaScript Beautifier Online – Fast & No Signup | 30tools",
	description: "Format and prettify your JavaScript code instantly. Our free online JS Beautifier improves code readability, fixes indentation, and helps you understand complex scripts easily. 100% free, fast, and no signup required.",
	keywords: "javascript beautifier, free javascript beautifier, online javascript beautifier, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/javascript-beautifier",
	},
	openGraph: {
		title: "Free JavaScript Beautifier Online – Fast & No Signup | 30tools",
		description: "Format and prettify your JavaScript code instantly. Our free online JS Beautifier improves code readability, fixes indentation, and helps you understand complex scripts easily. 100% free, fast, and no signup required.",
		url: "https://30tools.com/javascript-beautifier",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JavaScript Beautifier Online – Fast & No Signup | 30tools",
		description: "Format and prettify your JavaScript code instantly. Our free online JS Beautifier improves code readability, fixes indentation, and helps you understand complex scripts easily. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "javascript-beautifier",
        "name": "JavaScript Beautifier",
        "description": "Format and prettify your JavaScript code instantly. Our free online JS Beautifier improves code readability, fixes indentation, and helps you understand complex scripts easily.",
        "route": "/javascript-beautifier",
        "extraSlugs": [
                "free-javascript-beautifier-online",
                "javascript-beautifier-tool",
                "obfuscate-javascript",
                "prettify-js-code-online"
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
						url: "https://30tools.com/javascript-beautifier",
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
