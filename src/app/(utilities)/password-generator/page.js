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
import PasswordGeneratorTool from "@/components/tools/utilities/PasswordGeneratorTool";

export const metadata = {
  title: "Free Password Generator Online - No Signup | 30tools",
  description: "Free utility tools: Password Generator. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your bro",
  keywords: ["password generator","password generator free","password generator online","password generator tool"],
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

export default async function PasswordGeneratorPage({ searchParams }) {
	const params = await searchParams;
	const lang = params.lang || "en";
	const toolData = {
  "id": "password-generator",
  "name": "Password Generator",
  "description": "Create strong, secure passwords instantly with customizable settings.",
  "category": "utilities",
  "route": "/password-generator",
  "features": [
    "100% Free - No hidden costs or subscriptions",
    "No Registration Required - Start immediately",
    "Secure & Private - All processing in your browser",
    "Fast & Efficient - Get results in seconds",
    "No File Size Limits - Handle large files easily",
    "Mobile Friendly - Works on all devices"
  ],
  "benefits": [],
  "useCases": [],
  "faqs": [
    {
      "question": "Is this Password Generator really free?",
      "answer": "Yes! Our Password Generator is completely free to use with no hidden costs, subscriptions, or premium features. You get full access to all functionality without any limitations."
    },
    {
      "question": "Is my data secure when using Password Generator?",
      "answer": "Absolutely. All processing happens locally in your browser - your files never leave your device. We don't store, access, or transmit your data, ensuring complete privacy and security."
    },
    {
      "question": "Do I need to create an account to use Password Generator?",
      "answer": "No registration required. You can start using Password Generator immediately without creating an account or providing any personal information."
    },
    {
      "question": "Are there any file size limits for Password Generator?",
      "answer": "There are no artificial file size limits. The only limitation is your browser's memory capacity, which can handle most typical files comfortably."
    },
    {
      "question": "Can I use Password Generator on mobile devices?",
      "answer": "Yes, Password Generator is fully responsive and works perfectly on smartphones, tablets, and desktop computers with any modern browser."
    },
    {
      "question": "What file formats does Password Generator support?",
      "answer": "Password Generator supports all major formats for its category. Upload common file types and get converted results in standard output formats compatible with any device or software."
    }
  ],
  "howTo": {
    "name": "How to Use Password Generator",
    "steps": [
      {
        "name": "Upload or Input",
        "text": "Provide your file or input data using the upload button or text input field. Password Generator supports drag-and-drop for convenience.",
        "url": "/password-generator#step1",
        "position": 1
      },
      {
        "name": "Configure Settings",
        "text": "Choose your desired output format, quality settings, or other options. Customize to match your specific requirements.",
        "url": "/password-generator#step2",
        "position": 2
      },
      {
        "name": "Process & Download",
        "text": "Click the process button and wait for completion. Once ready, download your result instantly or copy to clipboard.",
        "url": "/password-generator#step3",
        "position": 3
      }
    ]
  }
};

	const features = [
		"Cryptographically Secure Randomness",
		"100% Client-Side (No server storage)",
		"Adjustable Password Length (up to 64)",
		"Include/Exclude Symbols & Numbers",
		"Real-time Strength Meter",
		"One-click Copy",
		"No Registration Required",
		"Works Offline",
	];

	const examples = [
		{
			title: "Standard Secure",
			description: "16 chars, mixed case + numbers",
			input: "Default Settings",
			output: "Xy9#mK2$pL5@vN8q",
		},
		{
			title: "PIN Code",
			description: "Numeric only",
			input: "Numbers only selected",
			output: "849205",
		},
		{
			title: "Ultra Secure",
			description: "32 chars, full complexity",
			input: "All options enabled, max length",
			output: "H$k9&2Lm#P@1qZ*5vN8xR!3wY6bJ+4dC",
		},
	];

	const faqs = [
		{
			question: "Is this password generator safe?",
			answer:
				"Yes, absolutely. The passwords are generated entirely within your browser using JavaScript's secure random number generator. We never see, store, or transmit your passwords.",
		},
		{
			question: "How long should a strong password be?",
			answer:
				"Security experts recommend a minimum of 16 characters for maximum security against brute-force attacks.",
		},
		{
			question: "Why do I need symbols in my password?",
			answer:
				"Adding symbols exponentially increases the possible combinations, making it significantly harder for hackers to guess your password.",
		},
	];

	const relatedTools = [
		{
			id: "jwt-decoder",
			name: "JWT Decoder",
			description: "Decode security tokens",
			route: "/jwt-decoder",
			category: "developer",
		},
		{
			id: "base64-tool",
			name: "Base64 Tool",
			description: "Encode credentials",
			route: "/base64-tool",
			category: "developer",
		},
		{
			id: "pdf-protect",
			name: "PDF Protect",
			description: "Password protect PDFs",
			route: "/pdf-protect",
			category: "pdf",
		},
	];

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		name: "Password Generator",
		applicationCategory: "SecurityApplication",
		operatingSystem: "Any",
		offers: {
			"@type": "Offer",
			price: "0",
			priceCurrency: "USD",
		},
		description:
			"Free online tool to generate strong, secure random passwords.",
	};

	return (
		<div className="min-h-screen bg-background">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<div className="container mx-auto px-4 py-12 md:py-20 max-w-5xl">
				<div className="text-center space-y-4 mb-12">
					<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
						Free <span className="text-primary">Strong Password Generator</span>
					</h1>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Generate uncrackable, cryptographically secure passwords instantly.
						Protect your data with military-grade randomness.
					</p>
					<QuickActions
						toolName="Password Generator"
						toolUrl="https://30tools.com/password-generator"
						showBookmark={true}
						showShare={true}
					/>
				</div>

				<div className="mb-20">
					<PasswordGeneratorTool />
				</div>

				{/* Content Sections */}
				<GeneratorToolFeatures tool={toolData} features={features} />
				<GeneratorToolExamples
					tool={toolData}
					examples={examples}
					title="Password Types"
				/>

				<div className="mb-20">
					<FAQSection
						faqs={faqs}
						title="Password Security FAQ"
						categoryTitle="Security"
						variant="accordion"
						showSchema={true}
					/>
				</div>

				<div className="mb-20">
					<RelatedTools
						currentTool="password-generator"
						category="utilities"
						tools={relatedTools}
						title="Security Tools"
					/>
				</div>

				<UserComments
					toolId="password-generator"
					toolName="Password Generator"
					showStats={true}
					allowComments={true}
				/>
			</div>
		</div>
	);
}
