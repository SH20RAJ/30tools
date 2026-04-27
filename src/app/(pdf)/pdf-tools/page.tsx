import ToolLayout from "@/components/tools/shared/ToolLayout";
import PDFPillar from "@/components/pillars/PDFPillar";

export const metadata = {
	title: "Free PDF Tools Online – No Signup, No Limits & Secure | 30tools",
	description: "The ultimate suite of 20+ free online PDF tools. Merge, split, compress, and convert PDFs to Word/Images securely in your browser. Professional-grade utilities with no signup required.",
	keywords: "pdf tools, free pdf tools online, merge pdf free, compress pdf no limits, split pdf online, secure pdf editor, convert pdf to word online, 30tools pdf",
	alternates: {
		canonical: "https://30tools.com/pdf-tools",
	},
	openGraph: {
		title: "Free PDF Tools Online – No Signup, No Limits & Secure | 30tools",
		description: "The ultimate suite of 20+ free online PDF tools. Merge, split, compress, and convert PDFs to Word/Images securely in your browser.",
		url: "https://30tools.com/pdf-tools",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PDF Tools Online – No Signup, No Limits & Secure | 30tools",
		description: "Professional-grade PDF tools for free. No signup, no limits, and 100% browser-side privacy.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "pdf-tools",
        "name": "Professional PDF Suite",
        "description": "20+ enterprise-grade PDF utilities for merging, splitting, compressing, and converting documents with total privacy.",
        "route": "/pdf-tools",
        "category": "pdf",
        "article": `
## The Most Comprehensive Free PDF Suite Online
Stop paying for monthly subscriptions to simple PDF utilities. 30tools provides a professional-grade alternative to desktop software, allowing you to manipulate documents with surgical precision. 

### Privacy-First Browser Processing
We believe your documents belong to you. Our PDF suite is built using local-first technologies (PDF.js and PDF-Lib), meaning your files are never uploaded to a server. All merging, splitting, and conversion happens in your browser's secure sandbox.

### No Signup. No Limits. No Watermarks.
Unlike competitors who gate productivity behind paywalls and account creation, 30tools is committed to a frictionless experience. Download as many files as you need, whenever you need them.
        `
};

	return (
		<ToolLayout tool={tool}>
			<PDFPillar />
		</ToolLayout>
	);
}
