import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free HEX to Binary Converter Online – Fast & No Signup | 30tools",
	description: "Transform hexadecimal values into binary code instantly. Our free online HEX to Binary converter is perfect for developers, hardware engineers, and technical students. Fast and secure. 100% free, fast, and no signup required.",
	keywords: "hex to binary converter, free hex to binary converter, online hex to binary converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/hex-to-binary-converter",
	},
	openGraph: {
		title: "Free HEX to Binary Converter Online – Fast & No Signup | 30tools",
		description: "Transform hexadecimal values into binary code instantly. Our free online HEX to Binary converter is perfect for developers, hardware engineers, and technical students. Fast and secure. 100% free, fast, and no signup required.",
		url: "https://30tools.com/hex-to-binary-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free HEX to Binary Converter Online – Fast & No Signup | 30tools",
		description: "Transform hexadecimal values into binary code instantly. Our free online HEX to Binary converter is perfect for developers, hardware engineers, and technical students. Fast and secure. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "hex-to-binary-converter",
        "name": "HEX to Binary Converter",
        "description": "Transform hexadecimal values into binary code instantly. Our free online HEX to Binary converter is perfect for developers, hardware engineers, and technical students. Fast and secure.",
        "route": "/hex-to-binary-converter",
        "extraSlugs": [
                "free-hex-to-binary-converter-online",
                "hex-to-binary-converter-tool",
                "convert-hex-to-binary-online"
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
						url: "https://30tools.com/hex-to-binary-converter",
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
