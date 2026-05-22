import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import PDFProtect from "@/components/tools/pdf/PDFProtect";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "PDF Password Protect – Secure PDF Files Online Free",
	description: "Secure your PDF files with strong password encryption online for free. Privacy-first local processing ensures your sensitive documents never leave your browser.",
	
	keywords: "pdf-protect, Pdf Protect, free pdf-protect, Pdf Protect online, PDF utility, document editor, online PDF tool, free PDF converter, 30tools",alternates: {
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
	const tool = getToolByRoute("/pdf-protect");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<PDFProtect />
		</ToolLayout>
	);
}
