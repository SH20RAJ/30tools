import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import PDFProtect from "@/components/tools/pdf/PDFProtect";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free PDF Password Protect Online - No Signup | 30tools",
	description: "Manage, convert, edit, and secure PDF documents with our free PDF Password Protect online. Safe and private browser-based tool with no registration. 100% free.",
	keywords: "pdf-protect, Pdf Protect, free pdf-protect, Pdf Protect online, PDF utility, document editor, online PDF tool, free PDF converter, 30tools",
	alternates: {
		canonical: "https://30tools.com/pdf-protect",
	},
	openGraph: {
		title: "Free PDF Password Protect Online - No Signup | 30tools",
		description: "Manage, convert, edit, and secure PDF documents with our free PDF Password Protect online. Safe and private browser-based tool with no registration. 100% free.",
		url: "https://30tools.com/pdf-protect",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PDF Password Protect Online - No Signup | 30tools",
		description: "Manage, convert, edit, and secure PDF documents with our free PDF Password Protect online. Safe and private browser-based tool with no registration. 100% free.",
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
