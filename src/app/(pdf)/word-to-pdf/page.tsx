import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Word to PDF Online – Fast & No Signup | 30tools",
	description: "Convert Word documents to PDF format 100% free, fast, and no signup required.",
	keywords: "word to pdf, free word to pdf, online word to pdf, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/word-to-pdf",
	},
	openGraph: {
		title: "Free Word to PDF Online – Fast & No Signup | 30tools",
		description: "Convert Word documents to PDF format 100% free, fast, and no signup required.",
		url: "https://30tools.com/word-to-pdf",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Word to PDF Online – Fast & No Signup | 30tools",
		description: "Convert Word documents to PDF format 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "word-to-pdf",
        "name": "Word to PDF",
        "description": "Convert Word documents to PDF format",
        "route": "/word-to-pdf",
        "extraSlugs": [
                "convert-docx-to-pdf-free-no-limit",
                "word-to-pdf-converter-online"
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
						url: "https://30tools.com/word-to-pdf",
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
