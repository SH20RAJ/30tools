import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free Base64 Decode Online – Fast & No Signup | 30tools",
	description: "Decode Base64 strings back to their original plain text instantly. Our privacy-first tool processes everything in your browser, ensuring your data never leaves your device. 100% free, fast, and no signup required.",
	keywords: "base64 decode, free base64 decode, online base64 decode, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/base64-decode",
	},
	openGraph: {
		title: "Free Base64 Decode Online – Fast & No Signup | 30tools",
		description: "Decode Base64 strings back to their original plain text instantly. Our privacy-first tool processes everything in your browser, ensuring your data never leaves your device. 100% free, fast, and no signup required.",
		url: "https://30tools.com/base64-decode",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Base64 Decode Online – Fast & No Signup | 30tools",
		description: "Decode Base64 strings back to their original plain text instantly. Our privacy-first tool processes everything in your browser, ensuring your data never leaves your device. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "base64-decode",
        "name": "Base64 Decode",
        "description": "Decode Base64 strings back to their original plain text instantly. Our privacy-first tool processes everything in your browser, ensuring your data never leaves your device.",
        "route": "/base64-decode",
        "extraSlugs": [
                "base64-decode-tool",
                "decode-base64-string",
                "free-base64-decode-online",
                "online-base64-decoder"
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
						url: "https://30tools.com/base64-decode",
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
