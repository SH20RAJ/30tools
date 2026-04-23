import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Binary to HEX Converter Online – Fast & No Signup | 30tools",
	description: "Transform binary code into hexadecimal format instantly. Our free online tool is perfect for low-level programming, data analysis, and memory debugging. Fast and secure. 100% free, fast, and no signup required.",
	keywords: "binary to hex converter, free binary to hex converter, online binary to hex converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/binary-to-hex-converter",
	},
	openGraph: {
		title: "Free Binary to HEX Converter Online – Fast & No Signup | 30tools",
		description: "Transform binary code into hexadecimal format instantly. Our free online tool is perfect for low-level programming, data analysis, and memory debugging. Fast and secure. 100% free, fast, and no signup required.",
		url: "https://30tools.com/binary-to-hex-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Binary to HEX Converter Online – Fast & No Signup | 30tools",
		description: "Transform binary code into hexadecimal format instantly. Our free online tool is perfect for low-level programming, data analysis, and memory debugging. Fast and secure. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "binary-to-hex-converter",
        "name": "Binary to HEX Converter",
        "description": "Transform binary code into hexadecimal format instantly. Our free online tool is perfect for low-level programming, data analysis, and memory debugging. Fast and secure.",
        "route": "/binary-to-hex-converter",
        "extraSlugs": [
                "free-binary-to-hex-converter-online",
                "binary-to-hex-converter-tool",
                "convert-binary-to-hexadecimal"
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
						url: "https://30tools.com/binary-to-hex-converter",
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
