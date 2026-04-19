import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolImplementation from "@/components/tools/implementations/ToolImplementation";

export const metadata = {
	title: "Free Image Cropper Online - Crop Photo into Square or Circle",
	description:
		"Crop images easily with our free online photo cropper. Create square, circle, or custom aspect ratio crops for Instagram, Facebook, and Twitter. 100% private and no signup required.",
	keywords:
		"image cropper, crop photo online, square photo cropper, circle image crop, free picture cropper, 30tools, resize and crop image",
	alternates: {
		canonical: "https://30tools.com/image-cropper",
	},
	openGraph: {
		title: "Free Image Cropper Online - Crop Photo into Square or Circle",
		description:
			"Crop images easily with our free online photo cropper. Create square, circle, or custom aspect ratio crops instantly. No signup required.",
		url: "https://30tools.com/image-cropper",
		siteName: "30tools",
		images: [{ url: "/api/og?title=Image%20Cropper%20-%20Crop%20Photos%20Online" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Image Cropper Online - Crop Photo into Square or Circle",
		description:
			"Crop images easily with our free online photo cropper. No signup required.",
		images: ["/api/og?title=Image%20Cropper%20-%20Crop%20Photos%20Online"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "image-cropper",
		name: "Image Cropper",
		description:
			"Crop images with custom aspect ratios, perfect for social media profiles and posts.",
		route: "/image-cropper",
		extraSlugs: [
			"free-image-cropper-online",
			"image-cropper-tool",
			"square-photo-cropper",
			"free-picture-cropper",
		],
		popular: false,
		category: "image",
		features: [
			"Fixed Aspect Ratios: Easily crop your images to 1:1 (Square), 16:9, 4:3, or 3:2 for perfect social media posts.",
			"Freeform Cropping: Drag the handles to crop your photo to any custom size you need.",
			"High Resolution: Your cropped image retains its original high quality and clarity.",
			"100% Private: Cropping happens directly in your browser. We never upload your photos to any servers.",
		],
		howTo: {
			name: "How to Crop an Image Online",
			steps: [
				{
					name: "Upload Image",
					text: "Drag and drop your photo into the cropper, or click to browse files.",
				},
				{
					name: "Select Crop Area",
					text: "Choose a preset aspect ratio or drag the corners of the crop box to frame your image.",
				},
				{
					name: "Crop and Download",
					text: "Click the 'Crop Image' button, preview your result, and download the finished image.",
				},
			],
		},
		faqs: [
			{
				question: "Can I crop my photo into a perfect square?",
				answer: "Yes! Just select the 1:1 aspect ratio option. This is perfect for Instagram posts and profile pictures across all social media platforms.",
			},
			{
				question: "Will my image lose quality when cropped?",
				answer: "No. The cropper only removes the unwanted pixels outside your selected area. The remaining pixels are preserved in their original, high-quality state.",
			},
			{
				question: "Is this image cropper safe to use for personal photos?",
				answer: "Absolutely. Our cropper uses client-side processing, meaning the image never leaves your computer. We do not store or see your photos.",
			},
		],
	};
	const breadcrumbs = [
		{
			name: "Image Tools",
			url: "/image-tools",
		},
		{
			name: "Image Cropper",
			url: "/image-cropper",
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
						name: "Image Cropper",
						description:
							"Free image cropper tool to process your data instantly with privacy-friendly browser-based workflows.",
						url: "https://30tools.com/image-cropper",
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
				<ToolImplementation toolId="image-cropper" />
			</ToolLayout>
		</>
	);
}
