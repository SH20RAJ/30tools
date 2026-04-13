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
import PdfProtectTool from "@/components/tools/pdf/PdfProtectTool";
import { getPdfToolFAQs } from "@/constants/seo/pdf-faqs";

export const metadata = {
  title: "Free PDF Password Protect Online - No Signup | 30tools",
  description: "Add password protection to PDF files. 100% free, no signup required, fast and secure. Works in browser. Try now! Easy and secure.",
  keywords: ["pdf password protect","pdf","password","protect","pdf-protect","pdf tool","free","online","tool","30tools","no signup","fast","secure","browser-based","instant","easy"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function PdfProtectPage({ searchParams }) {
	const params = await searchParams;
	const lang = params.lang || "en";
	// Tool-specific data
	const toolData = {
  "id": "pdf-protect",
  "name": "PDF Password Protect",
  "description": "Add password protection to PDF files",
  "category": "pdf",
  "route": "/pdf-protect",
  "features": [
    "Merge unlimited PDF files",
    "Split by pages or ranges",
    "Compress without quality loss",
    "Add password protection",
    "Convert images to PDF",
    "100% Free - No hidden costs or subscriptions"
  ],
  "benefits": [],
  "useCases": [],
  "faqs": [
    {
      "question": "Is this PDF Password Protect really free?",
      "answer": "Yes! Our PDF Password Protect is completely free to use with no hidden costs, subscriptions, or premium features. You get full access to all functionality without any limitations."
    },
    {
      "question": "Is my data secure when using PDF Password Protect?",
      "answer": "Absolutely. All processing happens locally in your browser - your files never leave your device. We don't store, access, or transmit your data, ensuring complete privacy and security."
    },
    {
      "question": "Do I need to create an account to use PDF Password Protect?",
      "answer": "No registration required. You can start using PDF Password Protect immediately without creating an account or providing any personal information."
    },
    {
      "question": "Are there any file size limits for PDF Password Protect?",
      "answer": "There are no artificial file size limits. The only limitation is your browser's memory capacity, which can handle most typical files comfortably."
    },
    {
      "question": "Can I use PDF Password Protect on mobile devices?",
      "answer": "Yes, PDF Password Protect is fully responsive and works perfectly on smartphones, tablets, and desktop computers with any modern browser."
    },
    {
      "question": "What file formats does PDF Password Protect support?",
      "answer": "PDF Password Protect supports all major formats for its category. Upload common file types and get converted results in standard output formats compatible with any device or software."
    }
  ],
  "howTo": {
    "name": "How to Use PDF Password Protect",
    "steps": [
      {
        "name": "Upload or Input",
        "text": "Provide your file or input data using the upload button or text input field. PDF Password Protect supports drag-and-drop for convenience.",
        "url": "/pdf-protect#step1",
        "position": 1
      },
      {
        "name": "Configure Settings",
        "text": "Choose your desired output format, quality settings, or other options. Customize to match your specific requirements.",
        "url": "/pdf-protect#step2",
        "position": 2
      },
      {
        "name": "Process & Download",
        "text": "Click the process button and wait for completion. Once ready, download your result instantly or copy to clipboard.",
        "url": "/pdf-protect#step3",
        "position": 3
      }
    ]
  }
};

	// Breadcrumb navigation
	const breadcrumbs = [
		{ name: "PDF Tools", url: "/pdf-tools" },
		{ name: "PDF Protect", url: "/pdf-protect" },
	];

	// Tool features
	const features = [
		"Strong AES Encryption",
		"Custom User Passwords",
		"Restrict Printing & Copying",
		"Prevent Modifications",
		"Client-Side Encryption",
		"No Server Uploads",
		"Instant Processing",
		"100% Free & Secure",
	];

	// Usage examples
	const examples = [
		{
			title: "Confidential Contracts",
			description: "Secure legal documents",
			input: "Contract_Draft.pdf + Password",
			output: "Encrypted_Contract.pdf",
		},
		{
			title: "Financial Reports",
			description: "Protect sensitive data",
			input: "Q3_Report.pdf + Restrictions",
			output: "Protected_Report.pdf",
		},
		{
			title: "Personal Records",
			description: "Keep personal info safe",
			input: "Medical_Records.pdf + Password",
			output: "Secure_Records.pdf",
		},
	];

	// FAQ data
	const faqs = getPdfToolFAQs("pdf-protect");

	// Related tools
	const relatedTools = [
		{
			id: "pdf-unlocker",
			name: "PDF Unlocker",
			description: "Remove PDF passwords",
			route: "/pdf-unlocker",
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
						Free PDF Password Protector
					</h1>
					<p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
						Secure your PDF documents with strong encryption. Add passwords, set
						permissions, and protect your sensitive information directly in your
						browser.
					</p>

					<QuickActions
						toolName="PDF Protect"
						toolUrl="https://30tools.com/pdf-protect"
						showBookmark={true}
						showShare={true}
					/>
				</div>

				{/* Tool Interface */}
				<div className="mb-12">
					<PdfProtectTool />
				</div>

				{/* Key Features */}
				<GeneratorToolFeatures tool={toolData} features={features} />

				{/* Usage Examples */}
				<GeneratorToolExamples
					tool={toolData}
					examples={examples}
					title="Why Protect Your PDFs?"
				/>

				{/* Security & Compliance Section (SEO & Internal Linking) */}
				<section className="mb-12 bg-gradient-to-br from-emerald-50 to-transparent dark:from-emerald-950/20 p-8 md:p-12 rounded-3xl border border-emerald-100 dark:border-emerald-900/50">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-3xl font-bold mb-8 text-center">
							Security & <span className="text-primary">Compliance</span>
						</h2>
						<div className="grid md:grid-cols-2 gap-8 items-center">
							<div className="order-2 md:order-1 bg-card p-6 rounded-2xl shadow-sm border border-border/50">
								<h4 className="font-bold mb-4 flex items-center gap-2">
									AES-256 Encryption Standard
								</h4>
								<p className="text-sm text-muted-foreground mb-4">
									We use the industry standard for{" "}
									<strong>secure document transfer</strong>. Your passwords
									never leave your browser. Perfect for:
								</p>
								<div className="flex flex-wrap gap-2 text-xs font-medium">
									<span className="bg-muted px-2 py-1 rounded">
										Medical Records
									</span>
									<span className="bg-muted px-2 py-1 rounded">
										Tax Returns
									</span>
									<span className="bg-muted px-2 py-1 rounded">
										Bank Statements
									</span>
								</div>
							</div>
							<div className="order-1 md:order-2 space-y-6">
								<div>
									<h3 className="font-bold text-lg mb-2">
										HR & Legal Compliance
									</h3>
									<p className="text-sm text-muted-foreground">
										Ensure <strong>GDPR & HIPAA compliance</strong> by
										encrypting employee contracts and patient data before
										sharing. Accidentally locked the wrong file? Use our{" "}
										<Link
											href="/pdf-unlocker"
											className="text-primary hover:underline font-medium"
										>
											PDF Unlocker
										</Link>{" "}
										if you have the password but want to remove it permanently.
									</p>
								</div>
								<div>
									<h3 className="font-bold text-lg mb-2">
										Client Confidentiality
									</h3>
									<p className="text-sm text-muted-foreground">
										Freelancers and consultants: Protect your intellectual
										property. Send locked drafts to clients and prevent
										unauthorized copying or printing.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* User Reviews */}
				<div className="mb-12">
					<ReviewSnippets
						toolId="pdf-protect"
						title="User Reviews"
						showRatingSummary={true}
						variant="grid"
						limit={6}
					/>
				</div>

				{/* How to Use Section */}
				<div className="mb-12 max-w-4xl mx-auto">
					<h2 className="text-3xl font-bold mb-8 text-center">
						How to Password Protect a PDF
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-card p-6 rounded-xl border text-center relative">
							<div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
								1
							</div>
							<h3 className="font-semibold text-lg mb-2">Upload PDF</h3>
							<p className="text-muted-foreground text-sm">
								Select the PDF file you want to secure.
							</p>
						</div>
						<div className="bg-card p-6 rounded-xl border text-center relative">
							<div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
								2
							</div>
							<h3 className="font-semibold text-lg mb-2">Set Password</h3>
							<p className="text-muted-foreground text-sm">
								Enter a strong password and choose permissions.
							</p>
						</div>
						<div className="bg-card p-6 rounded-xl border text-center relative">
							<div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
								3
							</div>
							<h3 className="font-semibold text-lg mb-2">Protect</h3>
							<p className="text-muted-foreground text-sm">
								Click "Protect PDF" and download your encrypted file.
							</p>
						</div>
					</div>
				</div>

				{/* FAQ Section */}
				<div className="mb-12">
					<FAQSection
						faqs={faqs}
						title="PDF Protection FAQ"
						categoryTitle="PDF Security"
						variant="accordion"
						showSchema={true}
					/>
				</div>

				{/* Related Tools */}
				<div className="mb-12">
					<RelatedTools
						currentTool="pdf-protect"
						category="pdf"
						tools={relatedTools}
						title="More PDF Tools"
					/>
				</div>

				{/* User Comments */}
				<UserComments
					toolId="pdf-protect"
					toolName="PDF Protect"
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
							name: "How to Password Protect a PDF",
							step: [
								{
									"@type": "HowToStep",
									name: "Upload PDF",
									text: "Select the PDF file you want to secure.",
									url: "https://30tools.com/pdf-protect#step1",
								},
								{
									"@type": "HowToStep",
									name: "Set Password",
									text: "Enter a strong password and choose permissions.",
									url: "https://30tools.com/pdf-protect#step2",
								},
								{
									"@type": "HowToStep",
									name: "Protect",
									text: "Click 'Protect PDF' and download your encrypted file.",
									url: "https://30tools.com/pdf-protect#step3",
								},
							],
						},
					]),
				}}
			/>
		</div>
	);
}
