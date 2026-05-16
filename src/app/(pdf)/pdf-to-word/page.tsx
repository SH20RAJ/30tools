import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import PDFToWord from "@/components/tools/pdf/PDFToWord";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free PDF to Word Online – Fast & No Signup | 30tools",
	description: "Convert PDF files to editable Word documents 100% free, fast, and no signup required.",
	keywords: "pdf to word, free online tool, no signup",
	alternates: {
		canonical: "https://30tools.com/pdf-to-word",
	},
	openGraph: {
		title: "Free PDF to Word Online – Fast & No Signup | 30tools",
		description: "Convert PDF files to editable Word documents 100% free, fast, and no signup required.",
		url: "https://30tools.com/pdf-to-word",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PDF to Word Online – Fast & No Signup | 30tools",
		description: "Convert PDF files to editable Word documents 100% free, fast, and no signup required.",
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
