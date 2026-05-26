import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import PDFEditor from "@/components/tools/pdf/PDFEditor";
import { getToolByRoute } from "@/lib/tools";

export const metadata = {
	title: "Free PDF Editor Online - No Signup | 30tools",
	description: "Manage, convert, edit, and secure PDF documents with our free PDF Editor online. Safe and private browser-based tool with no registration. 100% free and secure.",
	keywords: "pdf editor, edit pdf online, free pdf editor, pdf text editor, online pdf tool, 30tools, pdf-editor, free pdf-editor, pdf editor online, pdf utility, document editor, free pdf converter",
	alternates: {
		canonical: "https://30tools.com/pdf-editor",
	},
	openGraph: {
		title: "Free PDF Editor Online - No Signup | 30tools",
		description: "Manage, convert, edit, and secure PDF documents with our free PDF Editor online. Safe and private browser-based tool with no registration. 100% free and secure.",
		url: "https://30tools.com/pdf-editor",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PDF Editor Online - No Signup | 30tools",
		description: "Manage, convert, edit, and secure PDF documents with our free PDF Editor online. Safe and private browser-based tool with no registration. 100% free and secure.",
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
