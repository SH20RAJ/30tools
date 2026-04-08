import { notFound } from "next/navigation";
import { BreadcrumbsEnhanced } from "@/components/seo";
import ImageConverterTool from "@/components/tools/image/ImageConverterTool";

// Valid conversions
const CONVERSIONS = {
	"png-to-jpg": { from: "PNG", to: "jpeg", title: "PNG to JPG" },
	"jpg-to-png": { from: "JPG", to: "png", title: "JPG to PNG" },
	"webp-to-jpg": { from: "WebP", to: "jpeg", title: "WebP to JPG" },
	"heic-to-jpg": { from: "HEIC", to: "jpeg", title: "HEIC to JPG" },
	"png-to-webp": { from: "PNG", to: "webp", title: "PNG to WebP" },
	"jpg-to-webp": { from: "JPG", to: "webp", title: "JPG to WebP" },
};

export async function generateStaticParams() {
	return Object.keys(CONVERSIONS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
	const conversion = CONVERSIONS[slug];
	if (!conversion) return {};

	const title = `Convert ${conversion.title} Online Free - Fast Batch Converter`;
	const description = `Free online ${conversion.title} converter. Convert your ${conversion.from} images to ${conversion.to.toUpperCase()} instantly. No limits, secure, and fast.`;
	const url = `https://30tools.com/image-converter/${slug}`;

	return {
		title,
		description,
		keywords: [
			"image converter",
			"free image converter",
			"online image converter",
			`${conversion.from.toLowerCase()} to ${conversion.to.toLowerCase()}`,
			"image format converter",
			"image conversion tool",
			"convert images online",
			"free file converter",
			"batch image converter",
			"fast image converter",
			"secure image conversion",
			"30tools",
			"free online tools",
			"image tools",
			"file conversion",
		],
		alternates: {
			canonical: url,
		},
		openGraph: {
			title,
			description,
			url,
			siteName: "30tools",
			images: [{ url: "/og-image.jpg" }],
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: ["/og-image.jpg"],
		},
	};
}

export default function DynamicConverterPage({ params: { slug } }) {
	const conversion = CONVERSIONS[slug];
	if (!conversion) notFound();

	const breadcrumbs = [
		{ name: "Image Tools", url: "/image-tools" },
		{ name: "Image Converter", url: "/image-converter" },
		{ name: conversion.title, url: `/image-converter/${slug}` },
	];

	return (
		<div className="min-h-screen bg-background">
			<div className="container mx-auto px-4 pt-6">
				<BreadcrumbsEnhanced customBreadcrumbs={breadcrumbs} />
			</div>
			<main className="container mx-auto px-4 py-8">
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold mb-4">
						Convert {conversion.title} Free
					</h1>
					<p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
						The best free tool to convert {conversion.from} files to{" "}
						{conversion.to.toUpperCase()}. Drag and drop your images below to
						start.
					</p>
					<div className="flex justify-center gap-4 text-sm text-muted-foreground mb-8">
						<span>⚡ Fast Conversion</span>
						<span>🔒 Secure Polish</span>
						<span>✨ High Quality</span>
					</div>
				</div>

				<div className="mb-12">
					<ImageConverterTool defaultOutputFormat={conversion.to} />
				</div>
			</main>
		</div>
	);
}
