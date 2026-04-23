import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Area Converter Online – Fast & No Signup | 30tools",
	description: "Convert between square meters, square feet, acres, and more instantly. Our free online Area Converter is perfect for real estate, construction, and design projects. 100% free, fast, and no signup required.",
	keywords: "area converter, free area converter, online area converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/area-converter",
	},
	openGraph: {
		title: "Free Area Converter Online – Fast & No Signup | 30tools",
		description: "Convert between square meters, square feet, acres, and more instantly. Our free online Area Converter is perfect for real estate, construction, and design projects. 100% free, fast, and no signup required.",
		url: "https://30tools.com/area-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Area Converter Online – Fast & No Signup | 30tools",
		description: "Convert between square meters, square feet, acres, and more instantly. Our free online Area Converter is perfect for real estate, construction, and design projects. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "area-converter",
        "name": "Area Converter",
        "description": "Convert between square meters, square feet, acres, and more instantly. Our free online Area Converter is perfect for real estate, construction, and design projects.",
        "route": "/area-converter",
        "extraSlugs": [
                "free-area-converter-online",
                "area-converter-tool",
                "convert-acres-to-hectares"
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
						url: "https://30tools.com/area-converter",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "utilities" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
