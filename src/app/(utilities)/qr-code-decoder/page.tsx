import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free QR Code Decoder Online – Fast & No Signup | 30tools",
	description: "Free qr code decoder tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
	keywords: "qr code decoder, free qr code decoder, online qr code decoder, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/qr-code-decoder",
	},
	openGraph: {
		title: "Free QR Code Decoder Online – Fast & No Signup | 30tools",
		description: "Free qr code decoder tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		url: "https://30tools.com/qr-code-decoder",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free QR Code Decoder Online – Fast & No Signup | 30tools",
		description: "Free qr code decoder tool to process your data instantly with privacy-friendly browser-based workflows. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "qr-code-decoder",
        "name": "QR Code Decoder",
        "description": "Free qr code decoder tool to process your data instantly with privacy-friendly browser-based workflows.",
        "route": "/qr-code-decoder",
        "extraSlugs": [
                "create-qr-code-free",
                "free-qr-code-decoder-online",
                "qr-code-decoder-tool",
                "qr-code-maker-online",
                "url-to-qr-code"
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
						url: "https://30tools.com/qr-code-decoder",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "utilities" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
