
import [slug]Tool from '@/components/tools/converter/[slug]Tool';

export const metadata = {
  title: "[slug] - Free Online Converter | Instant Conversion",
  description: "Convert Process instantly with our free [slug]. High-quality conversion with privacy protection. No registration required, unlimited use.",
  keywords: [
    "[slug]",
    "[slug] online",
    "free [slug]",
    "[slug] tool",
    "online [slug] free",
    "converter",
    "online converter",
    "free converter",
    "file converter",
    "conversion tool",
    "convert online",
    "instant conversion",
    "bulk converter",
    "professional converter",
    "secure conversion",
    "privacy focused converter",
    "unlimited conversion",
    "fast converter",
    "quality converter"
  ].join(", "),
  openGraph: {
    title: "[slug] - Free Online Converter | Instant Conversion",
    description: "Convert Process instantly with our free [slug]. High-quality conversion with privacy protection. No registration required, unlimited use.",
    url: "https://30tools.com/[slug]",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/[slug].jpg",
        width: 1200,
        height: 630,
        alt: "[slug] - Free Online Converter | Instant Conversion"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "[slug] - Free Online Converter | Instant Conversion",
    description: "Convert Process instantly with our free [slug]. High-quality conversion with privacy protection. No registration required, unlimited use.",
    images: ["/og-images/[slug].jpg"],
    creator: "@30tools"
  },
  alternates: {
    canonical: "https://30tools.com/[slug]"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Converter Tools',
  other: {
    'application-name': '30tools',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': '[slug] - 30tools',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#000000'
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "[slug]",
  "description": "Convert Process instantly with our free [slug]. High-quality conversion with privacy protection. No registration required, unlimited use.",
  "url": "https://30tools.com/[slug]",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "permissions": "browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Organization",
    "name": "30tools",
    "url": "https://30tools.com"
  }
};

// src/app/[locale]/(image)/image-converter/[slug]/page.js

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
