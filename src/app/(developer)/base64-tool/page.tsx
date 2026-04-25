import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Base64 Tool Online – Fast & No Signup | 30tools",
	description: "Encode and decode Base64 strings instantly with our free online tool. Perfect for web development, data transmission, and working with binary data in text format. 100% free, fast, and no signup required.",
	keywords: "base64 tool, free base64 tool, online base64 tool, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/base64-tool",
	},
	openGraph: {
		title: "Free Base64 Tool Online – Fast & No Signup | 30tools",
		description: "Encode and decode Base64 strings instantly with our free online tool. Perfect for web development, data transmission, and working with binary data in text format. 100% free, fast, and no signup required.",
		url: "https://30tools.com/base64-tool",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Base64 Tool Online – Fast & No Signup | 30tools",
		description: "Encode and decode Base64 strings instantly with our free online tool. Perfect for web development, data transmission, and working with binary data in text format. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "base64-tool",
        "name": "Base64 Tool",
        "description": "Encode and decode Base64 strings instantly with our free online tool. Perfect for web development, data transmission, and working with binary data in text format.",
        "route": "/base64-tool",
        "extraSlugs": [
                "base64-encoder-decoder-online",
                "decode-base64-string",
                "encode-text-to-base64"
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
						url: "https://30tools.com/base64-tool",
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
