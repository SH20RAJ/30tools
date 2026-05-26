import ToolLayout from "@/components/tools/shared/ToolLayout";
import PDFGrayscale from "@/components/tools/pdf/PDFGrayscale";

export const metadata = {
	title: "Free PDF Grayscale Online - No Signup | 30tools",
	description: "Manage, convert, edit, and secure PDF documents with our free PDF Grayscale online. Safe and private browser-based tool with no registration. Try it free now.",
	keywords: "pdf to grayscale, convert pdf to black and white, color to grayscale pdf, free pdf tool, 30tools, pdf-grayscale, pdf grayscale, free pdf-grayscale, pdf grayscale online, pdf utility, document editor, online pdf tool",
	alternates: {
		canonical: "https://30tools.com/pdf-grayscale",
	},
	openGraph: {
		title: "Free PDF Grayscale Online - No Signup | 30tools",
		description: "Manage, convert, edit, and secure PDF documents with our free PDF Grayscale online. Safe and private browser-based tool with no registration. Try it free now.",
		url: "https://30tools.com/pdf-grayscale",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PDF Grayscale Online - No Signup | 30tools",
		description: "Manage, convert, edit, and secure PDF documents with our free PDF Grayscale online. Safe and private browser-based tool with no registration. Try it free now.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
		id: "pdf-grayscale",
		name: "PDF Grayscale",
		description: "Convert color PDF documents to grayscale online for free. Optimize your PDF for B&W printing and reduce file size instantly in your browser.",
		route: "/pdf-grayscale",
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
						url: "https://30tools.com/pdf-grayscale",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>
			<ToolLayout tool={tool}>
				<PDFGrayscale />
			</ToolLayout>
		</>
	);
}
