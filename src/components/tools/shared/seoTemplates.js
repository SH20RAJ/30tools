/**
 * SEO Templates for 30tools Dynamic Content Engine
 * These templates provide high-quality fallback content for tools missing specific SEO data.
 */

export const getDynamicSEOContent = (tool) => {
	const { name, category } = tool;

	const templates = {
		downloaders: {
			article: DOWNLOADER_ARTICLE,
			features: [
				`High-Quality ${name} Processing`,
				"100% Free & No Registration Required",
				"Secure & Private Browser-Based Workflow",
				"Instant Downloads with Zero Latency",
				"Compatible with All Modern Devices",
				"No Hidden Costs or Premium Limits",
			],
			howTo: {
				name: `How to use ${name}`,
				steps: [
					{
						name: "Copy the Link",
						text: `Navigate to the content you wish to save and copy the direct URL from your browser's address bar.`,
					},
					{
						name: "Paste in ${name}",
						text: `Go to our ${name} page and paste the link into the designated input field at the top.`,
					},
					{
						name: "Fetch & Download",
						text: `Click the download button. Our engine will instantly process the link and provide your file.`,
					},
				],
			},
			faqs: [
				{
					question: `Is ${name} really free to use?`,
					answer: `Yes, ${name} is 100% free with no hidden charges. You can use it as many times as you need without any restrictions.`,
				},
				{
					question: `Do I need to sign up for ${name}?`,
					answer: `No signup or registration is required. We believe in providing a seamless experience, so you can start using our tools immediately.`,
				},
				{
					question: `Is it safe to use ${name} on my device?`,
					answer: `Absolutely. All processing happens securely. We do not store your files or track your activity, ensuring maximum privacy.`,
				},
				{
					question: `Does ${name} work on mobile phones?`,
					answer: `Yes, all our tools are fully responsive and work perfectly on Android, iOS (iPhone/iPad), and desktop browsers.`,
				},
			],
		},
		image: {
			article: IMAGE_ARTICLE,
			features: [
				"Professional Quality AI Optimization",
				"Lightning-Fast Image Processing",
				"Supports PNG, JPG, WEBP and more",
				"Completely Free & No Upload Limits",
				"Privacy-Focused Browser Processing",
			],
			howTo: {
				name: `How to use ${name}`,
				steps: [
					{
						name: "Select Your Image",
						text: `Upload or drag and drop your files into the ${name} workspace.`,
					},
					{
						name: "Auto-Processing",
						text: `Our engine will instantly apply the necessary optimizations according to your settings.`,
					},
					{
						name: "Download Result",
						text: `Once finished, click the download button to save your optimized file.`,
					},
				],
			},
			faqs: [
				{
					question: `Does ${name} reduce image quality?`,
					answer: `Our tool is designed to maintain the highest possible quality while performing its task efficiently.`,
				},
				{
					question: `Is there a limit to how many images I can process?`,
					answer: `No, you can use ${name} as many times as you want. There are no daily or hourly limits.`,
				},
			],
		},
		pdf: {
			article: PDF_ARTICLE,
			features: [
				"Bank-Grade Document Security",
				"Precise PDF Manipulation",
				"Maintains Original Formatting",
				"Works on All Operating Systems",
				"No Software Installation Required",
			],
			howTo: {
				name: `How to use ${name}`,
				steps: [
					{
						name: "Upload PDF",
						text: `Click the upload area to select the PDF file you wish to process.`,
					},
					{
						name: "Apply Action",
						text: `The ${name} will automatically process your document with high precision.`,
					},
					{
						name: "Secure Download",
						text: `Your new document will be ready for download instantly.`,
					},
				],
			},
			faqs: [
				{
					question: `Are my documents stored on your servers?`,
					answer: `No. We value your privacy. Your documents are processed and then immediately purged from our system.`,
				},
				{
					question: `Can I use ${name} on my smartphone?`,
					answer: `Yes, our PDF suite is fully mobile-optimized for usage on the go.`,
				},
			],
		},
	};

	// Default to 'downloaders' if category not found or is generic
	const template = templates[category] || templates.downloaders;

	return {
		features: template.features,
		howTo: {
			...template.howTo,
			steps: template.howTo.steps.map((step) => ({
				...step,
				name: step.name.replaceAll("${name}", name),
				text: step.text.replaceAll("${name}", name),
			})),
		},
		faqs: template.faqs.map((faq) => ({
			...faq,
			question: faq.question.replaceAll("${name}", name),
			answer: faq.answer.replaceAll("${name}", name),
		})),
		article: template.article?.replaceAll("${name}", name),
	};
};

const DOWNLOADER_ARTICLE = `
## Why use our \${name}?

Our \${name} is designed for users who need a fast, reliable, and secure way to save content for offline viewing. In today's digital age, content portability is essential. Whether you are traveling, have a poor internet connection, or simply want to archive your favorite media, this tool provides a seamless 100% free solution.

### Key Benefits of using our toolkit:
- **No Installation Required**: Run everything directly in your browser.
- **Privacy First**: We do not store your download history or personal data.
- **High-Speed Processing**: Get your files in seconds thanks to our optimized downloader engine.
- **Universal Compatibility**: Works on any device with a modern web browser, including iOS and Android.

### High-Resolution Downloads
We strive to provide the highest quality available for each source. Our engine automatically detects the best possible resolution so you don't have to compromise on visual quality. Experience the best way to download content online with 30tools.
`;

const IMAGE_ARTICLE = `
## Professional \${name} Utilities

Optimizing images for the web is a critical task for developers and designers alike. Our \${name} provides pro-grade performance without the complexity of traditional desktop software. By leveraging modern browser APIs, we ensure your images are processed locally, keeping your bandwidth low and your privacy high.

### Optimized for Web Performance
Whether you are improving a blog's load speed or preparing assets for an app, our toolkit helps you achieve the perfect balance between file size and visual fidelity. No signup, no watermarks, and zero cost.
`;

const PDF_ARTICLE = `
## Secure \${name} for Modern Workflows

Managing documents online requires a high level of trust and security. Our \${name} suite is built with a zero-storage policy, meaning your sensitive PDF documents are processed and immediately removed from memory. Efficiency and security go hand in hand at 30tools.

### Professional Quality, Zero Cost
From merging to splitting and converting, our PDF tools maintain the structural integrity of your documents while ensuring they are ready for any professional use case. Use our toolkit anytime, anywhere, for free.
`;

