import { Camera, FileText, FolderArchive, Share2 } from "lucide-react";
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
import ImageToPDFTool from "@/components/tools/pdf/ImageToPDFTool";
import { getPdfToolFAQs } from "@/constants/seo/pdf-faqs";

export const metadata = generateToolMetadata("image-to-pdf", "pdf");

export default async function ImageToPDFPage({ searchParams }) {
	const params = await searchParams;
	const lang = params.lang || "en";
	// Tool-specific data
	const toolData = {
		id: "image-to-pdf",
		name: "Image to PDF",
		description: "Convert and combine images into a PDF document",
		category: "pdf",
		route: "/image-to-pdf",
	};

	// Breadcrumb navigation
	const breadcrumbs = [
		{ name: "PDF Tools", url: "/pdf-tools" },
		{ name: "Image to PDF", url: "/image-to-pdf" },
	];

	// Tool features
	const features = [
		"Convert JPG, PNG, BMP, GIF",
		"Combine Multiple Images",
		"Reorder Pages",
		"High Quality Output",
		"Client-Side Processing",
		"No File Size Limit",
		"Secure & Private",
		"100% Free",
	];

	// Usage examples
	const examples = [
		{
			title: "Photo Album",
			description: "Share memories",
			input: "Photo1.jpg, Photo2.jpg...",
			output: "Album.pdf",
		},
		{
			title: "Scanned Documents",
			description: "Combine scans",
			input: "Page1.png, Page2.png...",
			output: "Document.pdf",
		},
		{
			title: "Design Portfolio",
			description: "Showcase work",
			input: "Design1.jpg, Design2.jpg...",
			output: "Portfolio.pdf",
		},
	];

	// FAQ data
	const faqs = getPdfToolFAQs("image-to-pdf");

	// Related tools
	const relatedTools = [
		{
			id: "pdf-to-image",
			name: "PDF to Image",
			description: "Convert PDF to Image",
			route: "/pdf-to-image",
			category: "pdf",
		},
		{
			id: "jpg-to-pdf",
			name: "JPG to PDF",
			description: "Convert JPG to PDF",
			route: "/jpg-to-pdf",
			category: "pdf",
		},
		{
			id: "pdf-merger",
			name: "PDF Merger",
			description: "Combine multiple PDFs",
			route: "/pdf-merger",
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
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
						Free Image to PDF Converter - Instant Online
					</h1>
					<p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto leading-relaxed">
						Convert and combine your images (JPG, PNG, BMP, GIF) into a single
						professional PDF document instantly. No signup, no watermarks, and 100% secure.
					</p>

					<QuickActions
						toolName="Image to PDF"
						toolUrl="https://30tools.com/image-to-pdf"
						showBookmark={true}
						showShare={true}
					/>
				</div>

				{/* Tool Interface */}
				<div className="mb-12">
					<ImageToPDFTool />
				</div>

				{/* Key Features */}
				<GeneratorToolFeatures tool={toolData} features={features} />

				{/* Usage Examples */}
				<GeneratorToolExamples
					tool={toolData}
					examples={examples}
					title="Why Convert Image to PDF?"
				/>

				{/* Professional Use Cases Section (SEO & Internal Linking) */}
				<section className="mb-12 bg-gradient-to-br from-indigo-50 to-transparent dark:from-indigo-950/20 p-8 md:p-12 rounded-3xl border border-indigo-100 dark:border-indigo-900/50">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-3xl font-bold mb-8 text-center">
							Professional <span className="text-primary">Use Cases</span>
						</h2>
						<div className="grid md:grid-cols-2 gap-8 items-center">
							<div className="space-y-6">
								<div className="flex gap-4 items-start">
									<div className="p-3 bg-background rounded-xl shadow-sm">
										<Camera className="w-6 h-6 text-indigo-600" />
									</div>
									<div>
										<h3 className="font-bold text-lg">Digital Portfolios</h3>
										<p className="text-sm text-muted-foreground">
											Photographers and designers, looking for{" "}
											<strong>how to make a pdf portfolio</strong>? Combine your
											best shots into a single file. Afterward, use our{" "}
											<Link
												href="/pdf-compressor"
												className="text-primary hover:underline font-medium"
											>
												PDF Compressor
											</Link>{" "}
											to ensure it's small enough to email to clients without
											losing quality.
										</p>
									</div>
								</div>
								<div className="flex gap-4 items-start">
									<div className="p-3 bg-background rounded-xl shadow-sm">
										<FileText className="w-6 h-6 text-rose-600" />
									</div>
									<div>
										<h3 className="font-bold text-lg">Expense Management</h3>
										<p className="text-sm text-muted-foreground">
											Turn chaos into order by converting receipt photos to PDF.
											Need to submit a monthly report? Use our{" "}
											<Link
												href="/pdf-merger"
												className="text-primary hover:underline font-medium"
											>
												PDF Merger
											</Link>{" "}
											to join all your daily receipt PDFs into one comprehensive
											document for reimbursement.
										</p>
									</div>
								</div>
							</div>

							<div className="bg-background p-6 rounded-2xl shadow-sm border border-border/50">
								<h4 className="font-bold mb-4 border-b border-border/50 pb-2">
									Why Go Digital?
								</h4>
								<div className="space-y-4">
									<div className="flex items-center gap-3">
										<FolderArchive className="w-5 h-5 text-amber-500" />
										<div className="text-sm">
											<p className="font-bold">Archival Safe</p>
											<p className="text-xs text-muted-foreground">
												PDFs don't degrade like physical thermal receipts.
											</p>
										</div>
									</div>
									<div className="flex items-center gap-3">
										<Share2 className="w-5 h-5 text-blue-500" />
										<div className="text-sm">
											<p className="font-bold">Easy Sharing</p>
											<p className="text-xs text-muted-foreground">
												Share an entire album as one link or file.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* User Reviews */}
				<div className="mb-12">
					<ReviewSnippets
						toolId="image-to-pdf"
						title="User Reviews"
						showRatingSummary={true}
						variant="grid"
						limit={6}
					/>
				</div>

				{/* How to Use Section */}
				<div className="mb-12 max-w-4xl mx-auto">
					<h2 className="text-3xl font-bold mb-8 text-center">
						How to Convert Image to PDF
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-card p-6 rounded-xl border text-center relative">
							<div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
								1
							</div>
							<h3 className="font-semibold text-lg mb-2">Upload Images</h3>
							<p className="text-muted-foreground text-sm">
								Select your JPG, PNG, or other image files.
							</p>
						</div>
						<div className="bg-card p-6 rounded-xl border text-center relative">
							<div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
								2
							</div>
							<h3 className="font-semibold text-lg mb-2">Arrange</h3>
							<p className="text-muted-foreground text-sm">
								Reorder images if needed and click convert.
							</p>
						</div>
						<div className="bg-card p-6 rounded-xl border text-center relative">
							<div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
								3
							</div>
							<h3 className="font-semibold text-lg mb-2">Download</h3>
							<p className="text-muted-foreground text-sm">
								Save your combined PDF document.
							</p>
						</div>
					</div>
				</div>

				{/* FAQ Section */}
				<div className="mb-12">
					<FAQSection
						faqs={faqs}
						title="Image to PDF FAQ"
						categoryTitle="Document Conversion"
						variant="accordion"
						showSchema={true}
					/>
				</div>

				{/* Related Tools */}
				<div className="mb-12">
					<RelatedTools
						currentTool="image-to-pdf"
						category="pdf"
						tools={relatedTools}
						title="More PDF Tools"
					/>
				</div>

				{/* User Comments */}
				<UserComments
					toolId="image-to-pdf"
					toolName="Image to PDF"
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
							name: "How to Convert Image to PDF",
							step: [
								{
									"@type": "HowToStep",
									name: "Upload Images",
									text: "Select your JPG, PNG, or other image files.",
									url: "https://30tools.com/image-to-pdf#step1",
								},
								{
									"@type": "HowToStep",
									name: "Arrange",
									text: "Reorder images if needed and click convert.",
									url: "https://30tools.com/image-to-pdf#step2",
								},
								{
									"@type": "HowToStep",
									name: "Download",
									text: "Save your combined PDF document.",
									url: "https://30tools.com/image-to-pdf#step3",
								},
							],
						},
					]),
				}}
			/>
		</div>
	);
}
