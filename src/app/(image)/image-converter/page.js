import ImageConverterTool from "@/components/tools/image/ImageConverterTool";

export const metadata = {
  title: "Image Converter - Convert JPG, PNG, WEBP, GIF, HEIC",
  description:
    "Convert Process instantly with our free image converter. High-quality conversion with privacy protection. No registration required, unlimited use.",
  keywords:
    "image converter, convert image format, jpg to png, png to jpg, webp converter, heic to jpeg, gif converter, batch image conversion, image format changer",
  alternates: {
    canonical: "https://30tools.com/image-converter",
  },
  openGraph: {
    title: "Free Image Converter Online - Convert Any Image Format",
    description:
      "Convert between JPG, PNG, WEBP, GIF, HEIC and more. Batch processing, quality control, and instant download. No registration required.",
    url: "https://30tools.com/image-converter",
    siteName: "30tools",
    images: [
      {
        url: "/og-images/image-converter.jpg",
        width: 1200,
        height: 630,
        alt: "Free Image Converter Tool - 30tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Image Converter Online - Convert Any Image Format",
    description:
      "Convert between JPG, PNG, WEBP, GIF, HEIC and more. Batch processing with quality control.",
    images: ["/og-images/image-converter.jpg"],
    creator: "@30tools",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRightLeft, Layers, Settings, Download } from "lucide-react";

const faqContent = [
  {
    question: "What image formats do you support?",
    answer:
      "We support conversion between all major formats: JPG, PNG, WebP, GIF, HEIC, BMP, and TIFF. You can convert from any supported format to any other supported format.",
  },
  {
    question: "Can I convert HEIC photos from my iPhone?",
    answer:
      "Yes! Our converter is perfect for converting HEIC photos to JPG or PNG so you can view them on Windows or share them easily.",
  },
  {
    question: "Is there a file size limit?",
    answer:
      "We support large files up to 50MB per image. You can also batch convert multiple images at once.",
  },
  {
    question: "Do you keep my images?",
    answer:
      "No. All processing happens in your browser for maximum privacy. Your images are never uploaded to our servers.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqContent.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function ImageConverterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Image Converter - Free Online Image Format Converter",
    description:
      "Convert images between different formats including JPG, PNG, WEBP, GIF, HEIC. Batch processing with quality and resolution control.",
    url: "https://30tools.com/image-converter",
    applicationCategory: "WebApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    creator: {
      "@type": "Organization",
      name: "30tools",
      url: "https://30tools.com",
    },
    featureList: [
      "Convert between 8+ image formats",
      "Batch image conversion",
      "Quality and resolution control",
      "HEIC to JPEG conversion",
      "WebP format support",
      "Maintain EXIF data option",
      "Custom compression settings",
      "Instant download",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "2847",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
            Image Converter
          </h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            Convert images to JPG, PNG, WebP, GIF, and more. Free online bulk image converter with high-quality results.
          </p>
        </div>

        <ImageConverterTool />

        <div className="mt-20 space-y-16 max-w-4xl mx-auto">
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card/50 border-primary/10">
              <CardHeader>
                <Layers className="w-8 h-8 text-purple-500 mb-2" />
                <CardTitle className="text-lg">All Formats</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Support for JPG, PNG, WebP, HEIC, GIF, BMP, and TIFF.
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-primary/10">
              <CardHeader>
                <ArrowRightLeft className="w-8 h-8 text-blue-500 mb-2" />
                <CardTitle className="text-lg">Batch Convert</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Convert dozens of images at once to save time.
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-primary/10">
              <CardHeader>
                <Settings className="w-8 h-8 text-orange-500 mb-2" />
                <CardTitle className="text-lg">Customizable</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Adjust quality, size, and orientation before converting.
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-primary/10">
              <CardHeader>
                <Download className="w-8 h-8 text-green-500 mb-2" />
                <CardTitle className="text-lg">Instant Save</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Download converted files individually or as a ZIP.
              </CardContent>
            </Card>
          </div>

          {/* Supported Formats Table */}
          <div className="bg-card rounded-2xl p-8 border shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-center">Popular Conversions</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "HEIC to JPG", "PNG to JPG", "WebP to PNG", "JPG to PDF",
                "HEIC to PNG", "JPG to PNG", "PNG to WebP", "BMP to JPG",
                "WebP to JPG", "GIF to MP4", "SVG to PNG", "TIFF to JPG"
              ].map((format) => (
                <div key={format} className="flex items-center justify-center p-3 bg-muted/50 rounded-lg text-sm font-medium hover:bg-primary/10 transition-colors cursor-default">
                  {format}
                </div>
              ))}
            </div>
          </div>

          {/* How to Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">How to Convert Images</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative p-6 bg-card border rounded-xl">
                <div className="absolute -top-4 left-6 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">Step 1</div>
                <h3 className="text-xl font-semibold mt-2 mb-2">Select Images</h3>
                <p className="text-muted-foreground">Click to browse or drag and drop your images into the converter box.</p>
              </div>
              <div className="relative p-6 bg-card border rounded-xl">
                <div className="absolute -top-4 left-6 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">Step 2</div>
                <h3 className="text-xl font-semibold mt-2 mb-2">Choose Format</h3>
                <p className="text-muted-foreground">Select your desired output format (e.g., JPG, PNG) and adjust quality settings.</p>
              </div>
              <div className="relative p-6 bg-card border rounded-xl">
                <div className="absolute -top-4 left-6 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">Step 3</div>
                <h3 className="text-xl font-semibold mt-2 mb-2">Convert & Save</h3>
                <p className="text-muted-foreground">Click "Convert" and download your new image files instantly.</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Common Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqContent.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
