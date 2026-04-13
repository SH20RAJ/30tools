import {
	BreadcrumbsEnhanced,
	FAQSection,
	QuickActions,
	RelatedTools,
	ReviewSnippets,
	ToolFeatures,
	UserComments,
} from "@/components/seo";
import { DeveloperToolExamples } from "@/components/seo/DeveloperToolsHub";
import JSONFormatterTool from "@/components/tools/developer/JSONFormatterTool";
import { getDeveloperToolFAQs } from "@/constants/seo/developer-faqs";

export const metadata = {
  title: "Free JSON Formatter Online - No Signup | 30tools",
  description: "Developer tools: JSON Formatter. Format, validate, convert code/data. Fast, accurate, essential for programmers. All processing happens locally in your browser ",
  keywords: ["json formatter","json formatter free","json formatter online","json formatter tool"],
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

export default async function JSONFormatterPage({ searchParams }) {
	const params = await searchParams;
	const lang = params.lang || "en";
	// Tool-specific data
	const toolData = {
  "id": "json-formatter",
  "name": "JSON Formatter",
  "description": "Format, validate, and beautify JSON data",
  "category": "developer",
  "route": "/json-formatter",
  "features": [
    "Syntax highlighting",
    "Multiple language support",
    "Validation & error checking",
    "Export formatted code",
    "API integration available",
    "100% Free - No hidden costs or subscriptions"
  ],
  "benefits": [],
  "useCases": [],
  "faqs": [
    {
      "question": "Is this JSON Formatter really free?",
      "answer": "Yes! Our JSON Formatter is completely free to use with no hidden costs, subscriptions, or premium features. You get full access to all functionality without any limitations."
    },
    {
      "question": "Is my data secure when using JSON Formatter?",
      "answer": "Absolutely. All processing happens locally in your browser - your files never leave your device. We don't store, access, or transmit your data, ensuring complete privacy and security."
    },
    {
      "question": "Do I need to create an account to use JSON Formatter?",
      "answer": "No registration required. You can start using JSON Formatter immediately without creating an account or providing any personal information."
    },
    {
      "question": "Are there any file size limits for JSON Formatter?",
      "answer": "There are no artificial file size limits. The only limitation is your browser's memory capacity, which can handle most typical files comfortably."
    },
    {
      "question": "Can I use JSON Formatter on mobile devices?",
      "answer": "Yes, JSON Formatter is fully responsive and works perfectly on smartphones, tablets, and desktop computers with any modern browser."
    },
    {
      "question": "What file formats does JSON Formatter support?",
      "answer": "JSON Formatter supports all major formats for its category. Upload common file types and get converted results in standard output formats compatible with any device or software."
    }
  ],
  "howTo": {
    "name": "How to Use JSON Formatter",
    "steps": [
      {
        "name": "Upload or Input",
        "text": "Provide your file or input data using the upload button or text input field. JSON Formatter supports drag-and-drop for convenience.",
        "url": "/json-formatter#step1",
        "position": 1
      },
      {
        "name": "Configure Settings",
        "text": "Choose your desired output format, quality settings, or other options. Customize to match your specific requirements.",
        "url": "/json-formatter#step2",
        "position": 2
      },
      {
        "name": "Process & Download",
        "text": "Click the process button and wait for completion. Once ready, download your result instantly or copy to clipboard.",
        "url": "/json-formatter#step3",
        "position": 3
      }
    ]
  }
};

	// Breadcrumb navigation
	const breadcrumbs = [
		{ name: "Developer Tools", url: "/developer-tools" },
		{ name: "JSON Formatter", url: "/json-formatter" },
	];

	// Tool features
	const features = [
		"Format & validate JSON instantly",
		"Minify JSON for production use",
		"Real-time error detection",
		"Tree view for complex JSON",
		"Copy formatted code",
		"Supports large JSON files",
		"Syntax highlighting",
		"Client-side processing",
	];

	// Usage examples
	const examples = [
		{
			title: "Format API Response",
			description:
				"Clean up messy JSON from API responses for better readability",
			input: '{"users":[{"id":1,"name":"John","email":"john@example.com"}]}',
			output: `{
  "users": [
    {
      "id": 1,
      "name": "John", 
      "email": "john@example.com"
    },
  ]
}`,
		},
		{
			title: "Validate Configuration",
			description:
				"Check configuration files for syntax errors before deployment",
			input: '{"database":{"host":"localhost","port":5432}}',
			output: `{
  "database": {
    "host": "localhost",
    "port": 5432
  },
}`,
		},
	];

	// FAQ data
	const faqs = getDeveloperToolFAQs("json-formatter");

	// Related tools
	const relatedTools = [
		{
			id: "xml-formatter",
			name: "XML Formatter",
			description: "Format and validate XML documents",
			route: "/xml-formatter",
			category: "developer-tools",
		},
		{
			id: "base64-tool",
			name: "Base64 Encoder",
			description: "Encode and decode Base64 strings",
			route: "/base64-tool",
			category: "developer-tools",
		},
		{
			id: "api-tester",
			name: "API Tester",
			description: "Test REST APIs with custom headers",
			route: "/api-tester",
			category: "developer-tools",
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
					<h2 className="text-4xl font-bold mb-4">
						Format Large JSON Files & Pretty Print
					</h2>
					<p className="text-xl text-muted-foreground mb-6">
						The fastest way to format large JSON files online. Our free tool provides 
						pretty print JSON with syntax highlighting and instant error detection. 
						Secure and 100% private.
					</p>

					<QuickActions
						toolName="JSON Formatter"
						toolUrl="https://30tools.com/json-formatter"
						showBookmark={true}
						showShare={true}
					/>
				</div>

				{/* Tool Interface */}
				<div className="mb-12">
					<JSONFormatterTool />
				</div>

				{/* Key Features */}
				<div className="mb-12">
					<ToolFeatures
						features={features}
						title="Why Choose Our JSON Formatter?"
						variant="grid"
					/>
				</div>

				{/* Usage Examples */}
				<DeveloperToolExamples tool={toolData} examples={examples} />

				{/* User Reviews */}
				<div className="mb-12">
					<ReviewSnippets
						toolId="json-formatter"
						title="What Developers Say About Our JSON Formatter"
						showRatingSummary={true}
						variant="grid"
						limit={6}
					/>
				</div>

				{/* FAQ Section */}
				<div className="mb-12">
					<FAQSection
						faqs={faqs}
						title="JSON Formatter FAQ"
						categoryTitle="JSON Formatting & Validation"
						variant="accordion"
						showSchema={true}
					/>
				</div>

				{/* Related Tools */}
				<div className="mb-12">
					<RelatedTools
						currentTool="json-formatter"
						category="developer-tools"
						tools={relatedTools}
						title="More Developer Tools"
					/>
				</div>

				{/* User Comments */}
				<UserComments
					toolId="json-formatter"
					toolName="JSON Formatter"
					showStats={true}
					allowComments={true}
				/>
			</main>

			{/* Structured Data for Tool */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: "JSON Formatter & Validator",
						description:
							"Professional JSON formatter, validator and minifier for developers",
						url: "https://30tools.com/json-formatter",
						applicationCategory: "DeveloperApplication",
						operatingSystem: "Web Browser",
						offers: {
							"@type": "Offer",
							price: "0",
							priceCurrency: "USD",
						},
						creator: {
							"@type": "Organization",
							name: "30tools",
							url: "https://30tools.com",
						},
						featureList: features,
						screenshot: "https://30tools.com/screenshots/json-formatter.jpg",
						aggregateRating: {
							"@type": "AggregateRating",
							ratingValue: "4.9",
							reviewCount: "2847",
							bestRating: "5",
							worstRating: "1",
						},
					}),
				}}
			/>
		</div>
	);
}
