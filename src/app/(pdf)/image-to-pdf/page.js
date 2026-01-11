import ImageToPDFTool from "@/components/tools/pdf/ImageToPDFTool";
import {
    BreadcrumbsEnhanced,
    FAQSection,
    ReviewSnippets,
    RelatedTools,
    UserComments,
    QuickActions,
} from "@/components/seo";
import { Camera, FileText, FolderArchive, Share2 } from "lucide-react";
import {
    GeneratorToolFeatures,
    GeneratorToolExamples,
} from "@/components/seo/GeneratorToolsHub";
import { getPdfToolFAQs } from "@/constants/seo/pdf-faqs";

export const metadata = {
    title: "Image to PDF Converter Online (2026) - Photos to PDF | 30Tools",
    description:
        "Best free online image to pdf converter. combine multiple JPG, PNG, BMP, and GIF images into a professional PDF document instantly and safely.",
    keywords:
        "image to pdf 2026, jpg to pdf, png to pdf, convert image to pdf, combine images to pdf, free image to pdf, online pdf converter, picture to pdf, best image to pdf, convert jpg to pdf online free, turn photos into pdf, make pdf from images, jpg to pdf converter free no watermark, create pdf from pictures, photo to pdf converter",
    alternates: {
        canonical: "https://30tools.com/image-to-pdf",
    },
    openGraph: {
        title: "Image to PDF Converter - Convert JPG/PNG to PDF Free",
        description:
            "Convert images to PDF online for free. Combine multiple JPG, PNG, BMP, and GIF images into a single PDF document. Secure, fast, and easy.",
        url: "https://30tools.com/image-to-pdf",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/image-to-pdf.jpg",
                width: 1200,
                height: 630,
                alt: "Free Image to PDF Converter",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Image to PDF Converter - Convert JPG/PNG to PDF Free",
        description:
            "Convert images to PDF online for free. Combine multiple JPG, PNG, BMP, and GIF images into a single PDF document. Secure, fast, and easy.",
        images: ["/og-images/image-to-pdf.jpg"],
        creator: "@30tools",
    },
    category: "PDF Tools",
};

export default function ImageToPDFPage() {
    // Tool-specific data
    const toolData = {
        id: "image-to-pdf",
        name: "Image to PDF",
        description: "Convert and combine images into a PDF document",
        category: "pdf",
        route: "/image-to-pdf",
    };

    // Breadcrumb navigation
    const breadcrumbs = [
        { name: "PDF Tools", url: "/pdf-tools" },
        { name: "Image to PDF", url: "/image-to-pdf" },
    ];

    // Tool features
    const features = [
        "Convert JPG, PNG, BMP, GIF",
        "Combine Multiple Images",
        "Reorder Pages",
        "High Quality Output",
        "Client-Side Processing",
        "No File Size Limit",
        "Secure & Private",
        "100% Free",
    ];

    // Usage examples
    const examples = [
        {
            title: "Photo Album",
            description: "Share memories",
            input: "Photo1.jpg, Photo2.jpg...",
            output: "Album.pdf",
        },
        {
            title: "Scanned Documents",
            description: "Combine scans",
            input: "Page1.png, Page2.png...",
            output: "Document.pdf",
        },
        {
            title: "Design Portfolio",
            description: "Showcase work",
            input: "Design1.jpg, Design2.jpg...",
            output: "Portfolio.pdf",
        },
    ];

    // FAQ data
    const faqs = getPdfToolFAQs("image-to-pdf");

    // Related tools
    const relatedTools = [
        {
            id: "pdf-to-image",
            name: "PDF to Image",
            description: "Convert PDF to Image",
            route: "/pdf-to-image",
            category: "pdf",
        },
        {
            id: "jpg-to-pdf",
            name: "JPG to PDF",
            description: "Convert JPG to PDF",
            route: "/jpg-to-pdf",
            category: "pdf",
        },
        {
            id: "pdf-merger",
            name: "PDF Merger",
            description: "Combine multiple PDFs",
            route: "/pdf-merger",
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
                        Free Image to PDF Converter
                    </h1>
                    <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
                        Convert and combine your images (JPG, PNG, BMP, GIF) into a single
                        PDF document. Reorder pages and create professional PDFs instantly
                        and securely.
                    </p>

                    <QuickActions
                        toolName="Image to PDF"
                        toolUrl="https://30tools.com/image-to-pdf"
                        showBookmark={true}
                        showShare={true}
                    />
                </div>

                {/* Tool Interface */}
                <div className="mb-12">
                    <ImageToPDFTool />
                </div>

                {/* Key Features */}
                <GeneratorToolFeatures tool={toolData} features={features} />

                {/* Usage Examples */}
                <GeneratorToolExamples
                    tool={toolData}
                    examples={examples}
                    title="Why Convert Image to PDF?"
                />

                {/* Professional Use Cases Section (SEO & Internal Linking) */}
                <section className="mb-12 bg-gradient-to-br from-indigo-50 to-transparent dark:from-indigo-950/20 p-8 md:p-12 rounded-3xl border border-indigo-100 dark:border-indigo-900/50">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">
                            Professional <span className="text-primary">Use Cases</span>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <div className="p-3 bg-background rounded-xl shadow-sm">
                                        <Camera className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Digital Portfolios</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Photographers and designers, looking for <strong>how to make a pdf portfolio</strong>?
                                            Combine your best shots into a single file. Afterward, use our{" "}
                                            <a href="/pdf-compressor" className="text-primary hover:underline font-medium">
                                                PDF Compressor
                                            </a>{" "}
                                            to ensure it's small enough to email to clients without losing quality.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="p-3 bg-background rounded-xl shadow-sm">
                                        <FileText className="w-6 h-6 text-rose-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Expense Management</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Turn chaos into order by converting receipt photos to PDF.
                                            Need to submit a monthly report? Use our{" "}
                                            <a href="/pdf-merger" className="text-primary hover:underline font-medium">
                                                PDF Merger
                                            </a>{" "}
                                            to join all your daily receipt PDFs into one comprehensive document for reimbursement.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-background p-6 rounded-2xl shadow-sm border border-border/50">
                                <h4 className="font-bold mb-4 border-b border-border/50 pb-2">Why Go Digital?</h4>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <FolderArchive className="w-5 h-5 text-amber-500" />
                                        <div className="text-sm">
                                            <p className="font-bold">Archival Safe</p>
                                            <p className="text-xs text-muted-foreground">PDFs don't degrade like physical thermal receipts.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Share2 className="w-5 h-5 text-blue-500" />
                                        <div className="text-sm">
                                            <p className="font-bold">Easy Sharing</p>
                                            <p className="text-xs text-muted-foreground">Share an entire album as one link or file.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* User Reviews */}
                <div className="mb-12">
                    <ReviewSnippets
                        toolId="image-to-pdf"
                        title="User Reviews"
                        showRatingSummary={true}
                        variant="grid"
                        limit={6}
                    />
                </div>

                {/* How to Use Section */}
                <div className="mb-12 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        How to Convert Image to PDF
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-card p-6 rounded-xl border text-center relative">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                1
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Upload Images</h3>
                            <p className="text-muted-foreground text-sm">
                                Select your JPG, PNG, or other image files.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-xl border text-center relative">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                2
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Arrange</h3>
                            <p className="text-muted-foreground text-sm">
                                Reorder images if needed and click convert.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-xl border text-center relative">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                3
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Download</h3>
                            <p className="text-muted-foreground text-sm">
                                Save your combined PDF document.
                            </p>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mb-12">
                    <FAQSection
                        faqs={faqs}
                        title="Image to PDF FAQ"
                        categoryTitle="Document Conversion"
                        variant="accordion"
                        showSchema={true}
                    />
                </div>

                {/* Related Tools */}
                <div className="mb-12">
                    <RelatedTools
                        currentTool="image-to-pdf"
                        category="pdf"
                        tools={relatedTools}
                        title="More PDF Tools"
                    />
                </div>

                {/* User Comments */}
                <UserComments
                    toolId="image-to-pdf"
                    toolName="Image to PDF"
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
                            name: "Free Image to PDF Converter",
                            description:
                                "Convert images to PDF online for free. Combine multiple JPG, PNG, BMP, and GIF images.",
                            url: "https://30tools.com/image-to-pdf",
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
                            screenshot: "https://30tools.com/screenshots/image-to-pdf.jpg",
                            aggregateRating: {
                                "@type": "AggregateRating",
                                ratingValue: "4.7",
                                reviewCount: "410",
                                bestRating: "5",
                                worstRating: "1",
                            },
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "HowTo",
                            name: "How to Convert Image to PDF",
                            step: [
                                {
                                    "@type": "HowToStep",
                                    name: "Upload Images",
                                    text: "Select your JPG, PNG, or other image files.",
                                    url: "https://30tools.com/image-to-pdf#step1",
                                },
                                {
                                    "@type": "HowToStep",
                                    name: "Arrange",
                                    text: "Reorder images if needed and click convert.",
                                    url: "https://30tools.com/image-to-pdf#step2",
                                },
                                {
                                    "@type": "HowToStep",
                                    name: "Download",
                                    text: "Save your combined PDF document.",
                                    url: "https://30tools.com/image-to-pdf#step3",
                                },
                            ],
                        },
                    ]),
                }}
            />
        </div>
    );
}
