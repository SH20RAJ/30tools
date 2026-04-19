import { BreadcrumbsEnhanced, RelatedTools } from "@/components/seo";
import StructuredData from "@/components/shared/StructuredData";
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
		<div className="min-h-screen bg-background text-foreground selection:bg-primary/20 ambient-glow">
			<StructuredData tool={tool} />
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
						{tool.name}
					</h1>
					<p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
						{tool.description}
						{!String(tool.description || "").includes("privacy-friendly browser-based workflows")
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

					<div className="grid grid-cols-1 gap-32">
						<ToolFeatures features={tool.features} />
						<ToolSteps steps={tool.howTo?.steps} toolName={tool.name} />
						<ToolFAQ faqs={tool.faqs} toolName={tool.name} />
					</div>
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
