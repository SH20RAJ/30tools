import BackgroundRemoverTool from "@/components/tools/image/BackgroundRemoverTool";
import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free AI Background Remover Online - Remove BG & Make Transparent",
	description:
		"Remove image backgrounds automatically for free with our AI-powered tool. Create transparent backgrounds for products, portraits, and signatures instantly. 100% private and no signup required.",
	keywords:
		"remove bg free, background remover ai, transparent background maker, remove background from image, online photo editor, 30tools",
	alternates: {
		canonical: "https://30tools.com/background-remover",
	},
	openGraph: {
		title: "Free AI Background Remover Online - Remove BG & Make Transparent",
		description:
			"Remove image backgrounds automatically for free with our AI. Create transparent backgrounds instantly. No signup required.",
		url: "https://30tools.com/background-remover",
		siteName: "30tools",
		images: [{ url: "/api/og?title=AI%20Background%20Remover%20-%20Remove%20BG%20Free" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free AI Background Remover Online - Remove BG & Make Transparent",
		description:
			"Remove image backgrounds automatically for free with our AI. No signup required.",
		images: ["/api/og?title=AI%20Background%20Remover%20-%20Remove%20BG%20Free"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
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
		features: [
			"AI-Powered Removal: Instantly remove backgrounds from images with high precision.",
			"100% Free & Private: All processing happens directly in your browser. No images are uploaded to external servers.",
			"High Quality output: Maintain edge details and original image quality.",
			"Fast Processing: Get your transparent PNG in seconds without waiting in a queue.",
		],
		howTo: {
			name: "How to Remove Image Backgrounds",
			steps: [
				{
					name: "Upload Image",
					text: "Drag and drop your image (JPG, PNG, or WebP) or click to select a file from your device.",
				},
				{
					name: "Process",
					text: "Click the 'Remove Backgrounds' button. Our client-side AI will automatically detect the main subject and remove the background.",
				},
				{
					name: "Download",
					text: "Preview the result and click 'Download' to save your new image with a transparent background.",
				},
			],
		},
		faqs: [
			{
				question: "Is this background remover really free?",
				answer: "Yes! Our tool is 100% free to use with no hidden fees, no subscriptions, and no limits on the number of images you can process.",
			},
			{
				question: "Are my images uploaded to your servers?",
				answer: "No. Privacy is our priority. All background removal processing happens locally within your web browser. Your images never leave your device.",
			},
			{
				question: "What image formats are supported?",
				answer: "You can upload JPG, PNG, and WebP images up to 10MB in size. The output file will always be a high-quality PNG to preserve transparency.",
			},
		],
	};
	const breadcrumbs = [
		{
			name: "Image Tools",
			url: "/image-tools",
		},
		{
			name: "Background Remover",
			url: "/background-remover",
		},
	];
	const relatedTools = [
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
		{
			id: "exif-reader",
			name: "EXIF Reader",
			description:
				"Extract metadata and EXIF data from images including camera settings and GPS location",
			route: "/exif-reader",
			extraSlugs: [
				"view-photo-metadata-online",
				"exif-data-viewer-free",
				"online-exif-reader",
				"photo-metadata-extractor",
				"read-image-metadata",
				"photo-exif-viewer",
				"read-exif-data-online",
				"online-tts-reader",
			],
			popular: true,
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
						name: "Background Remover",
						description: "Remove image backgrounds automatically with AI",
						url: "https://30tools.com/background-remover",
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
				<BackgroundRemoverTool />
			</ToolLayout>
		</>
	);
}
