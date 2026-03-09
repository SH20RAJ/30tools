import {
	FAQSection,
	QuickActions,
	RelatedTools,
	UserComments,
} from "@/components/seo";
import {
	GeneratorToolExamples,
	GeneratorToolFeatures,
} from "@/components/seo/GeneratorToolsHub";
import SeoAnalyzer from "@/components/tools/seo/SeoAnalyzer";
import { generateToolJsonLd, generateToolMetadata } from "@/lib/seo-helper";

export const metadata = generateToolMetadata("seo-audit-tool", "seo", {
	title: "SEO Audit Tool | Free Website SEO Checker | 30Tools",
	description:
		"Run a full SEO audit to uncover technical, on-page, and performance issues that affect search visibility.",
	image: "/og-images/seo-audit-tool.jpg",
});

const jsonLd = generateToolJsonLd("seo-audit-tool", "seo", {
	name: "SEO Audit Tool",
	description:
		"Run a full SEO audit to uncover technical, on-page, and performance issues that affect search visibility.",
});

export default function SeoAuditToolPage() {
	const toolData = {
		id: "seo-audit-tool",
		name: "SEO Audit Tool",
		description: "Complete website health check",
		category: "seo",
		route: "/seo-audit-tool",
	};

	const features = [
		"On-Page SEO Analysis",
		"Technical SEO Check",
		"Mobile Optimization Score",
		"Page Speed Insights",
		"Core Web Vitals Assessment",
		"Meta Tags Verification",
		"Internal Link Analysis",
		"Downloadable PDF Report",
	];

	const examples = [
		{
			title: "Technical Health",
			description: "Find crawling issues",
			input: "Your URL",
			output: "Identifies robots.txt or sitemap errors",
		},
		{
			title: "Content Optimization",
			description: "Check keyword usage",
			input: "Blog Post URL",
			output: "Missing H1, poor keyword density alerts",
		},
		{
			title: "Speed Check",
			description: "Analyze load times",
			input: "Landing Page URL",
			output: "LCP, FID, CLS metrics and fixes",
		},
	];

	const faqs = [
		{
			question: "What does the SEO score mean?",
			answer:
				"The score (0-100) represents the overall health of your page based on Google's ranking factors. A higher score means better optimization.",
		},
		{
			question: "How do I fix the errors found?",
			answer:
				"Each error comes with a 'How to Fix' guide. Simply follow the actionable steps provided in the audit report.",
		},
		{
			question: "Is this tool compatible with all websites?",
			answer:
				"Yes, our SEO Audit Tool works with any publicly accessible website, including WordPress, Shopify, Wix, and custom-coded sites.",
		},
	];

	const relatedTools = [
		{
			id: "keyword-research-tool",
			name: "Keyword Research Tool",
			description: "Find SEO keywords",
			route: "/keyword-research-tool",
			category: "seo",
		},
		{
			id: "backlink-checker",
			name: "Backlink Checker",
			description: "Check inbound links",
			route: "/backlink-checker",
			category: "seo",
		},
		{
			id: "page-speed-test",
			name: "Page Speed Test",
			description: "Analyze site speed",
			route: "/page-speed-test",
			category: "seo",
		},
	];

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<div className="min-h-screen bg-background">
				<div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
					<div className="text-center space-y-4 mb-12">
						<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
							Free <span className="text-primary">SEO Audit Tool</span>
						</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Get a comprehensive SEO score and actionable checklist to improve
							your website's ranking.
						</p>
						<QuickActions
							toolName="SEO Audit Tool"
							toolUrl="https://30tools.com/seo-audit-tool"
							showBookmark={true}
							showShare={true}
						/>
					</div>

					{/* Tool Interface */}
					<div className="mb-20">
						<SeoAnalyzer type="audit" title="Run Audit" />
					</div>

					{/* Content Sections */}
					<GeneratorToolFeatures tool={toolData} features={features} />
					<GeneratorToolExamples
						tool={toolData}
						examples={examples}
						title="Website Optimization Checks"
					/>

					<div className="mb-20">
						<FAQSection
							faqs={faqs}
							title="SEO Audit FAQ"
							categoryTitle="Website Optimization"
							variant="accordion"
							showSchema={true}
						/>
					</div>

					<div className="mb-20">
						<RelatedTools
							currentTool="seo-audit-tool"
							category="seo"
							tools={relatedTools}
							title="More Optimization Tools"
						/>
					</div>

					<UserComments
						toolId="seo-audit-tool"
						toolName="SEO Audit Tool"
						showStats={true}
						allowComments={true}
					/>
				</div>
			</div>
		</>
	);
}
