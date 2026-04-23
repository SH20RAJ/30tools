import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Text to Binary Converter Online – Fast & No Signup | 30tools",
	description: "Translate text into binary code (0s and 1s) instantly. Our free online converter is perfect for learning how computers represent data and creating secret binary messages. 100% free, fast, and no signup required.",
	keywords: "text to binary converter, free text to binary converter, online text to binary converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/text-to-binary-converter",
	},
	openGraph: {
		title: "Free Text to Binary Converter Online – Fast & No Signup | 30tools",
		description: "Translate text into binary code (0s and 1s) instantly. Our free online converter is perfect for learning how computers represent data and creating secret binary messages. 100% free, fast, and no signup required.",
		url: "https://30tools.com/text-to-binary-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Text to Binary Converter Online – Fast & No Signup | 30tools",
		description: "Translate text into binary code (0s and 1s) instantly. Our free online converter is perfect for learning how computers represent data and creating secret binary messages. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "text-to-binary-converter",
        "name": "Text to Binary Converter",
        "description": "Translate text into binary code (0s and 1s) instantly. Our free online converter is perfect for learning how computers represent data and creating secret binary messages.",
        "route": "/text-to-binary-converter",
        "extraSlugs": [
                "free-text-to-binary-converter-online",
                "text-to-binary-converter-tool",
                "convert-text-to-0101"
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
						url: "https://30tools.com/text-to-binary-converter",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "developer" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
