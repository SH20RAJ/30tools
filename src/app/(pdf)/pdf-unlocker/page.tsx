import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import PDFUnlock from "@/components/tools/pdf/PDFUnlock";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free PDF Unlocker Online - No Signup | 30tools",
	description: "Manage, convert, edit, and secure PDF documents with our free PDF Unlocker online. Safe and private browser-based tool with no registration. No signup required.",
	keywords: "pdf unlocker, unlock pdf, remove pdf password, free pdf tool, online pdf unlock, 30tools, pdf-unlocker, free pdf-unlocker, pdf unlocker online, pdf utility, document editor, online pdf tool",
	alternates: {
		canonical: "https://30tools.com/pdf-unlocker",
	},
	openGraph: {
		title: "Free PDF Unlocker Online - No Signup | 30tools",
		description: "Manage, convert, edit, and secure PDF documents with our free PDF Unlocker online. Safe and private browser-based tool with no registration. No signup required.",
		url: "https://30tools.com/pdf-unlocker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PDF Unlocker Online - No Signup | 30tools",
		description: "Manage, convert, edit, and secure PDF documents with our free PDF Unlocker online. Safe and private browser-based tool with no registration. No signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/pdf-unlocker");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<PDFUnlock />
		</ToolLayout>
	);
}
