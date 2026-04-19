import ImageResizerTool from "@/components/tools/image/ImageResizerTool";
import ToolLayout from "@/components/tools/shared/ToolLayout";

export const metadata = {
	title: "Free Image Resizer Online - Resize Without Losing Quality",
	description:
		"Easily resize your images for social media, websites, or personal use. Change image dimensions, aspect ratios, and file sizes instantly without losing quality. 100% free and no signup required.",
	keywords:
		"image resizer, resize image without losing quality, change image dimensions online, image resizer for social media, photo resizer, 30tools, free image scaler",
	alternates: {
		canonical: "https://30tools.com/image-resizer",
	},
	openGraph: {
		title: "Free Image Resizer Online - Resize Without Losing Quality",
		description:
			"Change image dimensions and aspect ratios instantly. High-quality image resizing for social media and web. No signup required.",
		url: "https://30tools.com/image-resizer",
		siteName: "30tools",
		images: [{ url: "/api/og?title=Image%20Resizer%20-%20Resize%20Without%20Losing%20Quality" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Image Resizer Online - Resize Without Losing Quality",
		description:
			"Change image dimensions and aspect ratios instantly. No signup required.",
		images: ["/api/og?title=Image%20Resizer%20-%20Resize%20Without%20Losing%20Quality"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "image-resizer",
		name: "Image Resizer",
		description: "Resize images with custom dimensions and aspect ratios",
		route: "/image-resizer",
		extraSlugs: [
			"facebook-cover-resizer",
			"free-image-resizer-online",
			"ig-story-image-resizer",
			"linkedin-banner-resizer",
			"photo-resizer-free",
			"resize-image-for-etsy-banner",
			"social-media-resizer",
		],
		popular: false,
		category: "image",
		features: [
			"Custom Dimensions: Enter exact pixel width and height for precise resizing.",
			"Aspect Ratio Lock: Maintain original proportions to prevent distortion or stretching.",
			"Social Media Ready: Quickly scale images for Instagram, Facebook, LinkedIn, or Twitter banners.",
			"100% Private & Free: Your photos are resized entirely within your browser and never uploaded anywhere.",
		],
		howTo: {
			name: "How to Resize an Image Online",
			steps: [
				{
					name: "Upload Image",
					text: "Drag and drop the photo you want to resize, or click to browse your device.",
				},
				{
					name: "Enter Dimensions",
					text: "Input the new width or height in pixels. Keep the 'lock aspect ratio' option checked to avoid distorting the image.",
				},
				{
					name: "Download",
					text: "Click 'Resize' and instantly download your newly dimensioned image.",
				},
			],
		},
		faqs: [
			{
				question: "Will resizing my image reduce its quality?",
				answer: "If you are making the image smaller (downscaling), the quality will be preserved. However, if you are making it significantly larger (upscaling), it may become pixelated or blurry because new pixels have to be generated.",
			},
			{
				question: "Is this image resizer really free to use?",
				answer: "Yes, our tool is completely free. There are no watermarks added, no premium features hidden behind paywalls, and no account required to use it.",
			},
			{
				question: "Are my photos uploaded to the internet?",
				answer: "No. Our resizer works directly in your web browser utilizing your device's processing power. We do not upload, store, or view your images.",
			},
		],
	};
	const breadcrumbs = [
		{
			name: "Image Tools",
			url: "/image-tools",
		},
		{
			name: "Image Resizer",
			url: "/image-resizer",
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
						name: "Image Resizer",
						description:
							"Resize images with custom dimensions and aspect ratios",
						url: "https://30tools.com/image-resizer",
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
				<ImageResizerTool />
			</ToolLayout>
		</>
	);
}
