import ToolLayout from "@/components/tools/shared/ToolLayout";
import ToolInteractivePlaceholder from "@/components/tools/shared/ToolInteractivePlaceholder";


export const metadata = {
	title: "Free JPG to BMP Converter Online – Fast & No Signup | 30tools",
	description: "Convert JPG images to BMP (Bitmap) format for legacy system compatibility. Fast, free, and secure online converter that works in your browser without uploading files to any server. 100% free, fast, and no signup required.",
	keywords: "jpg to bmp converter, free jpg to bmp converter, online jpg to bmp converter, no signup, 30tools",
	alternates: {
		canonical: "https://30tools.com/jpg-to-bmp-converter",
	},
	openGraph: {
		title: "Free JPG to BMP Converter Online – Fast & No Signup | 30tools",
		description: "Convert JPG images to BMP (Bitmap) format for legacy system compatibility. Fast, free, and secure online converter that works in your browser without uploading files to any server. 100% free, fast, and no signup required.",
		url: "https://30tools.com/jpg-to-bmp-converter",
		siteName: "30tools",
		images: [{ url: "/og-image.jpg" }],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free JPG to BMP Converter Online – Fast & No Signup | 30tools",
		description: "Convert JPG images to BMP (Bitmap) format for legacy system compatibility. Fast, free, and secure online converter that works in your browser without uploading files to any server. 100% free, fast, and no signup required.",
		images: ["/og-image.jpg"],
	},
	robots: { index: true, follow: true },
};

export default async function ToolPage() {
	const tool = {
        "id": "jpg-to-bmp-converter",
        "name": "JPG to BMP Converter",
        "description": "Convert JPG images to BMP (Bitmap) format for legacy system compatibility. Fast, free, and secure online converter that works in your browser without uploading files to any server.",
        "route": "/jpg-to-bmp-converter",
        "extraSlugs": [
                "free-jpg-to-bmp-converter-online",
                "heic-to-jpg-converter",
                "jpg-to-bmp-converter-tool",
                "convert-jpeg-to-bmp"
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
						url: "https://30tools.com/jpg-to-bmp-converter",
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
