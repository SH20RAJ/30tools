import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import PDFToImage from "@/components/tools/pdf/PDFToImage";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free PDF to Image Online - No Signup | 30tools",
	description: "Manage, convert, edit, and secure PDF documents with our free PDF to Image online. Safe and private browser-based tool with no registration. No signup required.",
	keywords: "pdf to image, convert pdf to jpg, pdf to png, pdf page to image, free online tool, 30tools, pdf-to-image, free pdf-to-image, pdf to image online, pdf utility, document editor, online pdf tool",
	alternates: {
		canonical: "https://30tools.com/pdf-to-image",
	},
	openGraph: {
		title: "Free PDF to Image Online - No Signup | 30tools",
		description: "Manage, convert, edit, and secure PDF documents with our free PDF to Image online. Safe and private browser-based tool with no registration. No signup required.",
		url: "https://30tools.com/pdf-to-image",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PDF to Image Online - No Signup | 30tools",
		description: "Manage, convert, edit, and secure PDF documents with our free PDF to Image online. Safe and private browser-based tool with no registration. No signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/pdf-to-image");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<PDFToImage />
		</ToolLayout>
	);
}
