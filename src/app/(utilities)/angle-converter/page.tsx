import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Angle Converter Online – Fast & No Signup | 30tools",
	description: "Convert between degrees, radians, gradians, and more instantly. Our free online Angle Converter is perfect for students, engineers, and mathematicians. Fast and accurate. 100% free, fast, and no signup required.",
	keywords: "angle converter, free angle converter, online angle converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/angle-converter",
	},
	openGraph: {
		title: "Free Angle Converter Online – Fast & No Signup | 30tools",
		description: "Convert between degrees, radians, gradians, and more instantly. Our free online Angle Converter is perfect for students, engineers, and mathematicians. Fast and accurate. 100% free, fast, and no signup required.",
		url: "https://30tools.com/angle-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Angle Converter Online – Fast & No Signup | 30tools",
		description: "Convert between degrees, radians, gradians, and more instantly. Our free online Angle Converter is perfect for students, engineers, and mathematicians. Fast and accurate. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "angle-converter",
        "name": "Angle Converter",
        "description": "Convert between degrees, radians, gradians, and more instantly. Our free online Angle Converter is perfect for students, engineers, and mathematicians. Fast and accurate.",
        "route": "/angle-converter",
        "extraSlugs": [
                "free-angle-converter-online",
                "angle-converter-tool",
                "convert-degrees-to-radians"
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
						url: "https://30tools.com/angle-converter",
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
