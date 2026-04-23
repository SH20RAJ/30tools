import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free Binary to ASCII Converter Online – Fast & No Signup | 30tools",
	description: "Transform binary code (0s and 1s) into readable ASCII text instantly. Our free online converter is fast, accurate, and works entirely in your browser. No signup required.",
	keywords: "binary to ascii converter, free binary to ascii converter, online binary to ascii converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/binary-to-ascii-converter",
	},
	openGraph: {
		title: "Free Binary to ASCII Converter Online – Fast & No Signup | 30tools",
		description: "Transform binary code (0s and 1s) into readable ASCII text instantly. Our free online converter is fast, accurate, and works entirely in your browser. No signup required.",
		url: "https://30tools.com/binary-to-ascii-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Binary to ASCII Converter Online – Fast & No Signup | 30tools",
		description: "Transform binary code (0s and 1s) into readable ASCII text instantly. Our free online converter is fast, accurate, and works entirely in your browser. No signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "binary-to-ascii-converter",
        "name": "Binary to ASCII Converter",
        "description": "Transform binary code (0s and 1s) into readable ASCII text instantly. Our free online converter is fast, accurate, and works entirely in your browser. No signup required.",
        "route": "/binary-to-ascii-converter",
        "extraSlugs": [
                "free-binary-to-ascii-converter-online",
                "binary-to-ascii-converter-tool",
                "convert-binary-to-text-ascii"
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
						url: "https://30tools.com/binary-to-ascii-converter",
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
