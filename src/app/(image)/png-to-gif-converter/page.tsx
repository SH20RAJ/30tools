import ToolLayout from "@/components/tools/shared/ToolLayout";
import RegisteredToolMount from "@/components/tools/shared/RegisteredToolMount";


export const metadata = {
	title: "Free PNG to GIF Converter Online – Fast & No Signup | 30tools",
	description: "Convert PNG photos to GIF format instantly. Perfect for web graphics and simple animations. Free, secure, and works entirely in your browser without file uploads. 100% free, fast, and no signup required.",
	keywords: "png to gif converter, free png to gif converter, online png to gif converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/png-to-gif-converter",
	},
	openGraph: {
		title: "Free PNG to GIF Converter Online – Fast & No Signup | 30tools",
		description: "Convert PNG photos to GIF format instantly. Perfect for web graphics and simple animations. Free, secure, and works entirely in your browser without file uploads. 100% free, fast, and no signup required.",
		url: "https://30tools.com/png-to-gif-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free PNG to GIF Converter Online – Fast & No Signup | 30tools",
		description: "Convert PNG photos to GIF format instantly. Perfect for web graphics and simple animations. Free, secure, and works entirely in your browser without file uploads. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "png-to-gif-converter",
        "name": "PNG to GIF Converter",
        "description": "Convert PNG photos to GIF format instantly. Perfect for web graphics and simple animations. Free, secure, and works entirely in your browser without file uploads.",
        "route": "/png-to-gif-converter",
        "extraSlugs": [
                "free-png-to-gif-converter-online",
                "png-to-gif-converter-tool",
                "convert-png-to-gif-online"
        ],
        "popular": false,
        "category": "image"
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
						url: "https://30tools.com/png-to-gif-converter",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "image" }}>
				<RegisteredToolMount toolId={tool.id} />
			</ToolLayout>
		</>
	);
}
