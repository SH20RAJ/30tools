
export const metadata = {
  title: "Free Internet Speed Test Online - No Signup | 30tools",
  description: "Free utility tools: Internet Speed Test. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use. All processing happens locally in your br",
  keywords: ["internet speed test","internet speed test free","internet speed test online","internet speed test tool"],
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

const jsonLd = generateToolJsonLd("internet-speed-test", "utilities", {
	name: "Internet Speed Test",
	description:
		"Measure download speed, upload speed, ping, and jitter with a free browser-based internet speed test.",
});

export default async function InternetSpeedTestPage({ searchParams }) {
	const params = await searchParams;
	const lang = params.lang || "en";
	const toolData = {
  "id": "internet-speed-test",
  "name": "Internet Speed Test",
  "description": "Check your internet connection speed online free. Measure your download speed, upload speed, and ping instantly.",
  "category": "utilities",
  "route": "/internet-speed-test",
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
      "question": "Is this Internet Speed Test really free?",
      "answer": "Yes! Our Internet Speed Test is completely free to use with no hidden costs, subscriptions, or premium features. You get full access to all functionality without any limitations."
    },
    {
      "question": "Is my data secure when using Internet Speed Test?",
      "answer": "Absolutely. All processing happens locally in your browser - your files never leave your device. We don't store, access, or transmit your data, ensuring complete privacy and security."
    },
    {
      "question": "Do I need to create an account to use Internet Speed Test?",
      "answer": "No registration required. You can start using Internet Speed Test immediately without creating an account or providing any personal information."
    },
    {
      "question": "Are there any file size limits for Internet Speed Test?",
      "answer": "There are no artificial file size limits. The only limitation is your browser's memory capacity, which can handle most typical files comfortably."
    },
    {
      "question": "Can I use Internet Speed Test on mobile devices?",
      "answer": "Yes, Internet Speed Test is fully responsive and works perfectly on smartphones, tablets, and desktop computers with any modern browser."
    },
    {
      "question": "What file formats does Internet Speed Test support?",
      "answer": "Internet Speed Test supports all major formats for its category. Upload common file types and get converted results in standard output formats compatible with any device or software."
    }
  ],
  "howTo": {
    "name": "How to Use Internet Speed Test",
    "steps": [
      {
        "name": "Upload or Input",
        "text": "Provide your file or input data using the upload button or text input field. Internet Speed Test supports drag-and-drop for convenience.",
        "url": "/internet-speed-test#step1",
        "position": 1
      },
      {
        "name": "Configure Settings",
        "text": "Choose your desired output format, quality settings, or other options. Customize to match your specific requirements.",
        "url": "/internet-speed-test#step2",
        "position": 2
      },
      {
        "name": "Process & Download",
        "text": "Click the process button and wait for completion. Once ready, download your result instantly or copy to clipboard.",
        "url": "/internet-speed-test#step3",
        "position": 3
      }
    ]
  }
};

	const features = [
		"Accurate Download Speed Test",
		"Upload Speed Measurement",
		"Ping & Jitter Analysis",
		"Global Server Network",
		"Works on Mobile & Desktop",
		"No App Installation Required",
		"Real-time Graphs",
		"History Tracking",
	];

	const examples = [
		{
			title: "Streaming Quality",
			description: "Check if you can stream 4K",
			input: "Run Test",
			output: "25+ Mbps required for 4K UHD",
		},
		{
			title: "Gaming Ping",
			description: "Latency check for gamers",
			input: "Run Test",
			output: "Low ping (<20ms) is ideal for gaming",
		},
		{
			title: "Video Calls",
			description: "Zoom/Teams stability",
			input: "Run Test",
			output: "Upload speed check for clear video",
		},
	];

	const faqs = [
		{
			question: "What is a good internet speed?",
			answer:
				"For general browsing, 10-25 Mbps is sufficient. For 4K streaming and gaming, aim for 50-100 Mbps or higher.",
		},
		{
			question: "Why is my upload speed lower than download?",
			answer:
				"Most home internet plans are asymmetrical, prioritizing download speed because users consume more content than they upload.",
		},
		{
			question: "Does this work on mobile data?",
			answer:
				"Yes, our speed test works on 4G, 5G, LTE, and Wi-Fi networks on all mobile devices.",
		},
	];

	const relatedTools = [
		{
			id: "url-shortener",
			name: "URL Shortener",
			description: "Shorten long links",
			route: "/url-shortener",
			category: "utilities",
		},
		{
			id: "base64-tool",
			name: "Base64 Tool",
			description: "Encode/Decode Base64",
			route: "/base64-tool",
			category: "developer-tools",
		},
		{
			id: "jwt-decoder",
			name: "JWT Decoder",
			description: "Decode JSON Web Tokens",
			route: "/jwt-decoder",
			category: "developer-tools",
		},
	];

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<div className="min-h-screen bg-background">
				<div className="container mx-auto px-4 py-12 md:py-20 max-w-5xl">
					<div className="text-center space-y-4 mb-12">
						<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
							Free <span className="text-primary">Internet Speed Test</span>
						</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Check your broadband or mobile internet speed in seconds. Reliable
							measurement of download, upload, and latency.
						</p>
						<QuickActions
							toolName="Speed Test"
							toolUrl="https://30tools.com/internet-speed-test"
							showBookmark={true}
							showShare={true}
						/>
					</div>

					<div className="mb-20">
						<InternetSpeedTestTool />
					</div>

					{/* Content Sections */}
					<GeneratorToolFeatures tool={toolData} features={features} />
					<GeneratorToolExamples
						tool={toolData}
						examples={examples}
						title="Why Test Your Speed?"
					/>

					<div className="mb-20">
						<FAQSection
							faqs={faqs}
							title="Speed Test FAQ"
							categoryTitle="Internet Performance"
							variant="accordion"
							showSchema={true}
						/>
					</div>

					<div className="mb-20">
						<RelatedTools
							currentTool="internet-speed-test"
							category="utilities"
							tools={relatedTools}
							title="More Utility Tools"
						/>
					</div>

					<UserComments
						toolId="internet-speed-test"
						toolName="Internet Speed Test"
						showStats={true}
						allowComments={true}
					/>
				</div>
			</div>
		</>
	);
}
