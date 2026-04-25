import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free HEX to Text Converter Online – Fast & No Signup | 30tools",
	description: "Convert hexadecimal strings back to readable text instantly. Our free online HEX to Text tool is perfect for decoding data, debugging, and discovering hidden text streams. 100% free, fast, and no signup required.",
	keywords: "hex to text converter, free hex to text converter, online hex to text converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/hex-to-text-converter",
	},
	openGraph: {
		title: "Free HEX to Text Converter Online – Fast & No Signup | 30tools",
		description: "Convert hexadecimal strings back to readable text instantly. Our free online HEX to Text tool is perfect for decoding data, debugging, and discovering hidden text streams. 100% free, fast, and no signup required.",
		url: "https://30tools.com/hex-to-text-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free HEX to Text Converter Online – Fast & No Signup | 30tools",
		description: "Convert hexadecimal strings back to readable text instantly. Our free online HEX to Text tool is perfect for decoding data, debugging, and discovering hidden text streams. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "hex-to-text-converter",
        "name": "HEX to Text Converter",
        "description": "Convert hexadecimal strings back to readable text instantly. Our free online HEX to Text tool is perfect for decoding data, debugging, and discovering hidden text streams.",
        "route": "/hex-to-text-converter",
        "extraSlugs": [
                "free-hex-to-text-converter-online",
                "hex-to-text-converter-tool",
                "decode-hex-to-string"
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
						url: "https://30tools.com/hex-to-text-converter",
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
