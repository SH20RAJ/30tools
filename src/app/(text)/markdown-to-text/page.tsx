import ToolLayout from "@/components/tools/shared/ToolLayout";
import MarkdownToText from "@/components/tools/text/MarkdownToText";


export const metadata = {
	title: "Free Markdown to Text Online – Fast & No Signup | 30tools",
	description: "Convert Markdown formatted text to clean plain text instantly. Perfect for cleaning up content from ChatGPT, Claude, and GitHub. 100% free, fast, and no signup required.",
	keywords: "markdown to text, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/markdown-to-text",
	},
	openGraph: {
		title: "Free Markdown to Text Online – Fast & No Signup | 30tools",
		description: "Convert Markdown formatted text to clean plain text instantly. Perfect for cleaning up content from ChatGPT, Claude, and GitHub. 100% free, fast, and no signup required.",
		url: "https://30tools.com/markdown-to-text",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Markdown to Text Online – Fast & No Signup | 30tools",
		description: "Convert Markdown formatted text to clean plain text instantly. Perfect for cleaning up content from ChatGPT, Claude, and GitHub. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "markdown-to-text",
        "name": "Markdown to Text",
        "description": "Convert Markdown formatted text to clean plain text instantly. Perfect for cleaning up content from ChatGPT, Claude, and GitHub.",
        "route": "/markdown-to-text",
        "extraSlugs": [
                "markdown-to-plain-text",
                "remove-markdown-formatting",
                "md-to-txt-converter"
        ],
        "popular": false,
        "category": "text"
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
						url: "https://30tools.com/markdown-to-text",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "text" }}>
				<MarkdownToText />
			</ToolLayout>
		</>
	);
}
