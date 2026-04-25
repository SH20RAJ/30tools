import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Apparent Power Converter Online – Fast & No Signup | 30tools",
	description: "Convert between volt-amperes (VA), millivolt-amperes, and more instantly. Our free online tool is perfect for electrical engineers and technicians. 100% free, fast, and no signup required.",
	keywords: "apparent power converter, free apparent power converter, online apparent power converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/apparent-power-converter",
	},
	openGraph: {
		title: "Free Apparent Power Converter Online – Fast & No Signup | 30tools",
		description: "Convert between volt-amperes (VA), millivolt-amperes, and more instantly. Our free online tool is perfect for electrical engineers and technicians. 100% free, fast, and no signup required.",
		url: "https://30tools.com/apparent-power-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Apparent Power Converter Online – Fast & No Signup | 30tools",
		description: "Convert between volt-amperes (VA), millivolt-amperes, and more instantly. Our free online tool is perfect for electrical engineers and technicians. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "apparent-power-converter",
        "name": "Apparent Power Converter",
        "description": "Convert between volt-amperes (VA), millivolt-amperes, and more instantly. Our free online tool is perfect for electrical engineers and technicians.",
        "route": "/apparent-power-converter",
        "extraSlugs": [
                "free-apparent-power-converter-online",
                "apparent-power-converter-tool",
                "convert-va-to-kva"
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
						url: "https://30tools.com/apparent-power-converter",
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
