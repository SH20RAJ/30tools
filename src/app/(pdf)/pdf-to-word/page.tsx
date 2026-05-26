import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import PDFToWord from "@/components/tools/pdf/PDFToWord";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free PDF to Word Online - No Signup | 30tools",
	description: "Manage, convert, edit, and secure PDF documents with our free PDF to Word online. Safe and private browser-based tool with no registration. No signup required.",
	keywords: "pdf to word, convert pdf to word, pdf to docx, free pdf converter, online pdf tool, 30tools, pdf-to-word, free pdf-to-word, pdf to word online, pdf utility, document editor, secure document processing",
	alternates: {
		canonical: "https://30tools.com/pdf-to-word",
	},
	openGraph: {
		title: "Free PDF to Word Online - No Signup | 30tools",
		description: "Manage, convert, edit, and secure PDF documents with our free PDF to Word online. Safe and private browser-based tool with no registration. No signup required.",
		url: "https://30tools.com/pdf-to-word",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PDF to Word Online - No Signup | 30tools",
		description: "Manage, convert, edit, and secure PDF documents with our free PDF to Word online. Safe and private browser-based tool with no registration. No signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/pdf-to-word");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<PDFToWord />
		</ToolLayout>
	);
}
