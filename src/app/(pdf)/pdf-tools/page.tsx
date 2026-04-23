import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free PDF Tools Online – Fast & No Signup | 30tools",
	description: "Merge, split, compress, and manipulate PDF documents 100% free, fast, and no signup required.",
	keywords: "pdf tools, free pdf tools, online pdf tools, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/pdf-tools",
	},
	openGraph: {
		title: "Free PDF Tools Online – Fast & No Signup | 30tools",
		description: "Merge, split, compress, and manipulate PDF documents 100% free, fast, and no signup required.",
		url: "https://30tools.com/pdf-tools",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PDF Tools Online – Fast & No Signup | 30tools",
		description: "Merge, split, compress, and manipulate PDF documents 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "pdf-tools",
        "name": "PDF Tools",
        "description": "Merge, split, compress, and manipulate PDF documents",
        "route": "/pdf-tools",
        "extraSlugs": [],
        "popular": false,
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
						url: "https://30tools.com/pdf-tools",
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
