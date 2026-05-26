import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import ImageToPDFTool from "@/components/tools/pdf/ImageToPDF";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free Image to PDF Online - No Signup | 30tools",
	description: "Manage, convert, edit, and secure PDF documents with our free Image to PDF online. Safe and private browser-based tool with no registration. No signup required.",
	keywords: "image-to-pdf, Image To Pdf, free image-to-pdf, Image To Pdf online, PDF utility, document editor, online PDF tool, free PDF converter, 30tools",
	alternates: {
		canonical: "https://30tools.com/image-to-pdf",
	},
	openGraph: {
		title: "Free Image to PDF Online - No Signup | 30tools",
		description: "Manage, convert, edit, and secure PDF documents with our free Image to PDF online. Safe and private browser-based tool with no registration. No signup required.",
		url: "https://30tools.com/image-to-pdf",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Image to PDF Online - No Signup | 30tools",
		description: "Manage, convert, edit, and secure PDF documents with our free Image to PDF online. Safe and private browser-based tool with no registration. No signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/image-to-pdf");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<ImageToPDFTool />
		</ToolLayout>
	);
}
