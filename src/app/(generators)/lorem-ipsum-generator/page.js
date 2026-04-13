export const metadata = {
	title: "Free Lorem Ipsum Generator Online - No Signup | 30tools",
	description: "Free Lorem Ipsum Generator online tool. Fast and secure.",
	robots: { index: true, follow: true },
};

export default async function LoremIpsumGeneratorPage({ searchParams }) {
	const params = await searchParams;
	const _lang = params.lang || "en";
	const toolData = {
		id: "lorem-ipsum-generator",
		name: "Lorem Ipsum Generator",
		description: "Generate placeholder text",
		category: "generators",
		route: "/lorem-ipsum-generator",
	};

	const features = [
		"Generate Paragraphs, Sentences, or Words",
		"Start with standard 'Lorem Ipsum' phrase",
		"Copy to Clipboard Instantly",
		"Adjustable Length",
		"Clean, Unformatted Text",
		"Works Offline",
		"No Ads in Output",
		"Mobile Friendly",
	];

	const examples = [
		{
			title: "Web Layouts",
			description: "Fill empty content blocks",
			input: "3 Paragraphs",
			output: "Lorem ipsum dolor sit amet...",
		},
		{
			title: "Typography Testing",
			description: "Test font readability",
			input: "50 Words",
			output: "Random latin words to test line height and kerning...",
		},
		{
			title: "Mockups",
			description: "Consistent text volume",
			input: "5 Sentences",
			output: "Realistic paragraph length for UI mockups...",
		},
	];

	const faqs = [
		{
			question: "What is Lorem Ipsum?",
			answer:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s.",
		},
		{
			question: "Why do we use it?",
			answer:
				"It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. Lorem Ipsum provides a more-or-less normal distribution of letters.",
		},
		{
			question: "Where does it come from?",
			answer:
				"It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor, discovered the source.",
		},
	];

	const relatedTools = [
		{
			id: "text-to-speech",
			name: "Text to Speech",
			description: "Read text aloud",
			route: "/text-to-speech",
			category: "audio",
		},
		{
			id: "word-to-pdf",
			name: "Word to PDF",
			description: "Convert docs to PDF",
			route: "/word-to-pdf",
			category: "pdf",
		},
		{
			id: "json-formatter",
			name: "JSON Formatter",
			description: "Format code data",
			route: "/json-formatter",
			category: "developer",
		},
	];

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "SoftwareApplication",
		name: "Lorem Ipsum Generator",
		applicationCategory: "EducationalApplication",
		operatingSystem: "Any",
		offers: {
			"@type": "Offer",
			price: "0",
			priceCurrency: "USD",
		},
		description: "Free tool to generate Lorem Ipsum placeholder text.",
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
						Free <span className="text-primary">Lorem Ipsum Generator</span>
					</h1>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Create standard placeholder text for your design projects. The
						ultimate tool for web designers, developers, and graphic artists.
					</p>
					<QuickActions
						toolName="Lorem Ipsum Generator"
						toolUrl="https://30tools.com/lorem-ipsum-generator"
						showBookmark={true}
						showShare={true}
					/>
				</div>

				<div className="mb-20">
					<LoremIpsumGeneratorTool />
				</div>

				{/* Content Sections */}
				<GeneratorToolFeatures tool={toolData} features={features} />
				<GeneratorToolExamples
					tool={toolData}
					examples={examples}
					title="Use Cases"
				/>

				<div className="mb-20">
					<FAQSection
						faqs={faqs}
						title="Lorem Ipsum FAQ"
						categoryTitle="Typography"
						variant="accordion"
						showSchema={true}
					/>
				</div>

				<div className="mb-20">
					<RelatedTools
						currentTool="lorem-ipsum-generator"
						category="generators"
						tools={relatedTools}
						title="Design Tools"
					/>
				</div>

				<UserComments
					toolId="lorem-ipsum-generator"
					toolName="Lorem Ipsum Generator"
					showStats={true}
					allowComments={true}
				/>
			</div>
		</div>
	);
}
