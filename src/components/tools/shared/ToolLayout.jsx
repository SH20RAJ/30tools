import { BreadcrumbsEnhanced, RelatedTools } from "@/components/seo";
import StructuredData from "@/components/shared/StructuredData";
import {
	ToolFAQ,
	ToolFeatures,
	ToolSteps,
	ToolTrust,
} from "./ToolSharedComponents";
import VariantLinks from "./VariantLinks";
import { getDynamicSEOContent } from "./seoTemplates";

function ToolArticle({ content }) {
	if (!content) return null;

	// Simple markdown-like parser for the templates
	const lines = content.trim().split("\n");
	return (
		<section className="scroll-mt-24 prose prose-invert max-w-none">
			<div className="space-y-8">
				{lines.map((line, i) => {
					if (line.startsWith("## ")) {
						return (
							<h2 key={i} className="text-3xl md:text-5xl font-extrabold tracking-tight mt-16 mb-8 text-foreground">
								{line.replace("## ", "")}
							</h2>
						);
					}
					if (line.startsWith("### ")) {
						return (
							<h3 key={i} className="text-2xl md:text-3xl font-bold tracking-tight mt-12 mb-6 text-foreground/90">
								{line.replace("### ", "")}
							</h3>
						);
					}
					if (line.startsWith("- ")) {
						return (
							<li key={i} className="text-lg text-muted-foreground ml-6 list-disc">
								{line.replace("- ", "")}
							</li>
						);
					}
					if (line.trim() === "") return <div key={i} className="h-4" />;
					return (
						<p key={i} className="text-xl text-muted-foreground leading-relaxed">
							{line}
						</p>
					);
				})}
			</div>
		</section>
	);
}

/**
 * @typedef {Object} Tool
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {string} [category]
 * @property {string[]} [extraSlugs]
 * @property {string[]} [features]
 * @property {Object} [howTo]
 * @property {Object[]} [howTo.steps]
 * @property {Object[]} [faqs]
 * @property {string} [article]
 */

/**
 * @param {Object} props
 * @param {Tool} props.tool
 * @param {React.ReactNode} props.children
 * @param {Object[]} [props.breadcrumbs]
 * @param {Tool[]} [props.relatedTools]
 */
export default function ToolLayout({
	tool,
	children,
	breadcrumbs,
	relatedTools = [],
}) {
	// Dynamically enrich tool data if SEO content is missing
	const enrichedTool = { ...tool };
	if (!enrichedTool.features || !enrichedTool.faqs || !enrichedTool.howTo || !enrichedTool.article) {
		const dynamicContent = getDynamicSEOContent(tool);
		if (!enrichedTool.features) enrichedTool.features = dynamicContent.features;
		if (!enrichedTool.howTo) enrichedTool.howTo = dynamicContent.howTo;
		if (!enrichedTool.faqs) enrichedTool.faqs = dynamicContent.faqs;
		if (!enrichedTool.article) enrichedTool.article = dynamicContent.article;
	}

	return (
		<div className="min-h-screen bg-background text-foreground selection:bg-primary/20 ambient-glow">
			<StructuredData tool={enrichedTool} />
			<div className="container mx-auto px-4 pt-8">
				<BreadcrumbsEnhanced 
					customBreadcrumbs={breadcrumbs} 
					suppressSchema={true}
				/>
			</div>

			<main className="container mx-auto px-4 py-16 max-w-6xl space-y-32">
				{/* Hero Section */}
				<section className="text-center space-y-8 max-w-4xl mx-auto animate-in">
					<h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight bg-gradient-to-b from-foreground to-foreground/70">
						{enrichedTool.name}
					</h1>
					<p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
						{enrichedTool.description}
						{!String(enrichedTool.description || "").includes("privacy-friendly browser-based workflows")
							? " Runs in your browser with no signup."
							: " Free online utility — fast, private, and built for real workflows."}
					</p>
				</section>

				{/* Tool Interaction Area */}
				<section className="bg-card border border-border/60 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] dark:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.4)] relative group transition-all duration-500 hover:border-primary/20">
					<div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] -z-10 sition-opacity" />
					<div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 blur-[120px] -z-10 sition-opacity" />
					<div className="relative z-10">{children}</div>
				</section>

				{/* Trust & SEO Content */}
				<div className="space-y-32">
					<ToolTrust />
					<ToolArticle content={enrichedTool.article} />

					<div className="grid grid-cols-1 gap-32">
						<ToolFeatures features={enrichedTool.features} />
						<ToolSteps steps={enrichedTool.howTo?.steps} toolName={enrichedTool.name} />
						<ToolFAQ faqs={enrichedTool.faqs} toolName={enrichedTool.name} />
					</div>
				</div>

				{/* Internal Link Sculpting Segment */}
				<VariantLinks extraSlugs={tool.extraSlugs} toolName={tool.name} />

				{relatedTools.length > 0 && (
					<RelatedTools
						currentTool={tool.id}
						category={tool.category}
						tools={relatedTools}
					/>
				)}
			</main>
		</div>
	);
}
