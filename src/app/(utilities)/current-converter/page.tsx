import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Current Converter Online – Fast & No Signup | 30tools",
	description: "Convert between amperes, milliamperes, and other electrical current units instantly. Our free online tool is perfect for electronics and electrical engineering tasks. 100% free, fast, and no signup required.",
	keywords: "current converter, free current converter, online current converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/current-converter",
	},
	openGraph: {
		title: "Free Current Converter Online – Fast & No Signup | 30tools",
		description: "Convert between amperes, milliamperes, and other electrical current units instantly. Our free online tool is perfect for electronics and electrical engineering tasks. 100% free, fast, and no signup required.",
		url: "https://30tools.com/current-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Current Converter Online – Fast & No Signup | 30tools",
		description: "Convert between amperes, milliamperes, and other electrical current units instantly. Our free online tool is perfect for electronics and electrical engineering tasks. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "current-converter",
        "name": "Current Converter",
        "description": "Convert between amperes, milliamperes, and other electrical current units instantly. Our free online tool is perfect for electronics and electrical engineering tasks.",
        "route": "/current-converter",
        "extraSlugs": [
                "free-current-converter-online",
                "current-converter-tool",
                "convert-amps-to-milliamps"
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
						url: "https://30tools.com/current-converter",
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
