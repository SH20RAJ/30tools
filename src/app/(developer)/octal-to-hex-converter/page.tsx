import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Octal to HEX Converter Online – Fast & No Signup | 30tools",
	description: "Transform octal values into hexadecimal format instantly. Our free online converter is perfect for low-level programming and memory address transformations. 100% free, fast, and no signup required.",
	keywords: "octal to hex converter, free octal to hex converter, online octal to hex converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/octal-to-hex-converter",
	},
	openGraph: {
		title: "Free Octal to HEX Converter Online – Fast & No Signup | 30tools",
		description: "Transform octal values into hexadecimal format instantly. Our free online converter is perfect for low-level programming and memory address transformations. 100% free, fast, and no signup required.",
		url: "https://30tools.com/octal-to-hex-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Octal to HEX Converter Online – Fast & No Signup | 30tools",
		description: "Transform octal values into hexadecimal format instantly. Our free online converter is perfect for low-level programming and memory address transformations. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "octal-to-hex-converter",
        "name": "Octal to HEX Converter",
        "description": "Transform octal values into hexadecimal format instantly. Our free online converter is perfect for low-level programming and memory address transformations.",
        "route": "/octal-to-hex-converter",
        "extraSlugs": [
                "free-octal-to-hex-converter-online",
                "octal-to-hex-converter-tool",
                "octal-to-hexadecimal-online"
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
						url: "https://30tools.com/octal-to-hex-converter",
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
