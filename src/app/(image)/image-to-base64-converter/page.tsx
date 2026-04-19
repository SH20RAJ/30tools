import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolImplementation from "@/components/tools/implementations/ToolImplementation";

export const metadata = {
	title: "Free Image to Base64 Converter Online - Encode Images Instantly",
	description:
		"Convert any image to a Base64 string for free. Easily encode JPEG, PNG, SVG, or WebP images to Base64 format for CSS, HTML, or JSON. 100% private, no signup.",
	keywords:
		"image to base64, base64 converter, encode image to base64 string, base64 encoder online, convert jpg to base64, base64 image generator, 30tools",
	alternates: {
		canonical: "https://30tools.com/image-to-base64-converter",
	},
	openGraph: {
		title: "Free Image to Base64 Converter Online - Encode Images Instantly",
		description:
			"Convert any image to a Base64 string for free. Easily encode JPEG, PNG, SVG, or WebP. No signup required.",
		url: "https://30tools.com/image-to-base64-converter",
		siteName: "30tools",
		images: [{ url: "/api/og?title=Image%20to%20Base64%20Converter" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Image to Base64 Converter Online - Encode Images Instantly",
		description:
			"Convert any image to a Base64 string for free. Easily encode JPEG, PNG, SVG, or WebP. No signup required.",
		images: ["/api/og?title=Image%20to%20Base64%20Converter"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "image-to-base64-converter",
		name: "Image to Base64 Converter",
		description:
			"Instantly encode any image file into a Base64 string for embedding directly into HTML, CSS, or JSON.",
		route: "/image-to-base64-converter",
		extraSlugs: [
			"free-image-to-base64-converter-online",
			"image-to-base64-converter-tool",
		],
		popular: false,
		category: "image",
		features: [
			"Instant Encoding: Convert images to Base64 strings in milliseconds without waiting for server uploads.",
			"Data URI Formatting: Automatically formats the Base64 string into a ready-to-use Data URI (e.g., data:image/png;base64,...).",
			"Multiple Formats: Supports encoding JPG, PNG, GIF, WebP, SVG, and BMP images.",
			"Privacy Guaranteed: All encoding happens securely within your web browser. We never see your images.",
		],
		howTo: {
			name: "How to Convert an Image to Base64",
			steps: [
				{
					name: "Upload Image",
					text: "Drag and drop the image file you want to encode into the tool.",
				},
				{
					name: "Copy the String",
					text: "The tool will instantly generate the Base64 string. Click the 'Copy' button to copy the encoded text.",
				},
				{
					name: "Use in Code",
					text: "Paste the copied Data URI directly into your HTML <img> tag, CSS background-image property, or JSON payload.",
				},
			],
		},
		faqs: [
			{
				question: "What is Base64 encoding?",
				answer: "Base64 is an encoding scheme used to convert binary data (like an image file) into an ASCII string format. This is commonly used to embed images directly into web pages (HTML/CSS) or API payloads without needing external image links.",
			},
			{
				question: "Why should I embed images using Base64?",
				answer: "Embedding small images (like icons or logos) using Base64 can reduce the number of HTTP requests your browser makes, potentially speeding up initial page load times. However, it increases the HTML/CSS file size, so it's best avoided for large photographs.",
			},
			{
				question: "Is there a file size limit?",
				answer: "Because Base64 strings are roughly 33% larger than the original binary file, we recommend only encoding small images (under 1MB) to prevent your browser or code editor from freezing.",
			},
		],
	};
	const breadcrumbs = [
		{
			name: "Image Tools",
			url: "/image-tools",
		},
		{
			name: "Image to Base64 Converter",
			url: "/image-to-base64-converter",
		},
	];
	const relatedTools = [
		{
			id: "background-remover",
			name: "Background Remover",
			description: "Remove image backgrounds automatically with AI",
			route: "/background-remover",
			extraSlugs: [
				"remove-background-from-signature-free",
				"transparent-background-maker",
				"picture-background-eraser",
				"duplicate-line-remover",
				"background-gradient-tool",
				"background-gradient-creator",
			],
			popular: true,
			category: "image",
		},
		{
			id: "base64-to-image-converter",
			name: "Base64 to Image Converter",
			description:
				"Free base64 to image converter tool to process your data instantly with privacy-friendly browser-based workflows.",
			route: "/base64-to-image-converter",
			extraSlugs: [
				"add-text-to-image",
				"all-in-one-unit-converter",
				"audio-converter",
				"audio-converter-mp3",
				"avi-file-to-mp4-online",
				"avi-to-mp4-converter",
				"avi-video-converter",
				"base64-encoder-decoder",
				"base64-image",
				"base64-to-image",
				"base64-to-image-converter-tool",
				"base64-to-text",
				"base64-tool",
				"change-audio-format",
				"change-avi-to-mp4",
				"change-flv-to-mp4",
				"change-image-dimensions",
				"change-m4a-to-mp3",
				"change-mkv-to-mp4",
				"change-mov-to-mp4",
				"change-ogg-to-mp3",
				"change-pdf-orientation",
				"change-video-type",
				"change-wav-to-mp3",
				"change-webm-to-mp4",
				"click-to-chat-whatsapp",
				"compress-files-to-zip",
				"compress-ogg-to-mp3",
				"compress-wav-to-mp3",
				"convert-audio-format",
				"convert-image-to-jpg",
				"convert-picture-to-string",
				"convert-video-format",
				"date-to-epoch",
				"decode-base64-image",
				"document-converter",
				"docx-to-pdf-converter",
				"ebook-format-converter",
				"encode-image-base64",
				"epoch-converter",
				"epoch-to-datetime",
				"epub-converter",
				"file-converter",
				"fit-photo-to-instagram-story",
				"flv-file-to-mp4-online",
				"flv-to-mp4-converter",
				"flv-video-converter",
				"folder-to-zip-converter",
				"format-html-css-js",
				"format-sql-online",
				"free-base64-to-image-converter-online",
				"image-format-changer",
				"image-to-base64",
				"image-to-pdf-converter",
				"insta-story-size-converter",
				"instagram-reels-to-mp4",
				"m4a-audio-converter",
				"m4a-file-to-mp3-online",
				"m4a-to-mp3-converter",
				"m4a-to-mp3-online",
				"md-html-converter",
				"md-to-txt-converter",
				"measurement-converter",
				"metric-imperial-converter",
				"mkv-file-to-mp4-online",
				"mkv-to-mp4-converter",
				"mkv-video-converter",
				"mov-file-to-mp4-online",
				"mov-to-mp4",
				"mov-to-mp4-converter",
				"mov-video-converter",
				"movie-to-mp3-converter",
				"mp3-converter",
				"mp3-converter-online",
				"mp4-audio-converter",
				"mp4-converter-online",
				"mp4-to-mp3",
				"ogg-audio-converter",
				"ogg-file-to-mp3-online",
				"ogg-to-mp3-converter",
				"pdf-to-docx-converter",
				"pdf-to-epub-converter",
				"photos-to-pdf-converter",
				"pptx-to-pdf-converter",
				"quicktime-to-mp4",
				"readme-to-html",
				"save-snaps-to-gallery",
				"text-fo-base64",
				"tiktok-aspect-ratio-converter",
				"tiktok-mp3-converter",
				"tiktok-music-converter",
				"tiktok-to-mp3-online",
				"timestamp-converter",
				"timezone-converter",
				"unit-converter",
				"unix-timestamp-to-date",
				"uppercase-to-lowercase",
				"url-string-converter",
				"url-to-pdf-converter",
				"usd-to-eur-converter",
				"video-converter",
				"video-to-mp3-converter",
				"wav-audio-converter",
				"wav-file-to-mp3-online",
				"wav-to-mp3-converter",
				"webm-file-to-mp4-online",
				"webm-to-mp4-converter",
				"webm-video-converter",
				"world-clock-converter",
				"xlsx-to-pdf-converter",
				"youtube-to-mp3-high-quality",
				"youtube-to-mp4-converter",
			],
			popular: false,
			category: "image",
		},
		{
			id: "convert-to-ico",
			name: "Convert to ICO",
			description:
				"Free convert to ico tool to process your data instantly with privacy-friendly browser-based workflows.",
			route: "/convert-to-ico",
			extraSlugs: [
				"convert-audio-format",
				"convert-avi-to-mp4",
				"convert-doc-to-pdf",
				"convert-epoch-time",
				"convert-flv-to-mp4",
				"convert-html-to-pdf",
				"convert-landscape-to-portrait-video",
				"convert-m4a-to-mp3",
				"convert-md-to-html",
				"convert-mkv-to-mp4",
				"convert-money-online",
				"convert-mov-to-mp4",
				"convert-mp4-to-gif",
				"convert-mp4-to-mp3",
				"convert-mp4-video-to-mp3",
				"convert-ogg-to-mp3",
				"convert-pdf-to-doc",
				"convert-picture-to-string",
				"convert-png-to-favicon",
				"convert-ppt-to-pdf",
				"convert-string-to-binary",
				"convert-text-case",
				"convert-text-to-audio",
				"convert-tiktok-to-mp3",
				"convert-time-across-zones",
				"convert-time-to-timestamp",
				"convert-to-epub-online",
				"convert-to-ico-tool",
				"convert-units-online",
				"convert-video-file-to-mp3",
				"convert-video-format",
				"convert-wav-to-mp3",
				"convert-webm-to-mp4",
				"convert-xls-to-pdf",
				"free-convert-to-ico-online",
			],
			popular: false,
			category: "image",
		},
	];

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: "Image to Base64 Converter",
						description:
							"Free image to base64 converter tool to process your data instantly with privacy-friendly browser-based workflows.",
						url: "https://30tools.com/image-to-base64-converter",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout
				tool={tool}
				breadcrumbs={breadcrumbs}
				relatedTools={relatedTools}
			>
				<ToolImplementation toolId="image-to-base64-converter" />
			</ToolLayout>
		</>
	);
}
