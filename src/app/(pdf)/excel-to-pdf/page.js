import ExcelToPDFTool from "@/components/tools/pdf/ExcelToPDFTool";
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
    title: "Excel to PDF Converter Online (2026) - XLS/XLSX to PDF | 30Tools",
    description:
        "Best free online excel to pdf converter. transform XLS and XLSX spreadsheets into professional PDF documents while preserving formatting and tables instantly.",
    keywords:
        "excel to pdf 2026, xls to pdf, xlsx to pdf, convert excel to pdf, excel converter, free excel to pdf, online pdf converter, spreadsheet to pdf, best excel to pdf",
    alternates: {
        canonical: "https://30tools.com/excel-to-pdf",
    },
    openGraph: {
        title: "Excel to PDF Converter - Convert XLS/XLSX to PDF Free",
        description:
            "Convert Excel spreadsheets to PDF online for free. Supports XLS and XLSX formats. Preserves formatting, tables, and formulas. Secure and fast.",
        url: "https://30tools.com/excel-to-pdf",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/excel-to-pdf.jpg",
                width: 1200,
                height: 630,
                alt: "Free Excel to PDF Converter",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Excel to PDF Converter - Convert XLS/XLSX to PDF Free",
        description:
            "Convert Excel spreadsheets to PDF online for free. Supports XLS and XLSX formats. Preserves formatting, tables, and formulas. Secure and fast.",
        images: ["/og-images/excel-to-pdf.jpg"],
        creator: "@30tools",
    },
    category: "PDF Tools",
};

export default function ExcelToPDFPage() {
    // Tool-specific data
    const toolData = {
        id: "excel-to-pdf",
        name: "Excel to PDF",
        description: "Convert Excel spreadsheets to PDF format",
        category: "pdf",
        route: "/excel-to-pdf",
    };

    // Breadcrumb navigation
    const breadcrumbs = [
        { name: "PDF Tools", url: "/pdf-tools" },
        { name: "Excel to PDF", url: "/excel-to-pdf" },
    ];

    // Tool features
    const features = [
        "Convert XLS & XLSX",
        "Preserve Formatting",
        "Convert Multiple Sheets",
        "Fit to Page Options",
        "Client-Side Processing",
        "No File Size Limit",
        "Secure & Private",
        "100% Free",
    ];

    // Usage examples
    const examples = [
        {
            title: "Financial Reports",
            description: "Secure sharing",
            input: "Q4_Report.xlsx",
            output: "Q4_Report.pdf",
        },
        {
            title: "Invoices",
            description: "Professional format",
            input: "Invoice_101.xls",
            output: "Invoice_101.pdf",
        },
        {
            title: "Data Sheets",
            description: "Print-ready layout",
            input: "Data_Analysis.xlsx",
            output: "Analysis.pdf",
        },
    ];

    // FAQ data
    const faqs = getPdfToolFAQs("excel-to-pdf");

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
            id: "powerpoint-to-pdf",
            name: "PowerPoint to PDF",
            description: "Convert PPT to PDF",
            route: "/powerpoint-to-pdf",
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
                        Free Excel to PDF Converter
                    </h1>
                    <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
                        Convert your Excel spreadsheets (XLS, XLSX) to PDF format instantly.
                        Preserve your tables, formulas, and formatting with our secure
                        online converter.
                    </p>

                    <QuickActions
                        toolName="Excel to PDF"
                        toolUrl="https://30tools.com/excel-to-pdf"
                        showBookmark={true}
                        showShare={true}
                    />
                </div>

                {/* Tool Interface */}
                <div className="mb-12">
                    <ExcelToPDFTool />
                </div>

                {/* Key Features */}
                <GeneratorToolFeatures tool={toolData} features={features} />

                {/* Usage Examples */}
                <GeneratorToolExamples
                    tool={toolData}
                    examples={examples}
                    title="Why Convert Excel to PDF?"
                />

                {/* User Reviews */}
                <div className="mb-12">
                    <ReviewSnippets
                        toolId="excel-to-pdf"
                        title="User Reviews"
                        showRatingSummary={true}
                        variant="grid"
                        limit={6}
                    />
                </div>

                {/* How to Use Section */}
                <div className="mb-12 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        How to Convert Excel to PDF
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-card p-6 rounded-xl border text-center relative">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                1
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Upload Excel</h3>
                            <p className="text-muted-foreground text-sm">
                                Select your XLS or XLSX file.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-xl border text-center relative">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                2
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Convert</h3>
                            <p className="text-muted-foreground text-sm">
                                Click convert to transform your file to PDF.
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
                        title="Excel to PDF FAQ"
                        categoryTitle="Document Conversion"
                        variant="accordion"
                        showSchema={true}
                    />
                </div>

                {/* Related Tools */}
                <div className="mb-12">
                    <RelatedTools
                        currentTool="excel-to-pdf"
                        category="pdf"
                        tools={relatedTools}
                        title="More PDF Tools"
                    />
                </div>

                {/* User Comments */}
                <UserComments
                    toolId="excel-to-pdf"
                    toolName="Excel to PDF"
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
                            name: "Free Excel to PDF Converter",
                            description:
                                "Convert Excel spreadsheets to PDF online for free. Supports XLS and XLSX formats.",
                            url: "https://30tools.com/excel-to-pdf",
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
                            screenshot: "https://30tools.com/screenshots/excel-to-pdf.jpg",
                            aggregateRating: {
                                "@type": "AggregateRating",
                                ratingValue: "4.7",
                                reviewCount: "350",
                                bestRating: "5",
                                worstRating: "1",
                            },
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "HowTo",
                            name: "How to Convert Excel to PDF",
                            step: [
                                {
                                    "@type": "HowToStep",
                                    name: "Upload Excel",
                                    text: "Select your XLS or XLSX file.",
                                    url: "https://30tools.com/excel-to-pdf#step1",
                                },
                                {
                                    "@type": "HowToStep",
                                    name: "Convert",
                                    text: "Click convert to transform your file to PDF.",
                                    url: "https://30tools.com/excel-to-pdf#step2",
                                },
                                {
                                    "@type": "HowToStep",
                                    name: "Download",
                                    text: "Save your new PDF document.",
                                    url: "https://30tools.com/excel-to-pdf#step3",
                                },
                            ],
                        },
                    ]),
                }}
            />
        </div>
    );
}
