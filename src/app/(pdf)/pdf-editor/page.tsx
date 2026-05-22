import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import PDFEditor from "@/components/tools/pdf/PDFEditor";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free PDF Editor Online – Fast & No Signup | 30tools",
	description: "Edit PDF documents online for free. Rotate, delete, and rearrange pages instantly. Professional PDF tools with no signup and 100% privacy.",
	keywords: "pdf editor, edit pdf online, free pdf editor, pdf text editor, online pdf tool, 30tools",
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
	const tool = getToolByRoute("/pdf-editor");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<PDFEditor />
		</ToolLayout>
	);
}
