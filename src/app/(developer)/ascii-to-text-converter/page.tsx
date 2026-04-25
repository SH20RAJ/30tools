import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free ASCII to Text Converter Online – Fast & No Signup | 30tools",
	description: "Convert ASCII character codes back to readable text instantly. Our free online tool makes it easy to decode ASCII sequences for development and debugging tasks. 100% free, fast, and no signup required.",
	keywords: "ascii to text converter, free ascii to text converter, online ascii to text converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/ascii-to-text-converter",
	},
	openGraph: {
		title: "Free ASCII to Text Converter Online – Fast & No Signup | 30tools",
		description: "Convert ASCII character codes back to readable text instantly. Our free online tool makes it easy to decode ASCII sequences for development and debugging tasks. 100% free, fast, and no signup required.",
		url: "https://30tools.com/ascii-to-text-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free ASCII to Text Converter Online – Fast & No Signup | 30tools",
		description: "Convert ASCII character codes back to readable text instantly. Our free online tool makes it easy to decode ASCII sequences for development and debugging tasks. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "ascii-to-text-converter",
        "name": "ASCII to Text Converter",
        "description": "Convert ASCII character codes back to readable text instantly. Our free online tool makes it easy to decode ASCII sequences for development and debugging tasks.",
        "route": "/ascii-to-text-converter",
        "extraSlugs": [
                "free-ascii-to-text-converter-online",
                "ascii-to-text-converter-tool",
                "decode-ascii-to-text"
        ],
        "popular": false,
        "category": "developer"
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
						url: "https://30tools.com/ascii-to-text-converter",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "developer" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
