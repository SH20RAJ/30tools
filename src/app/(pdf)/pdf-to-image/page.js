import PdfToImageTool from "@/components/tools/pdf/PdfToImageTool";
import {
    BreadcrumbsEnhanced,
    FAQSection,
    ReviewSnippets,
    RelatedTools,
    UserComments,
    QuickActions,
} from "@/components/seo";
import {
    GeneratorToolFeatures,
    GeneratorToolExamples,
} from "@/components/seo/GeneratorToolsHub";
import { getPdfToolFAQs } from "@/constants/seo/pdf-faqs";

export const metadata = {
    title: "PDF to Image Converter Online (2026) - PDF to JPG/PNG | 30Tools",
    description:
        "Best free online pdf to image converter. extract pages from PDF as high-quality JPG or PNG images instantly. secure pdf to picture conversion online.",
    keywords:
        "pdf to image 2026, pdf to jpg, pdf to png, convert pdf to image, pdf to picture, free pdf to image, online pdf converter, extract pdf pages as images, pdf to image converter, save pdf as jpg, turn pdf into image, change pdf to photo, high quality pdf to jpg, pdf to image exact match",
    alternates: {
        canonical: "https://30tools.com/pdf-to-image",
    },
    openGraph: {
        title: "PDF to Image Converter - Convert PDF to JPG/PNG Free",
        description:
            "Convert PDF pages to high-quality JPG or PNG images online for free. Extract images from PDF securely. Fast, easy, and no installation required.",
        url: "https://30tools.com/pdf-to-image",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/pdf-to-image.jpg",
                width: 1200,
                height: 630,
                alt: "Free PDF to Image Converter",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "PDF to Image Converter - Convert PDF to JPG/PNG Free",
        description:
            "Convert PDF pages to high-quality JPG or PNG images online for free. Extract images from PDF securely. Fast, easy, and no installation required.",
        images: ["/og-images/pdf-to-image.jpg"],
        creator: "@30tools",
    },
    category: "PDF Tools",
};

export default function PdfToImagePage() {
    // Tool-specific data
    const toolData = {
        id: "pdf-to-image",
        name: "PDF to Image",
        description: "Convert PDF pages to image files",
        category: "pdf",
        route: "/pdf-to-image",
    };

    // Breadcrumb navigation
    const breadcrumbs = [
        { name: "PDF Tools", url: "/pdf-tools" },
        { name: "PDF to Image", url: "/pdf-to-image" },
    ];

    // Tool features
    const features = [
        "Convert to JPG & PNG",
        "High Quality Output",
        "Batch Conversion",
        "Download as ZIP",
        "Client-Side Processing",
        "No File Size Limit",
        "Secure & Private",
        "100% Free",
    ];

    // Usage examples
    const examples = [
        {
            title: "Share on Social Media",
            description: "Convert flyer to image",
            input: "Flyer.pdf",
            output: "Flyer.jpg",
        },
        {
            title: "Presentation Slides",
            description: "Extract slides as images",
            input: "Presentation.pdf",
            output: "Slide_1.png, Slide_2.png...",
        },
        {
            title: "Website Assets",
            description: "Convert vector PDF to raster",
            input: "Logo.pdf",
            output: "Logo.png",
        },
    ];

    // FAQ data
    const faqs = getPdfToolFAQs("pdf-to-image");

    // Related tools
    const relatedTools = [
        {
            id: "jpg-to-pdf",
            name: "JPG to PDF",
            description: "Convert JPG to PDF",
            route: "/jpg-to-pdf",
            category: "pdf",
        },
        {
            id: "png-to-pdf",
            name: "PNG to PDF",
            description: "Convert PNG to PDF",
            route: "/png-to-pdf",
            category: "pdf",
        },
        {
            id: "pdf-compressor",
            name: "PDF Compressor",
            description: "Reduce PDF size",
            route: "/pdf-compressor",
            category: "pdf",
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Enhanced Breadcrumbs with Schema */}
            <div className="container mx-auto px-4 pt-6">
                <BreadcrumbsEnhanced customBreadcrumbs={breadcrumbs} />
            </div>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">
                        Free PDF to Image Converter
                    </h1>
                    <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
                        Convert your PDF pages to high-quality JPG or PNG images instantly.
                        Extract every page as a separate image file securely in your
                        browser.
                    </p>

                    <QuickActions
                        toolName="PDF to Image"
                        toolUrl="https://30tools.com/pdf-to-image"
                        showBookmark={true}
                        showShare={true}
                    />
                </div>

                {/* Tool Interface */}
                <div className="mb-12">
                    <PdfToImageTool />
                </div>

                {/* Key Features */}
                <GeneratorToolFeatures tool={toolData} features={features} />

                {/* Usage Examples */}
                <GeneratorToolExamples
                    tool={toolData}
                    examples={examples}
                    title="Why Convert PDF to Image?"
                />

                {/* Visual Content Section (SEO & Internal Linking) */}
                <section className="mb-12 bg-gradient-to-br from-pink-50 to-transparent dark:from-pink-950/20 p-8 md:p-12 rounded-3xl border border-pink-100 dark:border-pink-900/50">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">
                            Visual <span className="text-primary">Content Creation</span>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="bg-card p-6 rounded-2xl shadow-sm border border-border/50 order-2 md:order-1">
                                <h4 className="font-bold mb-4 border-b border-border/50 pb-2">Format Benefits</h4>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex justify-between">
                                        <span>JPG</span>
                                        <span className="font-bold text-pink-600">Small Size (Web)</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>PNG</span>
                                        <span className="font-bold text-purple-600">High Quality (Print)</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>ZIP</span>
                                        <span className="font-bold text-blue-600">Bulk Download</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-6 order-1 md:order-2">
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Social Media Marketing</h3>
                                    <p className="text-sm text-muted-foreground">
                                        PDF flyers don't work on Instagram. Convert your promo materials to high-quality JPGs instantly.
                                        Need to do the reverse? Use our{" "}
                                        <a href="/image-to-pdf" className="text-primary hover:underline font-medium">
                                            Image to PDF
                                        </a>{" "}
                                        tool to create a lookbook from your best posts.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-2">Web Development Assets</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Extract vector logos or diagrams from PDF manuals as PNGs for transparency support.
                                        Once you have your images, you can create a new compilation with our{" "}
                                        <a href="/jpg-to-pdf" className="text-primary hover:underline font-medium">
                                            JPG to PDF
                                        </a>{" "}
                                        converter.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* User Reviews */}
                <div className="mb-12">
                    <ReviewSnippets
                        toolId="pdf-to-image"
                        title="User Reviews"
                        showRatingSummary={true}
                        variant="grid"
                        limit={6}
                    />
                </div>

                {/* How to Use Section */}
                <div className="mb-12 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        How to Convert PDF to Image
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-card p-6 rounded-xl border text-center relative">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                1
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Upload PDF</h3>
                            <p className="text-muted-foreground text-sm">
                                Select the PDF file you want to convert.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-xl border text-center relative">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                2
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Convert</h3>
                            <p className="text-muted-foreground text-sm">
                                Click convert to transform pages to images.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-xl border text-center relative">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                3
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Download</h3>
                            <p className="text-muted-foreground text-sm">
                                Save your images individually or as a ZIP.
                            </p>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mb-12">
                    <FAQSection
                        faqs={faqs}
                        title="PDF to Image FAQ"
                        categoryTitle="Document Conversion"
                        variant="accordion"
                        showSchema={true}
                    />
                </div>

                {/* Related Tools */}
                <div className="mb-12">
                    <RelatedTools
                        currentTool="pdf-to-image"
                        category="pdf"
                        tools={relatedTools}
                        title="More PDF Tools"
                    />
                </div>

                {/* User Comments */}
                <UserComments
                    toolId="pdf-to-image"
                    toolName="PDF to Image"
                    showStats={true}
                    allowComments={true}
                />
            </main>

            {/* Structured Data for Tool */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            name: "Free PDF to Image Converter",
                            description:
                                "Convert PDF pages to high-quality JPG or PNG images online for free.",
                            url: "https://30tools.com/pdf-to-image",
                            applicationCategory: "UtilityApplication",
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
                            featureList: features,
                            screenshot: "https://30tools.com/screenshots/pdf-to-image.jpg",
                            aggregateRating: {
                                "@type": "AggregateRating",
                                ratingValue: "4.6",
                                reviewCount: "380",
                                bestRating: "5",
                                worstRating: "1",
                            },
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "HowTo",
                            name: "How to Convert PDF to Image",
                            step: [
                                {
                                    "@type": "HowToStep",
                                    name: "Upload PDF",
                                    text: "Select the PDF file you want to convert.",
                                    url: "https://30tools.com/pdf-to-image#step1",
                                },
                                {
                                    "@type": "HowToStep",
                                    name: "Convert",
                                    text: "Click convert to transform pages to images.",
                                    url: "https://30tools.com/pdf-to-image#step2",
                                },
                                {
                                    "@type": "HowToStep",
                                    name: "Download",
                                    text: "Save your images individually or as a ZIP.",
                                    url: "https://30tools.com/pdf-to-image#step3",
                                },
                            ],
                        },
                    ]),
                }}
            />
        </div>
    );
}
