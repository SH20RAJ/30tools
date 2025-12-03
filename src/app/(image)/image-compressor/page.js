import ImageCompressionTool from "@/components/tools/image/compression";
import { SEO_TEMPLATES } from "@/constants/seo/metadata-templates";

export const metadata = {
  title: SEO_TEMPLATES.IMAGE_COMPRESSOR.title,
  description: SEO_TEMPLATES.IMAGE_COMPRESSOR.description,
  keywords: SEO_TEMPLATES.IMAGE_COMPRESSOR.keywords,
  openGraph: {
    title: SEO_TEMPLATES.IMAGE_COMPRESSOR.title,
    description: SEO_TEMPLATES.IMAGE_COMPRESSOR.description,
    url: `https://30tools.com${SEO_TEMPLATES.IMAGE_COMPRESSOR.canonical}`,
    images: ["/og-image-compressor.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TEMPLATES.IMAGE_COMPRESSOR.title,
    description: SEO_TEMPLATES.IMAGE_COMPRESSOR.description,
    images: ["/og-image-compressor.jpg"],
  },
  alternates: {
    canonical: `https://30tools.com${SEO_TEMPLATES.IMAGE_COMPRESSOR.canonical}`,
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Image Compressor",
  description:
    "Professional image compressor for Process images online. Free, fast & secure image processing. No watermarks, maintains original quality.",
  url: "https://30tools.com/image-compressor",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  permissions: "browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Organization",
    name: "30tools",
    url: "https://30tools.com",
  },
};

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Zap, Shield, Image as ImageIcon } from "lucide-react";

const faqContent = [
  {
    question: "How does image compression work?",
    answer:
      "Image compression reduces file size by minimizing redundant data. Lossless compression keeps quality identical but reduces size less. Lossy compression (like JPEG) significantly reduces size by removing some visual data, often with little noticeable difference to the human eye.",
  },
  {
    question: "Is it safe to upload my photos?",
    answer:
      "Yes, absolutely. Our image compressor runs entirely in your browser. Your photos are never uploaded to any server, ensuring 100% privacy and security.",
  },
  {
    question: "Does compressing images reduce quality?",
    answer:
      "It depends on the compression level. 'Lossless' compression retains 100% quality. 'Lossy' compression reduces quality slightly to achieve much smaller file sizes, but our smart algorithm balances quality and size for the best results.",
  },
  {
    question: "What formats do you support?",
    answer:
      "We support all major image formats including JPG, PNG, WebP, and GIF. You can compress multiple formats at once.",
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

export default function ImageCompressorPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            Image Compressor
          </h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            Compress JPG, PNG, and WebP images online for free. Reduce image file size by up to 80% without losing quality.
          </p>
        </div>

        <ImageCompressionTool />

        <div className="mt-20 space-y-16 max-w-4xl mx-auto">
          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-none bg-transparent">
              <CardHeader className="p-0 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-2">
                  <Zap className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-muted-foreground">
                Compress dozens of images in seconds. Our browser-based technology processes files instantly without waiting for uploads.
              </CardContent>
            </Card>
            <Card className="border-none shadow-none bg-transparent">
              <CardHeader className="p-0 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-2">
                  <Shield className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">100% Secure</CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-muted-foreground">
                Your images never leave your device. All compression happens locally in your browser, guaranteeing complete privacy.
              </CardContent>
            </Card>
            <Card className="border-none shadow-none bg-transparent">
              <CardHeader className="p-0 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-2">
                  <ImageIcon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">High Quality</CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-muted-foreground">
                Smart compression algorithms reduce file size while maintaining visual quality. Perfect for web and print.
              </CardContent>
            </Card>
          </div>

          {/* How to Section */}
          <div className="bg-card rounded-2xl p-8 border shadow-sm">
            <h2 className="text-3xl font-bold mb-8 text-center">How to Compress Images Online</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto">1</div>
                <h3 className="font-semibold text-lg">Upload Images</h3>
                <p className="text-sm text-muted-foreground">Drag & drop your JPG, PNG, or WebP files onto the dropzone.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto">2</div>
                <h3 className="font-semibold text-lg">Auto Compress</h3>
                <p className="text-sm text-muted-foreground">Our tool automatically compresses your images to the optimal size.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto">3</div>
                <h3 className="font-semibold text-lg">Download</h3>
                <p className="text-sm text-muted-foreground">Download your compressed images individually or as a ZIP file.</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
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
