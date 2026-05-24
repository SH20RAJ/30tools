import { generateCollectionPageSchema } from "@/lib/seo";

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
				width: 1024,
				height: 541,
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
	robots: { index: true, follow: true },
};

const collectionPageSchema = generateCollectionPageSchema('image', {
	name: 'Online Image Tools',
	description: 'Comprehensive suite of free image editing and generation tools.'
});

export default function ImageToolsLayout({ children }) {
	return (
		<div className="min-h-screen flex flex-col bg-background selection:bg-primary/10">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(collectionPageSchema),
				}}
			/>
			<main className="flex-1">{children}</main>
		</div>
	);
}
