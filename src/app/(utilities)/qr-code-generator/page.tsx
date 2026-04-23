import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free QR Code Generator Online – Fast & No Signup | 30tools",
	description: "Free qr code generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "qr code generator, free qr code generator, online qr code generator, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/qr-code-generator",
	},
	openGraph: {
		title: "Free QR Code Generator Online – Fast & No Signup | 30tools",
		description: "Free qr code generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/qr-code-generator",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free QR Code Generator Online – Fast & No Signup | 30tools",
		description: "Free qr code generator tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "qr-code-generator",
        "name": "QR Code Generator",
        "description": "Free qr code generator tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/qr-code-generator",
        "extraSlugs": [
                "custom-qr-generator",
                "free-qr-code-generator-online",
                "qr-code-generator-tool",
                "qr-code-maker-online"
        ],
        "popular": false,
        "category": "utilities"
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
						url: "https://30tools.com/qr-code-generator",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "utilities" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
