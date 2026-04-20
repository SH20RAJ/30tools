export const metadata = {
	title: "Free Image Tools Online - No Signup | 30tools",
	description:
		"Free online image tools: remove backgrounds with AI, compress and resize photos, convert between PNG/JPG/WEBP/SVG, enhance image quality, and generate logos. Batch processing supported. No signup, no watermarks, browser-based.",
	keywords:
		"image tools, background remover, photo enhancer, image converter, image resizer, logo generator, free photo editor online, ai image tools, image compressor free, png to jpg converter, webp converter, batch image resize, remove background online free, image format converter",
	openGraph: {
		title: "Free Image Tools Online - No Signup | 30tools",
		description:
			"Remove backgrounds, compress, resize, and convert images with free AI-powered tools. Batch processing, no watermarks, no signup.",
		url: "https://30tools.com/image-tools",
		siteName: "30tools",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Free Image Tools Collection",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Image Tools - Free AI Photo Editing Suite",
		description:
			"Edit, convert, and enhance your photos with our free AI-powered tools.",
		images: ["/og-image.jpg"],
	},
};

const jsonLdSchemas = {
	collectionPage: {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "Online Image Tools",
		description:
			"Comprehensive suite of free image editing and generation tools.",
		url: "https://30tools.com/image-tools",
		mainEntity: {
			"@type": "ItemList",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					url: "https://30tools.com/background-remover",
					name: "Background Remover",
				},
				{
					"@type": "ListItem",
					position: 2,
					url: "https://30tools.com/image-compressor",
					name: "Image Compressor",
				},
				{
					"@type": "ListItem",
					position: 3,
					url: "https://30tools.com/image-converter",
					name: "Image Converter",
				},
				{
					"@type": "ListItem",
					position: 4,
					url: "https://30tools.com/image-resizer",
					name: "Image Resizer",
				},
				{
					"@type": "ListItem",
					position: 5,
					url: "https://30tools.com/photo-enhancer",
					name: "Photo Enhancer",
				},
				{
					"@type": "ListItem",
					position: 6,
					url: "https://30tools.com/logo-generator",
					name: "Logo Generator",
				},
			],
		},
	},
};

export default function ImageToolsLayout({ children }) {
	return (
		<div className="min-h-screen flex flex-col bg-background selection:bg-primary/10">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLdSchemas.collectionPage),
				}}
			/>
			<main className="flex-1">{children}</main>
		</div>
	);
}
