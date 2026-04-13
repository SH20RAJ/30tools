import ToolContent from "@/components/shared/ToolContent";
import ToolLayout from "@/components/shared/ToolLayout";
import MarkdownToText from "@/components/tools/text/MarkdownToText";
import { getAllTools } from "@/constants/tools-utils";

const TOOL_ID = "markdown-to-text";
const tool = getAllTools().find((t) => t.id === TOOL_ID);

export const metadata = {
	title:
		"Free AI-to-Text Converter (Markdown Stripper) Online - No Signup | 30tools",
	description:
		"Clean up AI-generated content from ChatGPT, Claude, and Grok. Convert Markdown into clean, readable plain text instantly. Perfect for emails and social sharing.",
	robots: { index: true, follow: true },
};

export default async function MarkdownToTextPage({ searchParams }) {
	const params = await searchParams;
	const _lang = params.lang || "en";

	if (!tool) return null;

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		name: tool.name,
		description: tool.description,
		applicationCategory: "TextManipulation",
		operatingSystem: "All",
		offers: {
			"@type": "Offer",
			price: "0",
			priceCurrency: "USD",
		},
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<ToolLayout
				toolId={tool.id}
				title={tool.seoTitle || tool.name}
				description={tool.seoDescription || tool.description}
				category={{ name: "Text Tools", slug: "text" }}
			>
				<div className="space-y-16">
					<section id="tool" className="relative pt-4">
						<div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-[3rem] blur-3xl opacity-30 -z-10" />
						<MarkdownToText />
					</section>

					<section id="content" className="border-t border-border/40 pt-16">
						<ToolContent toolId="markdown-to-text" />
					</section>
				</div>
			</ToolLayout>
		</>
	);
}
