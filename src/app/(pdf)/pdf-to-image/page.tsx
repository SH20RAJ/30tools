import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free PDF to Image Online – Fast & No Signup | 30tools",
	description: "Convert PDF pages to high-quality JPG, PNG images 100% free, fast, and no signup required.",
	keywords: "pdf to image, free pdf to image, online pdf to image, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/pdf-to-image",
	},
	openGraph: {
		title: "Free PDF to Image Online – Fast & No Signup | 30tools",
		description: "Convert PDF pages to high-quality JPG, PNG images 100% free, fast, and no signup required.",
		url: "https://30tools.com/pdf-to-image",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PDF to Image Online – Fast & No Signup | 30tools",
		description: "Convert PDF pages to high-quality JPG, PNG images 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "pdf-to-image",
        "name": "PDF to Image",
        "description": "Convert PDF pages to high-quality JPG, PNG images",
        "route": "/pdf-to-image",
        "extraSlugs": [
                "convert-pdf-to-high-quality-jpg",
                "pdf-to-png-converter"
        ],
        "popular": true,
        "category": "pdf"
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
						url: "https://30tools.com/pdf-to-image",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "pdf" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
