import { BreadcrumbsEnhanced, RelatedTools } from "@/components/seo";
import {
	ToolFAQ,
	ToolFeatures,
	ToolSteps,
	ToolTrust,
} from "./ToolSharedComponents";

/**
 * @typedef {Object} Tool
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {string} [category]
 * @property {string[]} [features]
 * @property {Object} [howTo]
 * @property {Object[]} [howTo.steps]
 * @property {Object[]} [faqs]
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
	children, // The actual tool interactive part
	breadcrumbs,
	relatedTools = [],
}) {
	return (
		<div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
			<div className="container mx-auto px-4 pt-6">
				<BreadcrumbsEnhanced customBreadcrumbs={breadcrumbs} />
			</div>

			<main className="container mx-auto px-4 py-12 max-w-6xl space-y-24">
				{/* Hero Section */}
				<section className="text-center space-y-6 max-w-4xl mx-auto">
					<h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
						{tool.name}
					</h1>
					<p className="text-xl text-muted-foreground leading-relaxed">
						{tool.description} Fast, secure, and free online tool.
					</p>
				</section>

				{/* Tool Interaction Area */}
				<section className="bg-card border border-border/50 rounded-[2.5rem] p-4 md:p-12 shadow-2xl shadow-primary/5 relative overflow-hidden">
					<div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10 rounded-full" />
					<div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 blur-[100px] -z-10 rounded-full" />
					{children}
				</section>

				{/* Trust & SEO Content */}
				<ToolTrust />

				<div className="grid grid-cols-1 gap-24">
					<ToolFeatures features={tool.features} />
					<ToolSteps steps={tool.howTo?.steps} toolName={tool.name} />
					<ToolFAQ faqs={tool.faqs} toolName={tool.name} />
				</div>

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
