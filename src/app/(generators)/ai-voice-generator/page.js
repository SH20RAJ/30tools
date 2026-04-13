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
import AIVoiceGeneratorTool from "@/components/tools/generators/AIVoiceGeneratorTool";
import { getGeneratorToolFAQs } from "@/constants/seo/generator-faqs";

export const metadata = {
	title: "Free AI Voice Generator Online - No Signup | 30tools",
	description:
		"Convert text to natural-sounding speech with our free AI voice generator. Choose from multiple voices, languages, and download high-quality audio instantly. No signup required, unlimited usage, and secure browser-based processing. Try now!",
	keywords: [
		"ai voice generator",
		"ai voice generator free",
		"ai voice generator online",
		"ai voice generator tool",
	],
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

export default async function AIVoiceGeneratorPage({ searchParams }) {
	const params = await searchParams;
	const _lang = params.lang || "en";
	// Tool-specific data
	const toolData = {
		id: "ai-voice-generator",
		name: "AI Voice Generator",
		description:
			"Convert text to natural-sounding speech with AI. Enter your text and download the audio instantly.",
		category: "generators",
		route: "/ai-voice-generator",
		features: [
			"100% Free - No hidden costs or subscriptions",
			"No Registration Required - Start immediately",
			"Secure & Private - All processing in your browser",
			"Fast & Efficient - Get results in seconds",
			"No File Size Limits - Handle large files easily",
			"Mobile Friendly - Works on all devices",
		],
		benefits: [],
		useCases: [],
		faqs: [
			{
				question: "Is this AI Voice Generator really free?",
				answer:
					"Yes! Our AI Voice Generator is completely free to use with no hidden costs, subscriptions, or premium features. You get full access to all functionality without any limitations.",
			},
			{
				question: "Is my data secure when using AI Voice Generator?",
				answer:
					"Absolutely. All processing happens locally in your browser - your files never leave your device. We don't store, access, or transmit your data, ensuring complete privacy and security.",
			},
			{
				question: "Do I need to create an account to use AI Voice Generator?",
				answer:
					"No registration required. You can start using AI Voice Generator immediately without creating an account or providing any personal information.",
			},
			{
				question: "Are there any file size limits for AI Voice Generator?",
				answer:
					"There are no artificial file size limits. The only limitation is your browser's memory capacity, which can handle most typical files comfortably.",
			},
			{
				question: "Can I use AI Voice Generator on mobile devices?",
				answer:
					"Yes, AI Voice Generator is fully responsive and works perfectly on smartphones, tablets, and desktop computers with any modern browser.",
			},
			{
				question: "What file formats does AI Voice Generator support?",
				answer:
					"AI Voice Generator supports all major formats for its category. Upload common file types and get converted results in standard output formats compatible with any device or software.",
			},
		],
		howTo: {
			name: "How to Use AI Voice Generator",
			steps: [
				{
					name: "Upload or Input",
					text: "Provide your file or input data using the upload button or text input field. AI Voice Generator supports drag-and-drop for convenience.",
					url: "/ai-voice-generator#step1",
					position: 1,
				},
				{
					name: "Configure Settings",
					text: "Choose your desired output format, quality settings, or other options. Customize to match your specific requirements.",
					url: "/ai-voice-generator#step2",
					position: 2,
				},
				{
					name: "Process & Download",
					text: "Click the process button and wait for completion. Once ready, download your result instantly or copy to clipboard.",
					url: "/ai-voice-generator#step3",
					position: 3,
				},
			],
		},
	};

	// Breadcrumb navigation
	const breadcrumbs = [
		{ name: "Generators", url: "/generators" },
		{ name: "AI Voice Generator", url: "/ai-voice-generator" },
	];

	// Tool features
	const features = [
		"Natural-sounding AI voices",
		"Multiple languages & accents",
		"Male & Female voice options",
		"Adjustable speed & pitch",
		"Instant MP3 download",
		"Unlimited text conversion",
		"Commercial use allowed",
		"No signup required",
	];

	// Usage examples
	const examples = [
		{
			title: "YouTube Voiceover",
			description: "Narration for video content",
			input:
				"Text: 'Welcome to our channel! Today we're exploring...', Voice: Male (American)",
			output: "Professional quality voiceover audio file",
		},
		{
			title: "Podcast Intro",
			description: "Opening segment for podcasts",
			input:
				"Text: 'You are listening to The Tech Daily...', Voice: Female (British)",
			output: "Clear, engaging podcast introduction",
		},
		{
			title: "E-Learning",
			description: "Educational content narration",
			input:
				"Text: 'Chapter 1: Introduction to Biology...', Voice: Female (Calm)",
			output: "Easy-to-understand educational audio",
		},
	];

	// FAQ data
	const faqs = getGeneratorToolFAQs("ai-voice-generator");

	// Related tools
	const relatedTools = [
		{
			id: "ai-image-generator",
			name: "AI Image Generator",
			description: "Create AI art from text",
			route: "/ai-image-generator",
			category: "generators",
		},
		{
			id: "text-to-speech",
			name: "Text to Speech (Pro)",
			description: "Advanced TTS Tool",
			route: "/text-to-speech",
			category: "audio",
		},
		{
			id: "youtube-video-summarizer",
			name: "Video Summarizer",
			description: "Summarize YouTube videos",
			route: "/youtube-video-summarizer",
			category: "youtube",
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
						Free AI Voice Generator - Text to Speech Converter
					</h1>
					<p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
						Transform your text into lifelike speech with our advanced AI voice
						generator. Choose from a variety of natural-sounding voices,
						accents, and languages. Perfect for videos, podcasts, presentations,
						and more.
					</p>

					<QuickActions
						toolName="AI Voice Generator"
						toolUrl="https://30tools.com/ai-voice-generator"
						showBookmark={true}
						showShare={true}
					/>
				</div>

				{/* Tool Interface */}
				<div className="mb-12">
					<AIVoiceGeneratorTool />
				</div>

				{/* Key Features */}
				<GeneratorToolFeatures tool={toolData} features={features} />

				{/* Usage Examples */}
				<GeneratorToolExamples tool={toolData} examples={examples} />

				{/* User Reviews */}
				<div className="mb-12">
					<ReviewSnippets
						toolId="ai-voice-generator"
						title="What Creators Say About Our Voice Tool"
						showRatingSummary={true}
						variant="grid"
						limit={6}
					/>
				</div>

				{/* How to Use Section */}
				<div className="mb-12 max-w-4xl mx-auto">
					<h2 className="text-3xl font-bold mb-8 text-center">
						How to Convert Text to Speech
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-card p-6 rounded-xl border text-center relative">
							<div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
								1
							</div>
							<h3 className="font-semibold text-lg mb-2">Enter Text</h3>
							<p className="text-muted-foreground text-sm">
								Type or paste the text you want to convert into the input box.
							</p>
						</div>
						<div className="bg-card p-6 rounded-xl border text-center relative">
							<div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
								2
							</div>
							<h3 className="font-semibold text-lg mb-2">Select Voice</h3>
							<p className="text-muted-foreground text-sm">
								Choose your preferred language, accent, and voice gender from
								the options.
							</p>
						</div>
						<div className="bg-card p-6 rounded-xl border text-center relative">
							<div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
								3
							</div>
							<h3 className="font-semibold text-lg mb-2">
								Generate & Download
							</h3>
							<p className="text-muted-foreground text-sm">
								Click generate to hear the audio, then download the MP3 file for
								your project.
							</p>
						</div>
					</div>
				</div>

				{/* FAQ Section */}
				<div className="mb-12">
					<FAQSection
						faqs={faqs}
						title="AI Voice Generator FAQ"
						categoryTitle="Text to Speech"
						variant="accordion"
						showSchema={true}
					/>
				</div>

				{/* Related Tools */}
				<div className="mb-12">
					<RelatedTools
						currentTool="ai-voice-generator"
						category="generators"
						tools={relatedTools}
						title="More Creative Generators"
					/>
				</div>

				{/* User Comments */}
				<UserComments
					toolId="ai-voice-generator"
					toolName="AI Voice Generator"
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
							name: "How to Convert Text to Speech",
							step: [
								{
									"@type": "HowToStep",
									name: "Enter Text",
									text: "Type or paste the text you want to convert into the input box.",
									url: "https://30tools.com/ai-voice-generator#step1",
								},
								{
									"@type": "HowToStep",
									name: "Select Voice",
									text: "Choose your preferred language, accent, and voice gender from the options.",
									url: "https://30tools.com/ai-voice-generator#step2",
								},
								{
									"@type": "HowToStep",
									name: "Generate & Download",
									text: "Click generate to hear the audio, then download the MP3 file for your project.",
									url: "https://30tools.com/ai-voice-generator#step3",
								},
							],
						},
					]),
				}}
			/>
		</div>
	);
}
