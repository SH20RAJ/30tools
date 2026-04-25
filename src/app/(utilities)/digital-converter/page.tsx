import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Digital Converter Online – Fast & No Signup | 30tools",
	description: "Convert between bytes, kilobytes, megabytes, and gigabytes instantly. Our free online tool helps you understand data storage and file sizes in seconds. 100% free, fast, and no signup required.",
	keywords: "digital converter, free digital converter, online digital converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/digital-converter",
	},
	openGraph: {
		title: "Free Digital Converter Online – Fast & No Signup | 30tools",
		description: "Convert between bytes, kilobytes, megabytes, and gigabytes instantly. Our free online tool helps you understand data storage and file sizes in seconds. 100% free, fast, and no signup required.",
		url: "https://30tools.com/digital-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Digital Converter Online – Fast & No Signup | 30tools",
		description: "Convert between bytes, kilobytes, megabytes, and gigabytes instantly. Our free online tool helps you understand data storage and file sizes in seconds. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "digital-converter",
        "name": "Digital Converter",
        "description": "Convert between bytes, kilobytes, megabytes, and gigabytes instantly. Our free online tool helps you understand data storage and file sizes in seconds.",
        "route": "/digital-converter",
        "extraSlugs": [
                "free-digital-converter-online",
                "digital-converter-tool",
                "data-storage-unit-converter"
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
						url: "https://30tools.com/digital-converter",
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
