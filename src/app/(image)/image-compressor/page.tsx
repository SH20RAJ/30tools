import Script from "next/script";

export const metadata = {
	title: "Free Image Compressor Online - No Signup | 30tools",
	description:
		"Compress images to reduce file size while maintaining quality. No registration required. Fast, secure, browser-based processing. All processing happens locally in your browser.",
	keywords: [
		"image compressor",
		"image compressor free",
		"image compressor online",
		"image compressor tool",
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

export default async function ImageCompressorPage({
	searchParams,
}: {
	searchParams: Promise<{ lang?: string; variant?: string }>;
}) {
	const params = await searchParams;
	const _lang = params.lang || "en";
	const variant = params.variant;
	const toolData = {
		id: "image-compressor",
		name: "Image Compressor",
		description:
			"Compress images to reduce file size while maintaining quality",
		category: "image",
		route: "/image-compressor",
		features: [
			"Supports JPEG, PNG, WebP, GIF, BMP formats",
			"Batch process multiple images",
			"High-quality output preservation",
			"Adjustable quality and compression settings",
			"100% Free - No hidden costs or subscriptions",
			"No Registration Required - Start immediately",
		],
		benefits: [],
		useCases: [],
		faqs: [
			{
				question: "Is this Image Compressor really free?",
				answer:
					"Yes! Our Image Compressor is completely free to use with no hidden costs, subscriptions, or premium features. You get full access to all functionality without any limitations.",
			},
			{
				question: "Is my data secure when using Image Compressor?",
				answer:
					"Absolutely. All processing happens locally in your browser - your files never leave your device. We don't store, access, or transmit your data, ensuring complete privacy and security.",
			},
			{
				question: "Do I need to create an account to use Image Compressor?",
				answer:
					"No registration required. You can start using Image Compressor immediately without creating an account or providing any personal information.",
			},
			{
				question: "Are there any file size limits for Image Compressor?",
				answer:
					"There are no artificial file size limits. The only limitation is your browser's memory capacity, which can handle most typical files comfortably.",
			},
			{
				question: "Can I use Image Compressor on mobile devices?",
				answer:
					"Yes, Image Compressor is fully responsive and works perfectly on smartphones, tablets, and desktop computers with any modern browser.",
			},
			{
				question: "What file formats does Image Compressor support?",
				answer:
					"Image Compressor supports all major formats for its category. Upload common file types and get converted results in standard output formats compatible with any device or software.",
			},
		],
		howTo: {
			name: "How to Use Image Compressor",
			steps: [
				{
					name: "Upload or Input",
					text: "Provide your file or input data using the upload button or text input field. Image Compressor supports drag-and-drop for convenience.",
					url: "/image-compressor#step1",
					position: 1,
				},
				{
					name: "Configure Settings",
					text: "Choose your desired output format, quality settings, or other options. Customize to match your specific requirements.",
					url: "/image-compressor#step2",
					position: 2,
				},
				{
					name: "Process & Download",
					text: "Click the process button and wait for completion. Once ready, download your result instantly or copy to clipboard.",
					url: "/image-compressor#step3",
					position: 3,
				},
			],
		},
	};

	if (!toolData) return <div>Tool not found</div>;

	// Dynamic Title based on variant
	const displayTitle = variant
		? variant
				.split("-")
				.map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
				.join(" ")
		: "Image Compressor";

	const features = [
		"Bulk Image Compressor (Pack processing)",
		"Compress JPG, PNG, WebP & GIF",
		"Reduce size by up to 90%",
		"No Watermarks",
		"Image compressor without losing quality",
		"100% Free image compressor online",
		"Secure Local Processing",
		"Optimized for Website Speed",
	];

	const examples = [
		{
			title: "Website Optimization",
			description: "Increase SEO ranking",
			input: "Hero Photo (5MB)",
			output: "Web Optimized (500KB)",
		},
		{
			title: "Social Media",
			description: "Fit upload limits",
			input: "High-res Portrait",
			output: "Compressed JPEG",
		},
	];

	return (
		<>
			<Script
				async
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
				crossOrigin="anonymous"
			/>

			<div className="min-h-screen bg-background">
				<div className="container mx-auto px-4 pt-6">
					<BreadcrumbsEnhanced
						customBreadcrumbs={[
							{ name: "Image Tools", url: "/image-tools" },
							{
								name: displayTitle,
								url: variant ? `/${variant}` : "/image-compressor",
							},
						]}
					/>
				</div>

				<main className="container mx-auto px-4 py-8 max-w-6xl">
					{/* Hero Section */}
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-foreground leading-tight">
							Free Online <span className="text-primary">{displayTitle}</span>
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
							Welcome to the best <strong>image compressor free online</strong>{" "}
							utility. Our <strong>{displayTitle} tool</strong> allows you to
							<strong>compress images online</strong> up to 90% while
							maintaining high clarity for websites, social media, and email
							attachments.
						</p>

						<QuickActions
							toolName={displayTitle}
							toolUrl={
								variant
									? `https://30tools.com/${variant}`
									: "https://30tools.com/image-compressor"
							}
							showBookmark={true}
							showShare={true}
						/>
					</div>

					{/* Tool Interface */}
					<div className="bg-card rounded-2xl shadow-2xl border border-border p-6 md:p-10 mb-20">
						<ImageCompressorTool />
					</div>

					{/* SEO Content Section */}
					<section className="mb-20 prose prose-slate dark:prose-invert max-w-none">
						<h2 className="text-3xl font-bold mb-8 text-center md:text-left">
							Lossless Picture Compressor Free Online
						</h2>
						<div className="bg-primary/5 p-8 rounded-3xl border border-primary/10 space-y-4">
							<p>Optimize your images for the web anonymously and securely.</p>
						</div>
					</section>

					{/* Features & Examples */}
					{/* @ts-ignore */}
					<GeneratorToolFeatures tool={toolData} features={features} />
					{/* @ts-ignore */}
					<GeneratorToolExamples
						tool={toolData}
						examples={examples}
						title="Compression Benchmarks"
					/>

					{/* User Reviews & Comments */}
					<div className="mb-12">
						<UserComments
							toolId="image-compressor"
							toolName="Image Compressor"
							showStats={true}
							allowComments={true}
						/>
					</div>

					{/* Related Tools */}
					<div className="mb-12">
						{/* @ts-ignore */}
						<RelatedTools
							currentTool="image-compressor"
							category="image"
							tools={[
								{
									id: "image-resizer",
									name: "Image Resizer",
									description: "Resize dimensions",
									route: "/image-resizer",
									category: "image",
								},
								{
									id: "image-converter",
									name: "Image Converter",
									description: "Convert formats",
									route: "/image-converter",
									category: "image",
								},
							]}
							title="More Graphics Tools"
						/>
					</div>
				</main>
			</div>

			<Script
				id="ads"
				dangerouslySetInnerHTML={{
					__html: `(adsbygoogle = window.adsbygoogle || []).push({});`.repeat(
						3,
					),
				}}
			/>
		</>
	);
}
