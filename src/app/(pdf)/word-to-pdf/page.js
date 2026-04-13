import { FileSignature, Scale, ShieldAlert } from "lucide-react";
import { generateToolMetadata } from "@/lib/seo-helper";
import Link from "next/link";
import {
	BreadcrumbsEnhanced,
	FAQSection,
	QuickActions,
	RelatedTools,
	ReviewSnippets,
	UserComments,
} from "@/components/seo";
import {
	GeneratorToolExamples,
	GeneratorToolFeatures,
} from "@/components/seo/GeneratorToolsHub";
import WordToPDFTool from "@/components/tools/pdf/WordToPDFTool";
import { getPdfToolFAQs } from "@/constants/seo/pdf-faqs";

export const metadata = generateToolMetadata("word-to-pdf", "pdf");

export default async function WordToPDFPage({ searchParams }) {
	const params = await searchParams;
	const lang = params.lang || "en";
	// Tool-specific data
	const toolData = {
		id: "word-to-pdf",
		name: "Word to PDF",
		description: "Convert Word documents to PDF format",
		category: "pdf",
		route: "/word-to-pdf",
	};

	// Breadcrumb navigation
	const breadcrumbs = [
		{ name: "PDF Tools", url: "/pdf-tools" },
		{ name: "Word to PDF", url: "/word-to-pdf" },
	];

	// Tool features
	const features = [
		"Convert DOC & DOCX",
		"Preserve Formatting",
		"Maintain Fonts & Images",
		"Batch Conversion",
		"Client-Side Processing",
		"No File Size Limit",
		"Secure & Private",
		"100% Free",
	];

	// Usage examples
	const examples = [
		{
			title: "Resumes",
			description: "Professional format",
			input: "Resume.docx",
			output: "Resume.pdf",
		},
		{
			title: "Contracts",
			description: "Secure sharing",
			input: "Contract_Draft.doc",
			output: "Contract_Final.pdf",
		},
		{
			title: "Assignments",
			description: "Submission ready",
			input: "Homework.docx",
			output: "Homework.pdf",
		},
	];

	// FAQ data
	const faqs = getPdfToolFAQs("word-to-pdf");

	// Related tools
	const relatedTools = [
		{
			id: "pdf-to-word",
			name: "PDF to Word",
			description: "Convert PDF to Word",
			route: "/pdf-to-word",
			category: "pdf",
		},
		{
			id: "pdf-merger",
			name: "PDF Merger",
			description: "Combine multiple PDFs",
			route: "/pdf-merger",
			category: "pdf",
		},
		{
			id: "pdf-compressor",
			name: "PDF Compressor",
			description: "Reduce PDF size",
			route: "/pdf-compressor",
			category: "pdf",
		},
	];

	return (
		<div className="min-h-screen bg-background">
			{/* Enhanced Breadcrumbs with Schema */}
			<div className="container mx-auto px-4 pt-6">
				<BreadcrumbsEnhanced customBreadcrumbs={breadcrumbs} />
			</div>

			{/* Main Content */}
			<main className="container mx-auto px-4 py-8">
				{/* Hero Section */}
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold mb-4">
						Free Word to PDF Converter
					</h1>
					<p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
						Convert your Word documents (DOC, DOCX) to PDF format instantly.
						Preserve your original layout, fonts, and images with our secure
						online converter.
					</p>

					<QuickActions
						toolName="Word to PDF"
						toolUrl="https://30tools.com/word-to-pdf"
						showBookmark={true}
						showShare={true}
					/>
				</div>

				{/* Tool Interface */}
				<div className="mb-12">
					<WordToPDFTool />
				</div>

				{/* Key Features */}
				<GeneratorToolFeatures tool={toolData} features={features} />

				{/* Usage Examples */}
				<GeneratorToolExamples
					tool={toolData}
					examples={examples}
					title="Why Convert Word to PDF?"
				/>

				{/* Legal & Financial Contract Standards Section (High CPC) */}
				<section className="mb-12 bg-gradient-to-br from-slate-50 to-transparent dark:from-slate-950/20 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800/50">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-3xl font-bold mb-8 text-center">
							Legal & Financial{" "}
							<span className="text-primary">Contract Standards</span>
						</h2>
						<div className="grid md:grid-cols-2 gap-8 items-center">
							<div className="order-2 md:order-1 bg-card p-6 rounded-2xl shadow-sm border border-border/50">
								<h4 className="font-bold mb-4 flex items-center gap-2">
									<ShieldAlert className="w-5 h-5 text-amber-500" />
									Risk Mitigation
								</h4>
								<p className="text-sm text-muted-foreground mb-4">
									Using PDF for <strong>wealth management contracts</strong>{" "}
									prevents unauthorized edits to critical clauses. It is the
									industry standard for:
								</p>
								<div className="flex flex-wrap gap-2 text-xs font-medium">
									<span className="bg-muted px-2 py-1 rounded">
										IPO Prospectus
									</span>
									<span className="bg-muted px-2 py-1 rounded">
										Liability Insurance
									</span>
									<span className="bg-muted px-2 py-1 rounded">NDA</span>
								</div>
							</div>
							<div className="order-1 md:order-2 prose prose-slate dark:prose-invert max-w-none">
								<h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
									<Scale className="w-5 h-5 text-indigo-600" />
									Mortgage & Lending Agreements
								</h3>
								<p className="text-sm text-muted-foreground mb-6">
									When dealing with high-value transactions like{" "}
									<strong>mortgage agreements</strong>, precision is key. Before
									finalizing your contracts, smart investors verify their
									figures with tools like{" "}
									<a
										href="https://finscope-calculators.strivio.world/"
										target="_blank"
										rel="noopener noreferrer"
										className="text-primary hover:underline font-medium"
									>
										FinScope Calculators
									</a>{" "}
									to ensure every interest rate and amortization schedule is
									accurate before converting to a binding PDF.
								</p>
								<h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
									<FileSignature className="w-5 h-5 text-rose-600" />
									Binding Digital Signatures
								</h3>
								<p className="text-sm text-muted-foreground">
									PDF is the only format universally accepted for digital
									signatures in court. Ensure your{" "}
									<strong>business contracts</strong> are legally sound by
									sharing them in a locked format. Need to make last-minute
									changes before converting? Use our{" "}
									<Link
										href="/pdf-editor"
										className="text-primary hover:underline font-medium"
									>
										PDF Editor
									</Link>{" "}
									for quick text adjustments.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* User Reviews */}
				<div className="mb-12">
					<ReviewSnippets
						toolId="word-to-pdf"
						title="User Reviews"
						showRatingSummary={true}
						variant="grid"
						limit={6}
					/>
				</div>

				{/* How to Use Section */}
				<div className="mb-12 max-w-4xl mx-auto">
					<h2 className="text-3xl font-bold mb-8 text-center">
						How to Convert Word to PDF
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-card p-6 rounded-xl border text-center relative">
							<div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
								1
							</div>
							<h3 className="font-semibold text-lg mb-2">Upload Word</h3>
							<p className="text-muted-foreground text-sm">
								Select your DOC or DOCX file.
							</p>
						</div>
						<div className="bg-card p-6 rounded-xl border text-center relative">
							<div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
								2
							</div>
							<h3 className="font-semibold text-lg mb-2">Convert</h3>
							<p className="text-muted-foreground text-sm">
								Click convert to transform your file to PDF.
							</p>
						</div>
						<div className="bg-card p-6 rounded-xl border text-center relative">
							<div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
								3
							</div>
							<h3 className="font-semibold text-lg mb-2">Download</h3>
							<p className="text-muted-foreground text-sm">
								Save your new PDF document.
							</p>
						</div>
					</div>
				</div>

				{/* FAQ Section */}
				<div className="mb-12">
					<FAQSection
						faqs={faqs}
						title="Word to PDF FAQ"
						categoryTitle="Document Conversion"
						variant="accordion"
						showSchema={true}
					/>
				</div>

				{/* Related Tools */}
				<div className="mb-12">
					<RelatedTools
						currentTool="word-to-pdf"
						category="pdf"
						tools={relatedTools}
						title="More PDF Tools"
					/>
				</div>

				{/* User Comments */}
				<UserComments
					toolId="word-to-pdf"
					toolName="Word to PDF"
					showStats={true}
					allowComments={true}
				/>
			</main>

			{/* Structured Data for Tool */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify([
						{
							"@context": "https://schema.org",
							"@type": "HowTo",
							name: "How to Convert Word to PDF",
							step: [
								{
									"@type": "HowToStep",
									name: "Upload Word",
									text: "Select your DOC or DOCX file.",
									url: "https://30tools.com/word-to-pdf#step1",
								},
								{
									"@type": "HowToStep",
									name: "Convert",
									text: "Click convert to transform your file to PDF.",
									url: "https://30tools.com/word-to-pdf#step2",
								},
								{
									"@type": "HowToStep",
									name: "Download",
									text: "Save your new PDF document.",
									url: "https://30tools.com/word-to-pdf#step3",
								},
							],
						},
					]),
				}}
			/>
		</div>
	);
}
