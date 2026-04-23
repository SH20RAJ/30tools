import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Binary to Octal Converter Online – Fast & No Signup | 30tools",
	description: "Convert binary numbers to octal format instantly. Our free online converter provides quick and accurate base transformations for developers and technical students. 100% free, fast, and no signup required.",
	keywords: "binary to octal converter, free binary to octal converter, online binary to octal converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/binary-to-octal-converter",
	},
	openGraph: {
		title: "Free Binary to Octal Converter Online – Fast & No Signup | 30tools",
		description: "Convert binary numbers to octal format instantly. Our free online converter provides quick and accurate base transformations for developers and technical students. 100% free, fast, and no signup required.",
		url: "https://30tools.com/binary-to-octal-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Binary to Octal Converter Online – Fast & No Signup | 30tools",
		description: "Convert binary numbers to octal format instantly. Our free online converter provides quick and accurate base transformations for developers and technical students. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "binary-to-octal-converter",
        "name": "Binary to Octal Converter",
        "description": "Convert binary numbers to octal format instantly. Our free online converter provides quick and accurate base transformations for developers and technical students.",
        "route": "/binary-to-octal-converter",
        "extraSlugs": [
                "free-binary-to-octal-converter-online",
                "binary-to-octal-converter-tool",
                "binary-to-base8-converter"
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
						url: "https://30tools.com/binary-to-octal-converter",
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
