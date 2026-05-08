import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free PDF Unlocker Online – Fast & No Signup | 30tools",
	description: "Remove password protection from PDF files 100% free, fast, and no signup required.",
	keywords: "pdf unlocker, free pdf unlocker, online pdf unlocker, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/pdf-unlocker",
	},
	openGraph: {
		title: "Free PDF Unlocker Online – Fast & No Signup | 30tools",
		description: "Remove password protection from PDF files 100% free, fast, and no signup required.",
		url: "https://30tools.com/pdf-unlocker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PDF Unlocker Online – Fast & No Signup | 30tools",
		description: "Remove password protection from PDF files 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "pdf-unlocker",
        "name": "PDF Unlocker",
        "description": "Remove password protection from PDF files",
        "route": "/pdf-unlocker",
        "extraSlugs": [
                "remove-password-from-pdf-permanently",
                "unlock-password-protected-pdf"
        ],
        "popular": false,
        "category": "pdf",
		"features": [
			"Remove PDF Password Protection Instantly",
			"Strip Printing and Copying Restrictions",
			"100% Local Browser Processing for Maximum Security",
			"Supports Standard Encrypted PDFs up to 50MB",
			"No Server Uploads — Safe for Legal Documents"
		],
		"article": `
## Remove Passwords from PDFs You Own
Have you ever forgotten the password to an old tax return, or received a locked document from a client but are tired of typing the password every time you open it? Our PDF Unlocker helps you permanently strip the password from standard encrypted PDFs so you can access your files friction-free.

### Lawful Use Notice
**Important:** This tool is designed exclusively for documents that you own or have explicit, legal permission to modify. Do not use this tool to bypass security measures on copyrighted materials, confidential corporate documents, or files belonging to third parties without consent. By using this tool, you agree that you have the lawful right to decrypt the file.

### How It Works and Limitations
This tool is not a password "cracker" or "hacker." For most modern AES-encrypted PDFs, you must know the original password to unlock it for the first time. Once provided, our tool rewrites the PDF to remove the encryption layer permanently. (Note: If a PDF is protected only by an "Owner" password restricting printing/copying, the tool can usually remove those restrictions without needing the password).
		`,
		"howTo": {
			"name": "How to Unlock a PDF",
			"steps": [
				{
					"name": "Upload the Encrypted PDF",
					"text": "Drag and drop the locked PDF into the browser window."
				},
				{
					"name": "Provide the Current Password",
					"text": "If the document has a 'User' password preventing it from being opened, you will be prompted to enter it."
				},
				{
					"name": "Remove Encryption",
					"text": "Click unlock. The tool will decrypt the file and rebuild the PDF structure without the security layer."
				},
				{
					"name": "Download the Unlocked File",
					"text": "Save the new, unprotected PDF to your device. You will no longer need a password to open or print it."
				}
			]
		},
		"faqs": [
			{
				"question": "Can this tool hack or bypass a forgotten password?",
				"answer": "No. If a document uses modern strong encryption (like AES-256) to block viewing, you must know the password to unlock it. Our tool does not perform brute-force password cracking."
			},
			{
				"question": "What is the difference between an Owner and a User password?",
				"answer": "A User password blocks you from opening the file at all. An Owner password allows you to view the file but restricts actions like printing, copying text, or editing. Our tool can often strip Owner restrictions instantly."
			},
			{
				"question": "Is it safe to unlock sensitive bank statements here?",
				"answer": "Yes. The decryption process runs entirely within your browser using JavaScript. The file and the password are never uploaded to any server, ensuring absolute privacy."
			}
		]
};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: tool.name,
						description: tool.description,
						url: "https://30tools.com/pdf-unlocker",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "pdf" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
