import BreadcrumbsEnhanced from "@/components/seo/BreadcrumbsEnhanced";
import { RelatedTools } from "@/components/seo/SocialEngagement";
import SeoOpportunityContent from "@/components/seo/SeoOpportunityContent";
import StructuredData from "@/components/shared/StructuredData";
import DownloadDisclaimer from "@/components/shared/DownloadDisclaimer";
import {
	ToolFAQ,
	ToolFeatures,
	ToolSteps,
	ToolTrust,
} from "./ToolSharedComponents";
import { getDynamicSEOContent } from "./seoTemplates";
import { getRelatedTools } from "@/lib/tools";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SITE_CONFIG } from "@/constants/config";
import AdPlacement from "@/components/ads/AdPlacement";
import { getSeoOpportunityByRoute } from "@/data/seo-opportunities";

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
							<h2
								key={i}
								className="text-3xl md:text-5xl font-extrabold tracking-tight mt-16 mb-8 text-foreground"
							>
								{line.replace("## ", "")}
							</h2>
						);
					}
					if (line.startsWith("### ")) {
						return (
							<h3
								key={i}
								className="text-2xl md:text-3xl font-bold tracking-tight mt-12 mb-6 text-foreground/90"
							>
								{line.replace("### ", "")}
							</h3>
						);
					}
					if (line.startsWith("- ")) {
						return (
							<li
								key={i}
								className="text-lg text-muted-foreground ml-6 list-disc"
							>
								{line.replace("- ", "")}
							</li>
						);
					}
					if (line.trim() === "") return <div key={i} className="h-4" />;
					return (
						<p
							key={i}
							className="text-xl text-muted-foreground leading-relaxed"
						>
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
  showHireMe = false,
}) {
	const opportunity = getSeoOpportunityByRoute(tool.route);

	// Dynamically enrich tool data if SEO content is missing
	const enrichedTool = { ...tool };
	if (
		!enrichedTool.features ||
		!enrichedTool.faqs ||
		!enrichedTool.howTo ||
		!enrichedTool.article
	) {
		const dynamicContent = getDynamicSEOContent(tool);
		if (!enrichedTool.features) enrichedTool.features = dynamicContent.features;
		if (!enrichedTool.howTo) enrichedTool.howTo = dynamicContent.howTo;
		if (!enrichedTool.faqs) enrichedTool.faqs = dynamicContent.faqs;
		if (!enrichedTool.article) enrichedTool.article = dynamicContent.article;
	}

	if (opportunity) {
		enrichedTool.name = opportunity.h1;
		enrichedTool.description = opportunity.intro;
		enrichedTool.faqs = opportunity.faqs;
		enrichedTool.howTo = {
			name: `How to use ${opportunity.h1}`,
			steps: opportunity.steps.map((text, index) => ({
				name: `Step ${index + 1}`,
				text,
			})),
		};
	}

	// Replace ${name} placeholders in the enriched data
	const toolName = enrichedTool.name;
	if (enrichedTool.article) {
		enrichedTool.article = enrichedTool.article.replace(/\${name}/g, toolName);
	}
	if (enrichedTool.features) {
		enrichedTool.features = enrichedTool.features.map(f => f.replace(/\${name}/g, toolName));
	}
	if (enrichedTool.faqs) {
		enrichedTool.faqs = enrichedTool.faqs.map(faq => ({
			question: faq.question.replace(/\${name}/g, toolName),
			answer: faq.answer.replace(/\${name}/g, toolName),
		}));
	}
	if (enrichedTool.howTo) {
		enrichedTool.howTo = {
			...enrichedTool.howTo,
			name: enrichedTool.howTo.name?.replace(/\${name}/g, toolName),
			steps: enrichedTool.howTo.steps?.map(s => ({
				...s,
				name: s.name.replace(/\${name}/g, toolName),
				text: s.text.replace(/\${name}/g, toolName),
			})),
		};
	}

	// Company pages (privacy, terms, about) don't need tool-specific sections
	const isCompanyPage = tool.category === "company";

	// Ensure at least 10 related tools (skip for company pages)
	const finalRelatedTools = isCompanyPage
		? []
		: relatedTools.length < 10
			? getRelatedTools(tool, 15) // Get more than 10 to be safe
			: relatedTools;

	const defaultSuffix =
		" Fast and privacy-conscious. Data handling depends on the tool and is documented on each page.";
	const finalDescription = String(enrichedTool.description || "").trim();

	return (
		<div className="min-h-screen bg-background text-foreground selection:bg-primary/20 ambient-glow">
			<StructuredData tool={enrichedTool} />
			<div className="container mx-auto px-4 pt-8">
				<BreadcrumbsEnhanced
					customBreadcrumbs={breadcrumbs}
					suppressSchema={true}
				/>
			</div>

			<main className="container mx-auto px-4 py-10 md:py-14 max-w-6xl space-y-16">
				<section className="text-center space-y-6 max-w-4xl mx-auto animate-in pt-4">
					<h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight bg-gradient-to-b from-foreground to-foreground/70">
						{enrichedTool.name}
					</h1>
					<p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
						{finalDescription}
						{!finalDescription.toLowerCase().includes("privacy")
							? defaultSuffix
							: ""}
					</p>
					
				</section>

				<div className="max-w-4xl mx-auto">
					<AdPlacement placement="after-hero" category={tool.category} slug={tool.id} />
				</div>

				{/* Copyright Disclaimer for Downloaders */}
				{tool.category === "downloaders" && (
					<DownloadDisclaimer platformName={tool.name.replace(/ downloader$/i, "").replace(/ download$/i, "")} />
				)}

				{/* Tool Interaction Area */}
				<section className="bg-card/30 backdrop-blur-md border border-border/40 rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] dark:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] relative group transition-all duration-500 hover:border-primary/20 min-h-[400px] overflow-hidden">
					<div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] -z-10 transition-opacity" />
					<div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 blur-[120px] -z-10 transition-opacity" />
					<div className="relative z-10 p-6 md:p-8">{children}</div>
				</section>

				{!isCompanyPage && (
					<>
						<div className="max-w-4xl mx-auto">
							<AdPlacement placement="after-tool" category={tool.category} slug={tool.id} />
						</div>

						{/* Downloader Legal Disclaimer - visible below tool */}
						{tool.category === "downloaders" && (
							<section className="max-w-4xl mx-auto space-y-4">
								<h2 className="text-2xl font-bold tracking-tight">Legal Notice</h2>
								<p className="text-muted-foreground leading-relaxed">
									This tool is intended for downloading non-copyrighted, personal, or openly licensed content only.
									30tools does not host, store, or distribute copyrighted media. Users are solely responsible for
									ensuring they have the legal right to download any content. By using this tool, you agree to our{" "}
									<Link href="/terms" className="text-primary underline">Terms of Use</Link> and{" "}
									<Link href="/dmca" className="text-primary underline">DMCA Policy</Link>.
								</p>
							</section>
						)}

						{/* Contribution Notice - below fold */}
						<section className="text-center space-y-4 max-w-2xl mx-auto p-8 border border-dashed rounded-2xl bg-primary/5" style={{ contentVisibility: "auto", containIntrinsicSize: "auto 200px" }}>
							<h3 className="text-lg font-bold">Tool not working or missing something?</h3>
							<p className="text-sm text-muted-foreground">
								This tool is open-source and community-driven. If you find a bug, have a feature request,
								or want to contribute a new tool, please create a PR on GitHub or contact us.
							</p>
							<div className="flex flex-wrap items-center justify-center gap-4">
								<Button variant="outline" size="sm" asChild className="gap-2">
									<a href="https://github.com/sh20raj/30tools" target="_blank" rel="noreferrer">
										<Github className="h-4 w-4" />
										Contribute on GitHub
									</a>
								</Button>
								<Button variant="ghost" size="sm" asChild className="gap-2">
									<a href="mailto:mail@30tools.com">
										mail@30tools.com
									</a>
								</Button>
							</div>
						</section>

						{/* Trust indicators - defer rendering (generic boilerplate) */}
						<div style={{ contentVisibility: "auto", containIntrinsicSize: "auto 600px" }}>
							<ToolTrust />
						</div>

						{/* SEO Content - fully server-rendered for crawlers */}
						<div className="space-y-16">
							<div className="max-w-4xl mx-auto">
								<AdPlacement placement="in-content" category={tool.category} slug={tool.id} />
							</div>
							
							<ToolArticle content={enrichedTool.article} />

							{opportunity && (
								<SeoOpportunityContent opportunity={opportunity} />
							)}

							<div className="grid grid-cols-1 gap-16">
								<ToolFeatures features={enrichedTool.features} />
								<ToolSteps
									steps={enrichedTool.howTo?.steps}
									toolName={enrichedTool.name}
								/>
								<ToolFAQ faqs={enrichedTool.faqs} toolName={enrichedTool.name} />
							</div>
						</div>

						<div className="h-16" >
							<p className="text-base text-muted-foreground/70 max-w-xl mx-auto">
								Part of 30tools — {SITE_CONFIG.toolCountString} free online tools for image, PDF, video,
								audio, text, SEO, and developer workflows. No registration required.
							</p>
							<div className="flex items-center justify-center gap-2 pt-2">
								<a
									href="https://github.com/sh20raj/30tools"
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-bold uppercase tracking-widest text-primary/60 hover:bg-primary/10 transition-colors"
								>
									<Github className="h-3 w-3" />
									We are Open Source
								</a>
							</div>
						</div>

{showHireMe && (
  <section className="max-w-3xl mx-auto">
    <div className="rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8 space-y-4">
      <h3 className="text-xl md:text-2xl font-bold">Need a custom tool like this?</h3>
      <p className="text-muted-foreground">
        I build fast SEO tools, calculators, PDF utilities, automations, and landing pages for startups and businesses.
      </p>
      <Button asChild>
        <Link href="https://sh20raj.github.io/" rel="noopener noreferrer" className="inline-flex items-center gap-2">
          Hire me
          <ExternalLink className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  </section>
)}
<div className="max-w-4xl mx-auto">
  <AdPlacement placement="footer" category={tool.category} slug={tool.id} />
</div>

{finalRelatedTools.length > 0 && (
  <div style={{ contentVisibility: "auto", containIntrinsicSize: "auto 800px" }}>
    <RelatedTools
      currentTool={tool.id}
      category={tool.category}
      tools={finalRelatedTools}
    />
  </div>
)}
</>
				)}
			</main>
		</div>
	);
}
