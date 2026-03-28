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

export const metadata = generateToolMetadata("backlink-checker", "seo", {
	title: "Backlink Checker | Free Inbound Link Analysis Tool | 30Tools",
	description:
		"Check backlinks for any website, review referring domains, and analyze link quality for SEO research.",
	image: "/og-images/backlink-checker.jpg",
});

const jsonLd = generateToolJsonLd("backlink-checker", "seo", {
	name: "Backlink Checker",
	description:
		"Check backlinks for any website, review referring domains, and analyze link quality for SEO research.",
});

export default async function BacklinkCheckerPage({ searchParams }) {
	const params = await searchParams;
	const lang = params.lang || "en";
	const toolData = {
		id: "backlink-checker",
		name: "Backlink Checker",
		description: "Analyze website authority and links",
		category: "seo",
		route: "/backlink-checker",
	};

	const features = [
		"Check Total Backlinks Count",
		"Analyze Referring Domains",
		"Identify Dofollow vs Nofollow",
		"View Anchor Text Distribution",
		"Check Competitor Backlinks",
		"Domain Authority Metrics",
		"Spam Score Detection",
		"Export Reports to PDF",
	];

	const examples = [
		{
			title: "Competitor Spy",
			description: "Steal link strategies",
			input: "Competitor URL",
			output: "List of their top backlinks",
		},
		{
			title: "Audit Your Site",
			description: "Find lost links",
			input: "Your Domain",
			output: "Broken and lost link report",
		},
		{
			title: "Link Building",
			description: "Find opportunities",
			input: "Niche Blog URL",
			output: "Guest post potential",
		},
	];

	const faqs = [
		{
			question: "Why are backlinks important?",
			answer:
				"Backlinks are one of the top ranking factors for Google. They act as 'votes of confidence' from other websites, signaling authority and trust.",
		},
		{
			question: "How often are the backlink data updated?",
			answer:
				"Our database is updated daily to provide the most recent snapshot of your link profile.",
		},
		{
			question: "Can I check backlinks for any website?",
			answer:
				"Yes, you can analyze your own website or any competitor's domain publicly available on the web.",
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
			id: "seo-audit-tool",
			name: "SEO Audit Tool",
			description: "Full site analysis",
			route: "/seo-audit-tool",
			category: "seo",
		},
		{
			id: "bulk-keyword-rank-checker",
			name: "Rank Checker",
			description: "Check keyword positions",
			route: "/bulk-keyword-rank-checker",
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
							Free <span className="text-primary">Backlink Checker</span>
						</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Analyze your website's backlink profile, spy on competitors, and
							improve your Off-Page SEO.
						</p>
						<QuickActions
							toolName="Backlink Checker"
							toolUrl="https://30tools.com/backlink-checker"
							showBookmark={true}
							showShare={true}
						/>
					</div>

					{/* Tool Interface */}
					<div className="mb-20">
						<SeoAnalyzer type="backlink" title="Check Backlinks" />
					</div>

					{/* Content Sections */}
					<GeneratorToolFeatures tool={toolData} features={features} />
					<GeneratorToolExamples
						tool={toolData}
						examples={examples}
						title="Backlink Analysis Use Cases"
					/>

					<div className="mb-20">
						<FAQSection
							faqs={faqs}
							title="Backlink Checker FAQ"
							categoryTitle="Link Building"
							variant="accordion"
							showSchema={true}
						/>
					</div>

					<div className="mb-20">
						<RelatedTools
							currentTool="backlink-checker"
							category="seo"
							tools={relatedTools}
							title="More SEO Tools"
						/>
					</div>

					<UserComments
						toolId="backlink-checker"
						toolName="Backlink Checker"
						showStats={true}
						allowComments={true}
					/>
				</div>
			</div>
		</>
	);
}
