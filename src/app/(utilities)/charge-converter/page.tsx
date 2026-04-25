import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Charge Converter Online – Fast & No Signup | 30tools",
	description: "Convert between coulombs, millicoulombs, and other electrical charge units instantly. Our free online tool provides quick and accurate physics base transformations. 100% free, fast, and no signup required.",
	keywords: "charge converter, free charge converter, online charge converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/charge-converter",
	},
	openGraph: {
		title: "Free Charge Converter Online – Fast & No Signup | 30tools",
		description: "Convert between coulombs, millicoulombs, and other electrical charge units instantly. Our free online tool provides quick and accurate physics base transformations. 100% free, fast, and no signup required.",
		url: "https://30tools.com/charge-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Charge Converter Online – Fast & No Signup | 30tools",
		description: "Convert between coulombs, millicoulombs, and other electrical charge units instantly. Our free online tool provides quick and accurate physics base transformations. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "charge-converter",
        "name": "Charge Converter",
        "description": "Convert between coulombs, millicoulombs, and other electrical charge units instantly. Our free online tool provides quick and accurate physics base transformations.",
        "route": "/charge-converter",
        "extraSlugs": [
                "free-charge-converter-online",
                "charge-converter-tool",
                "convert-coulomb-to-ampere-hour"
        ],
        "popular": false,
        "category": "utilities"
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
						url: "https://30tools.com/charge-converter",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "utilities" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
