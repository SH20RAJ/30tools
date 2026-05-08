import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";
import { getToolById } from "@/lib/tools";
import { notFound } from "next/navigation";


export const metadata = {
	title: "Free Image Compressor Online – Fast & No Signup | 30tools",
	description: "Compress images online for free without losing quality. Reduce file size of JPG, PNG, and WebP images instantly. Secure, browser-based processing.",
	keywords: "image compressor, free image compressor, online image compressor, no signup, 30tools, compress jpg, compress png",
	alternates: {
		canonical: "https://30tools.com/image-compressor",
	},
	openGraph: {
		title: "Free Image Compressor Online – Fast & No Signup | 30tools",
		description: "Compress images online for free without losing quality. Reduce file size of JPG, PNG, and WebP images instantly. Secure, browser-based processing.",
		url: "https://30tools.com/image-compressor",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Image Compressor Online – Fast & No Signup | 30tools",
		description: "Compress images online for free without losing quality. Reduce file size of JPG, PNG, and WebP images instantly. Secure, browser-based processing.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "image-compressor",
        "name": "Image Compressor",
        "description": "Compress images online for free without losing quality. Reduce file size of JPG, PNG, and WebP images instantly. Secure, browser-based processing.",
        "route": "/image-compressor",
        "extraSlugs": [
                "compress-jpeg",
                "compress-png",
                "free-image-compressor"
        ],
        "popular": true,
        "category": "image",
		"features": [
			"Smart Lossy & Lossless Compression Modes",
			"Supports JPG, PNG, WEBP, and AVIF formats",
			"Preserves Alpha/Transparency Channels",
			"Batch Processing Support (Multiple Files at Once)",
			"Strips EXIF Data for Privacy (Optional)",
			"100% Client-Side — Photos Never Leave Your Device"
		],
		"article": `
## Optimize Images for the Web Without Losing Clarity
Large image files are the primary cause of slow website loading times, which can hurt your Google rankings and user experience. Our Image Compressor uses modern quantization algorithms (like MozJPEG and UPNG) to reduce file sizes by up to 80% while keeping your photos sharp and visually identical to the original.

### Lossy vs Lossless Compression
- **Lossless:** Reduces file size by stripping unnecessary metadata and optimizing data encoding without removing any pixel data. Perfect for graphics and logos.
- **Lossy:** Intelligently discards microscopic color variations that the human eye cannot detect. Highly recommended for photographs and web publishing to achieve maximum size reduction.

### Privacy and Security
Unlike older compression sites that force you to upload your personal photos to a remote server, our tool utilizes WebAssembly to run the compression engines directly in your browser. Your images are secure, and processing is instantaneous regardless of your internet upload speed.
		`,
		"howTo": {
			"name": "How to Compress Images",
			"steps": [
				{
					"name": "Select Images",
					"text": "Drag and drop one or multiple images into the compression area. We support batch processing."
				},
				{
					"name": "Choose Compression Level",
					"text": "Adjust the quality slider. We recommend 80-85% for standard web usage, which offers the best balance between size and quality."
				},
				{
					"name": "Compare Before & After",
					"text": "Review the visual preview and see exactly how many kilobytes or megabytes you saved."
				},
				{
					"name": "Download Optimized Files",
					"text": "Download the compressed images individually or as a single ZIP archive if you processed a batch."
				}
			]
		},
		"faqs": [
			{
				"question": "What is the maximum file size I can compress?",
				"answer": "Because the processing happens in your browser, the limit depends on your device's available RAM. Most modern devices can easily handle images up to 50MB."
			},
			{
				"question": "Does this tool strip EXIF data?",
				"answer": "Yes. By default, web compression removes EXIF metadata (camera model, GPS coordinates) to reduce file size and protect your privacy."
			},
			{
				"question": "Can I compress PNGs while keeping transparency?",
				"answer": "Yes. Our PNG compression engine fully preserves the alpha channel, ensuring your transparent backgrounds remain intact."
			}
		]
	};

	if (!tool) {
		return notFound();
	}

	return (
		<>
			<ToolLayout tool={tool}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}

