import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";
import { getToolById } from "@/lib/tools";
import { notFound } from "next/navigation";


export const metadata = {
	title: "Free PDF Editor Online – Fast & No Signup | 30tools",
	description: "Edit PDF documents online for free. Rotate, delete, and rearrange pages instantly. Professional PDF tools with no signup and 100% privacy.",
	keywords: "pdf editor, free pdf editor, online pdf editor, no signup, 30tools, rotate pdf, delete pdf pages",
	alternates: {
		canonical: "https://30tools.com/pdf-editor",
	},
	openGraph: {
		title: "Free PDF Editor Online – Fast & No Signup | 30tools",
		description: "Edit PDF documents online for free. Rotate, delete, and rearrange pages instantly. Professional PDF tools with no signup and 100% privacy.",
		url: "https://30tools.com/pdf-editor",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PDF Editor Online – Fast & No Signup | 30tools",
		description: "Edit PDF documents online for free. Rotate, delete, and rearrange pages instantly. Professional PDF tools with no signup and 100% privacy.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "pdf-editor",
        "name": "PDF Editor",
        "description": "Edit PDF documents online for free. Rotate, delete, and rearrange pages instantly. Professional PDF tools with no signup and 100% privacy.",
        "route": "/pdf-editor",
        "extraSlugs": [
                "free-pdf-editor",
                "online-pdf-editor"
        ],
        "popular": true,
        "category": "pdf",
		"features": [
			"Rotate Individual or All PDF Pages",
			"Delete Unwanted Pages Instantly",
			"Rearrange and Reorder Pages via Drag & Drop",
			"Browser-Side Processing — No Server Uploads",
			"Supports Files Up to 50MB",
			"100% Free with No Hidden Watermarks"
		],
		"article": `
## Professional PDF Editing Directly in Your Browser
When you only need to rotate a scanned document or delete a blank page, downloading heavy desktop software is overkill. The 30tools PDF Editor gives you core document manipulation features instantly, right in your web browser. 

### Current Editor Capabilities
Our lightweight editor currently supports page-level operations. You can visually inspect your document, rotate pages that were scanned upside down, drag and drop pages to change their order, and delete pages containing sensitive or irrelevant information before sharing the final document. (Note: In-line text editing is not currently supported).

### Privacy and Security
We strictly adhere to a zero-trust model. When you open a PDF in our editor, the file is loaded directly into your computer's RAM using JavaScript. It is never transmitted to our servers. Once you download the edited file, no residual data remains.

### File Size Limitations
To ensure browser stability during local processing, our editor supports standard documents up to 50MB. This comfortably covers standard contracts, academic papers, and scanned forms.
		`,
		"howTo": {
			"name": "How to Edit a PDF Document",
			"steps": [
				{
					"name": "Open Your PDF",
					"text": "Drag and drop your PDF file into the editor workspace, or click to upload from your local storage."
				},
				{
					"name": "Manipulate Pages",
					"text": "Hover over any page thumbnail to reveal the rotation and deletion icons. Drag a thumbnail to change its position in the document."
				},
				{
					"name": "Review Changes",
					"text": "Verify that all pages are oriented correctly and in the proper sequence before exporting."
				},
				{
					"name": "Export the Edited File",
					"text": "Click the save button to generate and download the modified PDF directly to your device."
				}
			]
		},
		"faqs": [
			{
				"question": "Can I edit existing text within the PDF?",
				"answer": "Currently, our editor focuses on structural manipulation (rotating, deleting, rearranging pages). Modifying existing embedded text or adding new text boxes is not supported in this version."
			},
			{
				"question": "Is there a limit on the number of pages I can edit?",
				"answer": "There is no hard page limit, but the overall file size must be under 50MB to ensure your browser does not crash during processing."
			},
			{
				"question": "Are my confidential contracts safe?",
				"answer": "Yes. Because the editing process happens 100% client-side (in your browser), your document is never uploaded to any server. It is completely safe for confidential information."
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
