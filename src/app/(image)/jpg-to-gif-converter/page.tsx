import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free JPG to GIF Converter Online – Fast & No Signup | 30tools",
	description: "Turn your JPG photos into GIF format instantly. Perfect for simple animations or platform-specific requirements. Free, secure, and privacy-friendly online image converter. 100% free, fast, and no signup required.",
	keywords: "jpg to gif converter, free jpg to gif converter, online jpg to gif converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/jpg-to-gif-converter",
	},
	openGraph: {
		title: "Free JPG to GIF Converter Online – Fast & No Signup | 30tools",
		description: "Turn your JPG photos into GIF format instantly. Perfect for simple animations or platform-specific requirements. Free, secure, and privacy-friendly online image converter. 100% free, fast, and no signup required.",
		url: "https://30tools.com/jpg-to-gif-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JPG to GIF Converter Online – Fast & No Signup | 30tools",
		description: "Turn your JPG photos into GIF format instantly. Perfect for simple animations or platform-specific requirements. Free, secure, and privacy-friendly online image converter. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "jpg-to-gif-converter",
        "name": "JPG to GIF Converter",
        "description": "Turn your JPG photos into GIF format instantly. Perfect for simple animations or platform-specific requirements. Free, secure, and privacy-friendly online image converter.",
        "route": "/jpg-to-gif-converter",
        "extraSlugs": [
                "create-gif-online",
                "free-jpg-to-gif-converter-online",
                "jpg-to-gif-converter-tool",
                "make-gif-from-video",
                "mov-to-gif",
                "video-to-gif",
                "video-to-gif-converter",
                "youtube-gif-maker",
                "convert-jpeg-to-gif"
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
						url: "https://30tools.com/jpg-to-gif-converter",
						applicationCategory: "UtilitiesApplication",
						operatingSystem: "Any",
						offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
					}),
				}}
			/>

			<ToolLayout tool={{ ...tool, category: "image" }}>
				<ToolInteractivePlaceholder />
			</ToolLayout>
		</>
	);
}
