import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";

export const metadata = {
	title: "Free PDF Repair Online - Fix Corrupted PDF Files | 30tools",
	description: "Repair corrupted or broken PDF files online for free. Fix PDF headers, cross-reference tables, and document structures instantly in your browser.",
	keywords: "pdf repair, fix corrupted pdf, repair broken pdf, online pdf fixer, free pdf repair, 30tools",
	alternates: {
		canonical: "https://30tools.com/pdf-repair",
	},
	openGraph: {
		title: "Free PDF Repair Online - Fix Corrupted PDF Files | 30tools",
		description: "Repair corrupted or broken PDF files online for free. Fix PDF headers, cross-reference tables, and document structures instantly in your browser.",
		url: "https://30tools.com/pdf-repair",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PDF Repair Online - Fix Corrupted PDF Files | 30tools",
		description: "Repair corrupted or broken PDF files online for free. Fix PDF headers, cross-reference tables, and document structures instantly in your browser.",
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
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
