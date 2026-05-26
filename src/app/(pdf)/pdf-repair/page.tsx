import ToolLayout from "@/components/tools/shared/ToolLayout";
import PDFRepair from "@/components/tools/pdf/PDFRepair";

export const metadata = {
	title: "Free PDF Repair Online - No Signup | 30tools",
	description: "Manage, convert, edit, and secure PDF documents with our free PDF Repair online. Safe and private browser-based tool with no registration. 100% free and secure.",
	keywords: "pdf repair, fix corrupted pdf, repair broken pdf, online pdf fixer, free pdf repair, 30tools, pdf-repair, free pdf-repair, pdf repair online, pdf utility, document editor, online pdf tool",
	alternates: {
		canonical: "https://30tools.com/pdf-repair",
	},
	openGraph: {
		title: "Free PDF Repair Online - No Signup | 30tools",
		description: "Manage, convert, edit, and secure PDF documents with our free PDF Repair online. Safe and private browser-based tool with no registration. 100% free and secure.",
		url: "https://30tools.com/pdf-repair",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PDF Repair Online - No Signup | 30tools",
		description: "Manage, convert, edit, and secure PDF documents with our free PDF Repair online. Safe and private browser-based tool with no registration. 100% free and secure.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "pdf-repair",
		name: "PDF Repair",
		description: "Repair corrupted or broken PDF files online for free. Fix PDF headers, cross-reference tables, and document structures instantly in your browser.",
		route: "/pdf-repair",
		category: "pdf",
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "SoftwareApplication",
						name: tool.name,
						description: tool.description,
						url: "https://30tools.com/pdf-repair",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>
			<ToolLayout tool={tool}>
				<PDFRepair />
			</ToolLayout>
		</>
	);
}
