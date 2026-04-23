import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free PDF Unlocker Online – Fast & No Signup | 30tools",
	description: "Remove password protection from PDF files 100% free, fast, and no signup required.",
	keywords: "pdf unlocker, free pdf unlocker, online pdf unlocker, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/pdf-unlocker",
	},
	openGraph: {
		title: "Free PDF Unlocker Online – Fast & No Signup | 30tools",
		description: "Remove password protection from PDF files 100% free, fast, and no signup required.",
		url: "https://30tools.com/pdf-unlocker",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PDF Unlocker Online – Fast & No Signup | 30tools",
		description: "Remove password protection from PDF files 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "pdf-unlocker",
        "name": "PDF Unlocker",
        "description": "Remove password protection from PDF files",
        "route": "/pdf-unlocker",
        "extraSlugs": [
                "remove-password-from-pdf-permanently",
                "unlock-password-protected-pdf"
        ],
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
						url: "https://30tools.com/pdf-unlocker",
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
