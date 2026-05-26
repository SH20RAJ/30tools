import { notFound } from "next/navigation";
import ToolLayout from "@/components/tools/shared/ToolLayout";
import { getToolByRoute } from "@/lib/tools";
import PdfCompressor200kb from "@/components/tools/exam/PdfCompressor200kb";

export const metadata = {
	title: "Free PDF Compressor Under 200KB Online - No Signup | 30tools",
	description: "Resize and compress files with our free PDF Compressor Under 200KB online. Safe and private browser utility for government exam portal applications. 100% free.",
	keywords: "pdf-compressor-under-200kb, PDF Compressor Under 200KB, compress pdf to 200kb, reduce pdf size to 200kb online, 30tools",
	alternates: {
		canonical: "https://30tools.com/pdf-compressor-under-200kb",
	},
	openGraph: {
		title: "Free PDF Compressor Under 200KB Online - No Signup | 30tools",
		description: "Resize and compress files with our free PDF Compressor Under 200KB online. Safe and private browser utility for government exam portal applications. 100% free.",
		url: "https://30tools.com/pdf-compressor-under-200kb",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PDF Compressor Under 200KB Online - No Signup | 30tools",
		description: "Resize and compress files with our free PDF Compressor Under 200KB online. Safe and private browser utility for government exam portal applications. 100% free.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = getToolByRoute("/pdf-compressor-under-200kb");

	if (!tool) {
		return notFound();
	}

	return (
		<ToolLayout tool={tool}>
			<PdfCompressor200kb />
		</ToolLayout>
	);
}
