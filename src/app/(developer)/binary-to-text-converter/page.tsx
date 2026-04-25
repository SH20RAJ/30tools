import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Binary to Text Converter Online – Fast & No Signup | 30tools",
	description: "Decode binary strings into readable text instantly. Our free online tool is perfect for discovering hidden messages or debugging data streams. 100% free and secure. 100% free, fast, and no signup required.",
	keywords: "binary to text converter, free binary to text converter, online binary to text converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/binary-to-text-converter",
	},
	openGraph: {
		title: "Free Binary to Text Converter Online – Fast & No Signup | 30tools",
		description: "Decode binary strings into readable text instantly. Our free online tool is perfect for discovering hidden messages or debugging data streams. 100% free and secure. 100% free, fast, and no signup required.",
		url: "https://30tools.com/binary-to-text-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Binary to Text Converter Online – Fast & No Signup | 30tools",
		description: "Decode binary strings into readable text instantly. Our free online tool is perfect for discovering hidden messages or debugging data streams. 100% free and secure. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "binary-to-text-converter",
        "name": "Binary to Text Converter",
        "description": "Decode binary strings into readable text instantly. Our free online tool is perfect for discovering hidden messages or debugging data streams. 100% free and secure.",
        "route": "/binary-to-text-converter",
        "extraSlugs": [
                "binary-to-text-converter-tool",
                "binary-to-text-online",
                "free-binary-to-text-converter-online",
                "convert-01-to-text"
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
						url: "https://30tools.com/binary-to-text-converter",
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
