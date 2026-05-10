import ToolLayout from "@/components/tools/shared/ToolLayout";
import PDFProtect from "@/components/tools/pdf/PDFProtect";

export const metadata = {
	title: "PDF Password Protect – Secure PDF Files Online Free",
	description: "Secure your PDF files with strong password encryption online for free. Privacy-first local processing ensures your sensitive documents never leave your browser.",
	alternates: {
		canonical: "https://30tools.com/pdf-protect",
	},
	openGraph: {
		title: "PDF Password Protect – Encrypt PDF Files Online",
		description: "Add password protection to PDFs instantly. Free, secure, and works in your browser.",
		url: "https://30tools.com/pdf-protect",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "PDF Password Protect – Free PDF Encryption Tool",
		description: "Secure PDF documents with AES encryption. No uploads required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "pdf-protect",
        "name": "PDF Password Protect",
        "description": "Secure your PDF files with strong password encryption online for free. Privacy-first local processing ensures your sensitive documents never leave your browser.",
        "route": "/pdf-protect",
        "extraSlugs": [
                "encrypt-pdf",
                "add-password-to-pdf"
        ],
        "popular": true,
        "category": "pdf",
		"features": [
			"Strong AES-128 or AES-256 Encryption",
			"Prevent Unauthorized Viewing and Printing",
			"100% Local Processing — Documents Never Uploaded",
			"Instant Encryption with Zero Wait Time",
			"Supports Standard PDFs Up to 50MB"
		],
		"article": `
## Secure Sensitive Documents Before Sharing
Emailing unencrypted legal contracts, tax returns, or HR documents exposes you to significant risk if the email is intercepted or forwarded. Our PDF Protection tool allows you to add a secure password lock to any PDF document in seconds, ensuring only authorized recipients can open it.

### How PDF Encryption Works
When you protect a file using our tool, it rewrites the PDF using standard AES (Advanced Encryption Standard) algorithms. Once encrypted, the file contents cannot be accessed by search engine crawlers, email scanners, or unauthorized users without the exact password.

### Ultimate Client-Side Privacy
Unlike server-based tools that force you to upload your sensitive files (which creates a security vulnerability), our tool runs the encryption algorithm entirely inside your web browser using WebAssembly. Your unencrypted document never touches a remote server.
		`,
		"howTo": {
			"name": "How to Password Protect a PDF",
			"steps": [
				{
					"name": "Select Your PDF",
					"text": "Drag and drop the PDF you wish to encrypt into the secure drop zone."
				},
				{
					"name": "Set a Strong Password",
					"text": "Type a secure password. Make sure you remember it or store it in a password manager, as there is no way to recover an encrypted file."
				},
				{
					"name": "Encrypt the File",
					"text": "Click the protect button. The tool will instantly rewrite the PDF with AES encryption applied."
				},
				{
					"name": "Download and Share",
					"text": "Download the secured PDF. You can now safely email the file, but be sure to share the password via a different, secure channel."
				}
			]
		},
		"faqs": [
			{
				"question": "What encryption standard does this tool use?",
				"answer": "The tool utilizes standard 128-bit or 256-bit AES encryption, which is compatible with all modern PDF readers like Adobe Acrobat, Chrome, and Preview."
			},
			{
				"question": "Can 30tools recover my password if I forget it?",
				"answer": "No. Because the encryption happens locally on your device and we do not store your files or your passwords, it is mathematically impossible for us to recover a lost password."
			},
			{
				"question": "Are there any file size limitations?",
				"answer": "To ensure your browser doesn't crash during the encryption process, we recommend keeping files under 50MB."
			}
		]
	};

	return (
		<ToolLayout tool={{ ...tool, category: "pdf" }}>
			<PDFProtect />
		</ToolLayout>
	);
}
