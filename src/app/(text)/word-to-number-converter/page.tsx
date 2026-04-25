import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Word to Number Converter Online – Fast & No Signup | 30tools",
	description: "Convert words into digits instantly with our free online Word to Number converter. Perfect for data entry, educational exercises, and technical documentation cleanup. 100% free, fast, and no signup required.",
	keywords: "word to number converter, free word to number converter, online word to number converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/word-to-number-converter",
	},
	openGraph: {
		title: "Free Word to Number Converter Online – Fast & No Signup | 30tools",
		description: "Convert words into digits instantly with our free online Word to Number converter. Perfect for data entry, educational exercises, and technical documentation cleanup. 100% free, fast, and no signup required.",
		url: "https://30tools.com/word-to-number-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Word to Number Converter Online – Fast & No Signup | 30tools",
		description: "Convert words into digits instantly with our free online Word to Number converter. Perfect for data entry, educational exercises, and technical documentation cleanup. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "word-to-number-converter",
        "name": "Word to Number Converter",
        "description": "Convert words into digits instantly with our free online Word to Number converter. Perfect for data entry, educational exercises, and technical documentation cleanup.",
        "route": "/word-to-number-converter",
        "extraSlugs": [
                "free-word-to-number-converter-online",
                "word-to-number-converter-tool",
                "word-to-number",
                "convert-text-to-digits"
        ],
        "popular": false,
        "category": "text"
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
						url: "https://30tools.com/word-to-number-converter",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "text" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
