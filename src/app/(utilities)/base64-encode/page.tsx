import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Base64 Encode Online – Fast & No Signup | 30tools",
	description: "Encode plain text into Base64 format instantly. Our free online tool is perfect for developers, data transmission, and secure character representation in web URLs. 100% free, fast, and no signup required.",
	keywords: "base64 encode, free base64 encode, online base64 encode, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/base64-encode",
	},
	openGraph: {
		title: "Free Base64 Encode Online – Fast & No Signup | 30tools",
		description: "Encode plain text into Base64 format instantly. Our free online tool is perfect for developers, data transmission, and secure character representation in web URLs. 100% free, fast, and no signup required.",
		url: "https://30tools.com/base64-encode",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Base64 Encode Online – Fast & No Signup | 30tools",
		description: "Encode plain text into Base64 format instantly. Our free online tool is perfect for developers, data transmission, and secure character representation in web URLs. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "base64-encode",
        "name": "Base64 Encode",
        "description": "Encode plain text into Base64 format instantly. Our free online tool is perfect for developers, data transmission, and secure character representation in web URLs.",
        "route": "/base64-encode",
        "extraSlugs": [
                "base64-encode-tool",
                "encode-base64-online",
                "free-base64-encode-online",
                "online-base64-encoder"
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
						url: "https://30tools.com/base64-encode",
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
