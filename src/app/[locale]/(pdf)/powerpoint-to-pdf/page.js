import PowerPointToPDFTool from "@/components/tools/pdf/PowerPointToPDFTool";
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
    title: "PowerPoint to PDF Converter - Convert PPT/PPTX to PDF | 30tools",
    description:
        "Convert PowerPoint presentations to PDF online for free. Supports PPT and PPTX formats. Preserves slides, layout, and fonts. Secure and fast.",
    keywords:
        "powerpoint to pdf, ppt to pdf, pptx to pdf, convert powerpoint to pdf, powerpoint converter, free ppt to pdf, online pdf converter, presentation to pdf",
    alternates: {
        canonical: "https://30tools.com/powerpoint-to-pdf",
    },
    openGraph: {
        title: "PowerPoint to PDF Converter - Convert PPT/PPTX to PDF",
        description:
            "Convert PowerPoint presentations to PDF online for free. Supports PPT and PPTX formats. Preserves slides, layout, and fonts. Secure and fast.",
        url: "https://30tools.com/powerpoint-to-pdf",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/powerpoint-to-pdf.jpg",
                width: 1200,
                height: 630,
                alt: "Free PowerPoint to PDF Converter",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "PowerPoint to PDF Converter - Convert PPT/PPTX to PDF",
        description:
            "Convert PowerPoint presentations to PDF online for free. Supports PPT and PPTX formats. Preserves slides, layout, and fonts. Secure and fast.",
        images: ["/og-images/powerpoint-to-pdf.jpg"],
        creator: "@30tools",
    },
    category: "PDF Tools",
};

export default function PowerPointToPDFPage() {
    // Tool-specific data
    const toolData = {
        id: "powerpoint-to-pdf",
        name: "PowerPoint to PDF",
        description: "Convert PowerPoint presentations to PDF format",
        category: "pdf",
        route: "/powerpoint-to-pdf",
    };

    // Breadcrumb navigation
    const breadcrumbs = [
        { name: "PDF Tools", url: "/pdf-tools" },
        { name: "PowerPoint to PDF", url: "/powerpoint-to-pdf" },
    ];

    // Tool features
    const features = [
        "Convert PPT & PPTX",
        "Preserve Slide Layout",
        "Maintain Fonts",
        "Batch Conversion",
        "Client-Side Processing",
        "No File Size Limit",
        "Secure & Private",
        "100% Free",
    ];

    // Usage examples
    const examples = [
        {
            title: "Lecture Slides",
            description: "Easy distribution",
            input: "Lecture_1.pptx",
            output: "Lecture_1.pdf",
        },
        {
            title: "Business Pitch",
            description: "Professional sharing",
            input: "Pitch_Deck.ppt",
            output: "Pitch_Deck.pdf",
        },
        {
            title: "Conference Talk",
            description: "Handout creation",
            input: "Talk.pptx",
            output: "Handout.pdf",
        },
    ];

    // FAQ data
    const faqs = getPdfToolFAQs("powerpoint-to-pdf");

    // Related tools
    const relatedTools = [
        {
            id: "word-to-pdf",
            name: "Word to PDF",
            description: "Convert Word to PDF",
            route: "/word-to-pdf",
            category: "pdf",
        },
        {
            id: "excel-to-pdf",
            name: "Excel to PDF",
            description: "Convert Excel to PDF",
            route: "/excel-to-pdf",
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
                        Free PowerPoint to PDF Converter
                    </h1>
                    <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
                        Convert your PowerPoint presentations (PPT, PPTX) to PDF format
                        instantly. Preserve your slide layout, fonts, and images with our
                        secure online converter.
                    </p>

                    <QuickActions
                        toolName="PowerPoint to PDF"
                        toolUrl="https://30tools.com/powerpoint-to-pdf"
                        showBookmark={true}
                        showShare={true}
                    />
                </div>

                {/* Tool Interface */}
                <div className="mb-12">
                    <PowerPointToPDFTool />
                </div>

                {/* Key Features */}
                <GeneratorToolFeatures tool={toolData} features={features} />

                {/* Usage Examples */}
                <GeneratorToolExamples
                    tool={toolData}
                    examples={examples}
                    title="Why Convert PowerPoint to PDF?"
                />

                {/* User Reviews */}
                <div className="mb-12">
                    <ReviewSnippets
                        toolId="powerpoint-to-pdf"
                        title="User Reviews"
                        showRatingSummary={true}
                        variant="grid"
                        limit={6}
                    />
                </div>

                {/* How to Use Section */}
                <div className="mb-12 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        How to Convert PowerPoint to PDF
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-card p-6 rounded-xl border text-center relative">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                1
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Upload PPT</h3>
                            <p className="text-muted-foreground text-sm">
                                Select your PPT or PPTX file.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-xl border text-center relative">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                2
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Convert</h3>
                            <p className="text-muted-foreground text-sm">
                                Click convert to transform your slides to PDF.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-xl border text-center relative">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                3
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Download</h3>
                            <p className="text-muted-foreground text-sm">
                                Save your new PDF document.
                            </p>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mb-12">
                    <FAQSection
                        faqs={faqs}
                        title="PowerPoint to PDF FAQ"
                        categoryTitle="Document Conversion"
                        variant="accordion"
                        showSchema={true}
                    />
                </div>

                {/* Related Tools */}
                <div className="mb-12">
                    <RelatedTools
                        currentTool="powerpoint-to-pdf"
                        category="pdf"
                        tools={relatedTools}
                        title="More PDF Tools"
                    />
                </div>

                {/* User Comments */}
                <UserComments
                    toolId="powerpoint-to-pdf"
                    toolName="PowerPoint to PDF"
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
                            name: "Free PowerPoint to PDF Converter",
                            description:
                                "Convert PowerPoint presentations to PDF online for free. Supports PPT and PPTX formats.",
                            url: "https://30tools.com/powerpoint-to-pdf",
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
                            screenshot: "https://30tools.com/screenshots/powerpoint-to-pdf.jpg",
                            aggregateRating: {
                                "@type": "AggregateRating",
                                ratingValue: "4.8",
                                reviewCount: "310",
                                bestRating: "5",
                                worstRating: "1",
                            },
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "HowTo",
                            name: "How to Convert PowerPoint to PDF",
                            step: [
                                {
                                    "@type": "HowToStep",
                                    name: "Upload PPT",
                                    text: "Select your PPT or PPTX file.",
                                    url: "https://30tools.com/powerpoint-to-pdf#step1",
                                },
                                {
                                    "@type": "HowToStep",
                                    name: "Convert",
                                    text: "Click convert to transform your slides to PDF.",
                                    url: "https://30tools.com/powerpoint-to-pdf#step2",
                                },
                                {
                                    "@type": "HowToStep",
                                    name: "Download",
                                    text: "Save your new PDF document.",
                                    url: "https://30tools.com/powerpoint-to-pdf#step3",
                                },
                            ],
                        },
                    ]),
                }}
            />
        </div>
    );
}
