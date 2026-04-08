const fs = require("fs");

// Read the tools.json file
const toolsData = JSON.parse(
	fs.readFileSync("src/constants/tools.json", "utf8"),
);

// Helper to create SEO-optimized title
function generateTitle(tool, category) {
	const baseName = tool.name;
	const modifiers = {
		image: "Free Image Tool",
		pdf: "Free PDF Tool",
		video: "Video Tool",
		youtube: "YouTube Tool",
		downloaders: "Free Downloader",
		text: "Text Tool",
		developer: "Developer Tool",
		utilities: "Free Utility",
		seo: "SEO Tool",
		generators: "Generator Tool",
		audio: "Audio Tool",
	};
	const modifier = modifiers[category] || "Free Online Tool";
	// Keep under 60 chars
	const title = `${baseName} - ${modifier} | 30tools`;
	return title.length > 60 ? `${baseName} Free Online | 30tools` : title;
}

// Helper to create SEO-optimized meta description
function generateMetaDescription(tool, category) {
	const baseDesc = tool.description || "";
	const keywords = tool.keywords || [];
	const primaryKeyword = tool.name.toLowerCase();

	// Templates by category
	const templates = {
		image: `Convert, resize, and edit images with our free ${tool.name}. No registration required. Fast, secure, browser-based processing.`,
		pdf: `Professional PDF tools: ${tool.name}. Merge, split, compress, convert. 100% free, no watermarks, works on all devices.`,
		video: `Free video tools: ${tool.name}. Download, convert, edit videos online. High quality, fast processing, no installation.`,
		youtube: `YouTube tools: ${tool.name}. Download thumbnails, get stats, optimize videos. Free, fast, and secure.`,
		downloaders: `Free ${tool.name}. Download videos from multiple platforms. HD quality, no watermarks, instant downloads.`,
		text: `Free text tools: ${tool.name}. Format, convert, manipulate text. Instant results, copy to clipboard, no limits.`,
		developer: `Developer tools: ${tool.name}. Format, validate, convert code/data. Fast, accurate, essential for programmers.`,
		utilities: `Free utility tools: ${tool.name}. Convert units, compress files, shorten URLs. Fast, accurate, and easy to use.`,
		seo: `SEO tools: ${tool.name}. Analyze, optimize, improve search rankings. Free, professional, instant results.`,
		generators: `AI-powered ${tool.name}. Generate content, images, and more. Free, unlimited, no signup required.`,
		audio: `Audio tools: ${tool.name}. Convert, edit, enhance audio files. Support for MP3, WAV, FLAC. Free and fast.`,
	};

	let desc =
		templates[category] ||
		`Free ${tool.name} online tool. Fast, secure, and easy to use. No registration required.`;

	// Ensure 150-160 chars
	if (desc.length > 160) {
		desc = desc.substring(0, 157) + "...";
	} else if (desc.length < 150) {
		desc +=
			" All processing happens locally in your browser for complete privacy and security.";
	}

	return desc.substring(0, 160);
}

// Generate features list
function generateFeatures(tool, category) {
	const existing = tool.features || [];
	if (existing.length >= 4) return existing;

	const baseFeatures = [
		"100% Free - No hidden costs or subscriptions",
		"No Registration Required - Start immediately",
		"Secure & Private - All processing in your browser",
		"Fast & Efficient - Get results in seconds",
		"No File Size Limits - Handle large files easily",
		"Mobile Friendly - Works on all devices",
		"No Watermarks - Professional quality results",
		"Easy to Use - Simple, intuitive interface",
	];

	const categorySpecific = {
		image: [
			"Supports JPEG, PNG, WebP, GIF, BMP formats",
			"Batch process multiple images",
			"High-quality output preservation",
			"Adjustable quality and compression settings",
		],
		pdf: [
			"Merge unlimited PDF files",
			"Split by pages or ranges",
			"Compress without quality loss",
			"Add password protection",
			"Convert images to PDF",
		],
		video: [
			"Support for MP4, AVI, MOV, MKV",
			"HD quality output",
			"Fast cloud processing",
			"Convert to GIF animations",
			"Extract audio from video",
		],
		downloaders: [
			"HD video downloads with audio",
			"Support multiple platforms (YouTube, TikTok, Instagram)",
			"Direct download links",
			"Multiple format options (MP4, MP3, WEBM)",
			"Batch download capability",
		],
		text: [
			"Real-time text processing",
			"Copy to clipboard with one click",
			"Support for large text inputs",
			"Multiple formatting options",
			"Export in various formats",
		],
		developer: [
			"Syntax highlighting",
			"Multiple language support",
			"Validation & error checking",
			"Export formatted code",
			"API integration available",
		],
	};

	// Build features list ensuring uniqueness
	const features = [...existing];
	const allPossible = categorySpecific[category]
		? [...categorySpecific[category], ...baseFeatures]
		: baseFeatures;

	for (const feat of allPossible) {
		if (features.length >= 6) break;
		if (!features.includes(feat)) {
			features.push(feat);
		}
	}

	return features;
}

// Generate FAQs based on common questions for tool type
function generateFAQs(tool, category) {
	const existing = tool.faqs || [];
	if (existing.length >= 5) return existing;

	const toolName = tool.name;
	const commonFAQs = [
		{
			question: `Is this ${toolName} really free?`,
			answer: `Yes! Our ${toolName} is completely free to use with no hidden costs, subscriptions, or premium features. You get full access to all functionality without any limitations.`,
		},
		{
			question: `Is my data secure when using ${toolName}?`,
			answer: `Absolutely. All processing happens locally in your browser - your files never leave your device. We don't store, access, or transmit your data, ensuring complete privacy and security.`,
		},
		{
			question: `Do I need to create an account to use ${toolName}?`,
			answer: `No registration required. You can start using ${toolName} immediately without creating an account or providing any personal information.`,
		},
		{
			question: `Are there any file size limits for ${toolName}?`,
			answer: `There are no artificial file size limits. The only limitation is your browser's memory capacity, which can handle most typical files comfortably.`,
		},
		{
			question: `Can I use ${toolName} on mobile devices?`,
			answer: `Yes, ${toolName} is fully responsive and works perfectly on smartphones, tablets, and desktop computers with any modern browser.`,
		},
		{
			question: `What file formats does ${toolName} support?`,
			answer: `${toolName} supports all major formats for its category. Upload common file types and get converted results in standard output formats compatible with any device or software.`,
		},
		{
			question: `How does ${toolName} compare to other online tools?`,
			answer: `${toolName} stands out with its 100% free model, no watermarks, browser-based processing (no uploads), and professional-quality results. Try it and see the difference!`,
		},
	];

	// Add category-specific FAQs if needed
	const categoryFAQs = {
		downloaders: [
			{
				question: `What video platforms does ${toolName} support?`,
				answer: `${toolName} supports downloading from YouTube, TikTok, Instagram, Twitter, Facebook, and many more. Our universal downloader handles most popular video platforms.`,
			},
			{
				question: `Can I download videos in HD quality?`,
				answer: `Yes! ${toolName} provides the highest available quality, often up to 4K resolution, ensuring you get crystal-clear downloads.`,
			},
		],
		image: [
			{
				question: `Will ${toolName} reduce image quality?`,
				answer: `${toolName} maintains excellent quality even after compression or conversion. You can adjust quality settings to find the perfect balance between file size and visual fidelity.`,
			},
		],
		pdf: [
			{
				question: `Is ${toolName} safe for sensitive PDF documents?`,
				answer: `Yes, ${toolName} is 100% safe for sensitive documents. Since all processing happens locally in your browser, your files never leave your device, ensuring total privacy.`,
			},
		],
	};

	const faqs = [...existing];
	const additional = categoryFAQs[category] || [];

	// Combine and deduplicate
	const allFAQs = [...commonFAQs, ...additional];
	for (const faq of allFAQs) {
		if (faqs.length >= 6) break;
		const exists = faqs.some(
			(f) => f.question.toLowerCase() === faq.question.toLowerCase(),
		);
		if (!exists) {
			faqs.push(faq);
		}
	}

	return faqs;
}

// Generate HowTo steps
function generateHowTo(tool, category) {
	if (tool.howTo && tool.howTo.steps && tool.howTo.steps.length >= 3) {
		return tool.howTo;
	}

	const baseSteps = [
		{
			name: "Upload or Input",
			text: `Provide your file or input data using the upload button or text input field. ${tool.name} supports drag-and-drop for convenience.`,
			url: `${tool.route}#step1`,
		},
		{
			name: "Configure Settings",
			text: "Choose your desired output format, quality settings, or other options. Customize to match your specific requirements.",
			url: `${tool.route}#step2`,
		},
		{
			name: "Process & Download",
			text: "Click the process button and wait for completion. Once ready, download your result instantly or copy to clipboard.",
			url: `${tool.route}#step3`,
		},
	];

	const categorySpecific = {
		downloaders: [
			{
				name: "Paste URL",
				text: "Copy the video link from your platform and paste it into the input box above.",
				url: `${tool.route}#step1`,
			},
			{
				name: "Select Quality",
				text: "Choose your preferred video quality and format (MP4, MP3, etc.).",
				url: `${tool.route}#step2`,
			},
			{
				name: "Download",
				text: "Click the download button to get your file instantly.",
				url: `${tool.route}#step3`,
			},
		],
		converters: [
			{
				name: "Upload Source File",
				text: "Select the file you want to convert from your device.",
				url: `${tool.route}#step1`,
			},
			{
				name: "Choose Output Format",
				text: "Select the target format from the available options.",
				url: `${tool.route}#step2`,
			},
			{
				name: "Download Converted File",
				text: "Wait for conversion and download your new file.",
				url: `${tool.route}#step3`,
			},
		],
	};

	const steps = categorySpecific[category] || baseSteps;

	return {
		name: `How to Use ${tool.name}`,
		steps: steps.map((step, idx) => ({
			...step,
			position: idx + 1,
		})),
	};
}

// Process all tools
let updatedCount = 0;
let totalTools = 0;

Object.entries(toolsData.categories).forEach(([catKey, category]) => {
	if (!category.tools) return;

	category.tools.forEach((tool) => {
		totalTools++;

		// Only optimize tools with KD < 10
		if (tool.seoMetrics && tool.seoMetrics.kd < 10) {
			let changed = false;

			// Generate and set SEO title
			if (!tool.seoTitle || tool.seoTitle.length === 0) {
				tool.seoTitle = generateTitle(tool, catKey);
				changed = true;
			}

			// Generate and set SEO description
			if (!tool.seoDescription || tool.seoDescription.length === 0) {
				tool.seoDescription = generateMetaDescription(tool, catKey);
				changed = true;
			}

			// Enhance description if too short
			if (!tool.description || tool.description.length < 100) {
				// Keep existing if decent length, otherwise use a generated one
				if (tool.description) {
					// Already has some description, keep it
				} else {
					tool.description =
						generateMetaDescription(tool, catKey).split(".")[0] + ".";
					changed = true;
				}
			}

			// Ensure features are comprehensive
			if (!tool.features || tool.features.length < 4) {
				tool.features = generateFeatures(tool, catKey);
				changed = true;
			}

			// Ensure FAQs are comprehensive
			if (!tool.faqs || tool.faqs.length < 5) {
				tool.faqs = generateFAQs(tool, catKey);
				changed = true;
			}

			// Ensure HowTo steps exist
			if (!tool.howTo || !tool.howTo.steps || tool.howTo.steps.length < 3) {
				tool.howTo = generateHowTo(tool, catKey);
				changed = true;
			}

			// Add keywords array if missing
			if (!tool.keywords) {
				const nameWords = tool.name.toLowerCase().split(" ");
				const keywords = [
					tool.name.toLowerCase(),
					`${tool.name.toLowerCase()} free`,
					`${tool.name.toLowerCase()} online`,
					`${tool.name.toLowerCase()} tool`,
				];
				tool.keywords = [...new Set(keywords)].slice(0, 5);
				changed = true;
			}

			if (changed) {
				updatedCount++;
				console.log(
					`✓ Updated ${tool.id} (KD: ${tool.seoMetrics.kd}, Volume: ${tool.seoMetrics.volume})`,
				);
			}
		}
	});
});

// Write back the updated tools.json
fs.writeFileSync(
	"src/constants/tools.json",
	JSON.stringify(toolsData, null, 2),
);

console.log(`\n✅ SEO Optimization Complete!`);
console.log(`Total tools processed: ${totalTools}`);
console.log(`Tools updated: ${updatedCount}`);
console.log(
	`Tools with KD < 10: ${toolsData.categories ? Object.values(toolsData.categories).reduce((acc, cat) => acc + (cat.tools ? cat.tools.filter((t) => t.seoMetrics && t.seoMetrics.kd < 10).length : 0), 0) : 0}`,
);
