import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";

export const metadata = {
	title: "Free PDF to Grayscale Online - Convert Color PDF to B&W | 30tools",
	description: "Convert color PDF documents to grayscale online for free. Optimize your PDF for B&W printing and reduce file size instantly in your browser.",
	keywords: "pdf to grayscale, convert pdf to black and white, color to grayscale pdf, free pdf tool, 30tools",
	alternates: {
		canonical: "https://30tools.com/pdf-grayscale",
	},
	openGraph: {
		title: "Free PDF to Grayscale Online - Convert Color PDF to B&W | 30tools",
		description: "Convert color PDF documents to grayscale online for free. Optimize your PDF for B&W printing and reduce file size instantly in your browser.",
		url: "https://30tools.com/pdf-grayscale",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PDF to Grayscale Online - Convert Color PDF to B&W | 30tools",
		description: "Convert color PDF documents to grayscale online for free. Optimize your PDF for B&W printing and reduce file size instantly in your browser.",
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
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
