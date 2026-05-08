import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";
import { getToolById } from "@/lib/tools";
import { notFound } from "next/navigation";


export const metadata = {
	title: "Free Image to PDF Online – Fast & No Signup | 30tools",
	description: "Convert multiple images to a single PDF document 100% free. Supports JPG, PNG, WEBP and more. Privacy-first local processing with no signup required.",
	keywords: "image to pdf, free image to pdf, online image to pdf, no signup, 30tools, jpg to pdf, png to pdf",
	alternates: {
		canonical: "https://30tools.com/image-to-pdf",
	},
	openGraph: {
		title: "Free Image to PDF Online – Fast & No Signup | 30tools",
		description: "Convert multiple images to a single PDF document 100% free. Supports JPG, PNG, WEBP and more. Privacy-first local processing with no signup required.",
		url: "https://30tools.com/image-to-pdf",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Image to PDF Online – Fast & No Signup | 30tools",
		description: "Convert multiple images to a single PDF document 100% free. Supports JPG, PNG, WEBP and more. Privacy-first local processing with no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "image-to-pdf",
        "name": "Image to PDF Converter",
        "description": "Convert multiple images to a single PDF document 100% free. Supports JPG, PNG, WEBP and more. Privacy-first local processing with no signup required.",
        "route": "/image-to-pdf",
        "extraSlugs": [
                "jpg-to-pdf",
                "png-to-pdf",
                "convert-images-to-pdf"
        ],
        "popular": true,
        "category": "pdf",
		"features": [
			"Combine Multiple Images into One PDF",
			"Supports All Common Formats (JPG, PNG, WEBP, BMP)",
			"Customizable Page Size (A4, Letter, Fit to Image)",
			"Adjustable Margins and Image Orientation",
			"Drag and Drop Reordering",
			"100% Secure Local Processing"
		],
		"article": `
## Combine Images into a Professional PDF
Sending multiple image attachments via email is frustrating for both the sender and the recipient. Converting your scanned documents, receipts, or portfolio photos into a single PDF ensures they are viewed in the correct order, on any device, exactly as you intended.

### Flexible Layout Controls
Our Image to PDF tool gives you total control over the final document. You can choose to have each image stretch to fit a standard A4 page, maintain its original aspect ratio with custom margins, or scale the PDF page size to match the exact dimensions of the image.

### Zero Uploads, Maximum Privacy
Identity documents like passports or sensitive receipts should never be uploaded to random online converters. Our tool is built with a zero-trust architecture. The PDF generation engine runs inside your web browser using JavaScript, guaranteeing that your personal images never leave your local device.
		`,
		"howTo": {
			"name": "How to Convert Images to PDF",
			"steps": [
				{
					"name": "Upload Your Images",
					"text": "Select all the images you want to include. You can select multiple files at once."
				},
				{
					"name": "Arrange the Order",
					"text": "Drag and drop the image thumbnails to place them in the correct sequence for your PDF."
				},
				{
					"name": "Adjust Page Settings",
					"text": "Select your preferred page size (e.g., A4), orientation (Portrait/Landscape), and margin size from the settings menu."
				},
				{
					"name": "Generate and Save",
					"text": "Click the generate button. The PDF will be compiled instantly in your browser and downloaded to your device."
				}
			]
		},
		"faqs": [
			{
				"question": "Is there a limit to how many images I can merge?",
				"answer": "Because the tool runs locally, the limit is based on your device's memory. Most users can comfortably merge 50-100 high-resolution images in a single session."
			},
			{
				"question": "Will my images lose quality in the PDF?",
				"answer": "No. The images are embedded into the PDF document without applying additional destructive compression, preserving their original visual fidelity."
			},
			{
				"question": "Are my images secure?",
				"answer": "Yes. The conversion script runs client-side. We do not upload, host, or have access to any of the images you process."
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

