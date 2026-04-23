import ToolLayout from "@/components/tools/shared/ToolLayout";
import MarkdownToText from "@/components/tools/text/MarkdownToText";

export const metadata = {
	title: "Free Markdown to Text Converter Online - No Signup | 30tools",
	description:
		"Convert Markdown formatted text to clean plain text instantly. Perfect for cleaning up content from ChatGPT, Claude, and GitHub. 100% free, no signup required.",
	keywords:
		"markdown to text, markdown to plain text, remove markdown formatting, md to txt converter, 30tools",
	alternates: {
		canonical: "https://30tools.com/markdown-to-text",
	},
	openGraph: {
		title: "Free Markdown to Text Converter Online - No Signup | 30tools",
		description:
			"Convert Markdown formatted text to clean plain text instantly. Perfect for cleaning up content from ChatGPT, Claude, and GitHub. 100% free, no signup required.",
		url: "https://30tools.com/markdown-to-text",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Markdown to Text Converter Online - No Signup | 30tools",
		description:
			"Convert Markdown formatted text to clean plain text instantly. Perfect for cleaning up content from ChatGPT, Claude, and GitHub. 100% free, no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "markdown-to-text",
		name: "Markdown to Text",
		description:
			"Convert Markdown formatted text to clean plain text instantly. Perfect for cleaning up content from ChatGPT, Claude, and GitHub.",
		route: "/markdown-to-text",
		extraSlugs: [
			"markdown-to-plain-text",
			"remove-markdown-formatting",
			"md-to-txt-converter",
		],
		popular: true,
		category: "text",
	};

	const breadcrumbs = [
		{
			name: "Text Tools",
			url: "/text-tools",
		},
		{
			name: "Markdown to Text",
			url: "/markdown-to-text",
		},
	];

	const relatedTools = [
		{
			id: "text-sorter",
			name: "Text Sorter",
			description:
				"Free text sorter tool to process your data instantly with privacy-friendly browser-based workflows.",
			route: "/text-sorter",
			category: "text",
		},
		{
			id: "word-counter",
			name: "Word Counter",
			description:
				"Free word counter tool to process your data instantly with privacy-friendly browser-based workflows.",
			route: "/word-counter",
			category: "text",
		},
		{
			id: "remove-line-breaks",
			name: "Remove Line Breaks",
			description:
				"Free remove line breaks tool to process your data instantly with privacy-friendly browser-based workflows.",
			route: "/remove-line-breaks",
			category: "text",
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
						name: "Markdown to Text",
						description:
							"Convert Markdown formatted text to clean plain text instantly. Perfect for cleaning up content from ChatGPT, Claude, and GitHub.",
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
				relatedTools={relatedTools}
			>
				<MarkdownToText />
			</ToolLayout>
		</>
	);
}
