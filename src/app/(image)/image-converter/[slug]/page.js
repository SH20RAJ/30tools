
import { notFound } from 'next/navigation';
import ImageConverterTool from "@/components/tools/image/ImageConverterTool";
import { BreadcrumbsEnhanced, QuickActions } from "@/components/seo";

// Valid conversions
const CONVERSIONS = {
    'png-to-jpg': { from: 'PNG', to: 'jpeg', title: 'PNG to JPG' },
    'jpg-to-png': { from: 'JPG', to: 'png', title: 'JPG to PNG' },
    'webp-to-jpg': { from: 'WebP', to: 'jpeg', title: 'WebP to JPG' },
    'heic-to-jpg': { from: 'HEIC', to: 'jpeg', title: 'HEIC to JPG' },
    'png-to-webp': { from: 'PNG', to: 'webp', title: 'PNG to WebP' },
    'jpg-to-webp': { from: 'JPG', to: 'webp', title: 'JPG to WebP' },
};

export async function generateStaticParams() {
    return Object.keys(CONVERSIONS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
    const conversion = CONVERSIONS[slug];
    if (!conversion) return {};

    return {
        title: `Convert ${conversion.title} Online Free - Fast Batch Converter`,
        description: `Free online ${conversion.title} converter. Convert your ${conversion.from} images to ${conversion.to.toUpperCase()} instantly. No limits, secure, and fast.`,
        alternates: {
            canonical: `https://30tools.com/image-converter/${slug}`
        },
        openGraph: {
            title: `Convert ${conversion.title} Online Free`,
            description: `Free online ${conversion.title} converter.`,
            type: 'website'
        }
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
                        The best free tool to convert {conversion.from} files to {conversion.to.toUpperCase()}.
                        Drag and drop your images below to start.
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
