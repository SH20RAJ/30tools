import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolPlaceholderPage from "@/components/tools/ToolPlaceholderPage";

export const metadata = {
	title: "Free AI-to-Text Converter (Markdown Stripper) Online - No Signup | 30tools",
	description: "Clean up AI-generated content from ChatGPT, Claude, and Grok. Convert Markdown into clean, readable plain text instantly. Perfect for emails and social sharing.",
	keywords: "ai-to-text converter (markdown stripper), free online tool, no signup, text, ai-to-text converter (markdown stripper) online, 30tools",
	alternates: {
		canonical: "https://30tools.com/markdown-to-text",
	},
	openGraph: {
		title: "Free AI-to-Text Converter (Markdown Stripper) Online - No Signup | 30tools",
		description: "Clean up AI-generated content from ChatGPT, Claude, and Grok. Convert Markdown into clean, readable plain text instantly. Perfect for emails and social sharing.",
		url: "https://30tools.com/markdown-to-text",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free AI-to-Text Converter (Markdown Stripper) Online - No Signup | 30tools",
		description: "Clean up AI-generated content from ChatGPT, Claude, and Grok. Convert Markdown into clean, readable plain text instantly. Perfect for emails and social sharing.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		"id": "markdown-to-text",
		"name": "AI-to-Text Converter (Markdown Stripper)",
		"description": "Clean up AI-generated content from ChatGPT, Claude, and Grok. Convert Markdown into clean, readable plain text instantly. Perfect for emails and social sharing.",
		"route": "/markdown-to-text",
		"extraSlugs": [
				"add-text-to-pdf",
				"ai-text-rewriter",
				"alt-text-checker",
				"beautify-text",
				"calculate-text-complexity",
				"calculate-text-length",
				"capitalize-text-online",
				"chatgpt-text-converter",
				"clean-markdown-text",
				"clean-up-text-from-chatgpt-markdown",
				"convert-markdown-to-plain-text",
				"deduplicate-text-online",
				"delete-duplicate-text",
				"encrypt-text-online",
				"extract-links-from-text",
				"extract-text-from-pdf",
				"fake-text-message-maker",
				"filler-text-maker",
				"filter-emails-from-text",
				"find-emails-in-text",
				"find-text-differences",
				"fix-text-spacing",
				"format-text-online",
				"generate-images-from-text",
				"generate-placeholder-text",
				"humanize-chatgpt-text",
				"instagram-fancy-text",
				"listen-to-text",
				"make-ai-text-human",
				"markdown-parser-online",
				"markdown-to-html",
				"markdown-to-plain-text",
				"pdf-to-text-converter",
				"read-text-aloud",
				"remove-markdown-formatting",
				"render-markdown-html",
				"seo-text-analyzer",
				"strip-markdown-online",
				"strip-markdown-syntax",
				"text-analysis-tool",
				"text-case-converter",
				"text-cleaner-tool",
				"text-comparison-tool",
				"text-diff",
				"text-formatter",
				"text-to-image-ai",
				"text-to-speech-ai",
				"text-tools"
		],
		"popular": true,
		"category": "text"
};
	const breadcrumbs = [
		{
			name: "Text Tools",
			url: "/text-tools",
		},
		{
			name: "AI-to-Text Converter (Markdown Stripper)",
			url: "/markdown-to-text",
		},
	];

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: "AI-to-Text Converter (Markdown Stripper)",
						description: "Clean up AI-generated content from ChatGPT, Claude, and Grok. Convert Markdown into clean, readable plain text instantly. Perfect for emails and social sharing.",
						url: "https://30tools.com/markdown-to-text",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout
				tool={tool}
				breadcrumbs={breadcrumbs}
			>
				<ToolPlaceholderPage toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
