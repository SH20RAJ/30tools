import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free ASCII to Binary Converter Online – Fast & No Signup | 30tools",
	description: "Convert ASCII text to binary code instantly. Our free online converter is perfect for computer science students, developers, and hobbyists. Fast, secure, and browser-based. 100% free, fast, and no signup required.",
	keywords: "ascii to binary converter, free ascii to binary converter, online ascii to binary converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/ascii-to-binary-converter",
	},
	openGraph: {
		title: "Free ASCII to Binary Converter Online – Fast & No Signup | 30tools",
		description: "Convert ASCII text to binary code instantly. Our free online converter is perfect for computer science students, developers, and hobbyists. Fast, secure, and browser-based. 100% free, fast, and no signup required.",
		url: "https://30tools.com/ascii-to-binary-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free ASCII to Binary Converter Online – Fast & No Signup | 30tools",
		description: "Convert ASCII text to binary code instantly. Our free online converter is perfect for computer science students, developers, and hobbyists. Fast, secure, and browser-based. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "ascii-to-binary-converter",
        "name": "ASCII to Binary Converter",
        "description": "Convert ASCII text to binary code instantly. Our free online converter is perfect for computer science students, developers, and hobbyists. Fast, secure, and browser-based.",
        "route": "/ascii-to-binary-converter",
        "extraSlugs": [
                "ascii-to-binary",
                "ascii-to-binary-converter-tool",
                "binary-converter",
                "free-ascii-to-binary-converter-online",
                "convert-text-to-binary-code"
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
						url: "https://30tools.com/ascii-to-binary-converter",
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
