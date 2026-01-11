import FaviconGeneratorTool from "@/components/tools/image/FaviconGeneratorTool";
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
import { getImageToolFAQs } from "@/constants/seo/image-faqs";

export const metadata = {
    title: "Favicon Generator - Free | 30tools",
    description:
        "Create custom favicons for your website in seconds. Convert text, emojis, or images to high-quality favicons. Download in standard sizes.",
    keywords:
        "favicon generator, create favicon, favicon maker, website icon creator, emoji to favicon, text to favicon, image to favicon, free favicon tool, favicon.ico generator, app icon generator",
    alternates: {
        canonical: "https://30tools.com/favicon-generator",
    },
    openGraph: {
        title: "Free Favicon Generator - Create Website Icons Online",
        description:
            "Create custom favicons for your website in seconds. Convert text, emojis, or images to high-quality favicons.",
        url: "https://30tools.com/favicon-generator",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/favicon-generator.jpg",
                width: 1200,
                height: 630,
                alt: "Favicon Generator - 30tools",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Free Favicon Generator - Create Website Icons Online",
        description:
            "Create custom favicons for your website in seconds. Convert text, emojis, or images to high-quality favicons.",
        images: ["/og-images/favicon-generator.jpg"],
        creator: "@30tools",
    },
    category: "Image Tools",
};

export default function FaviconGeneratorPage() {
    // Tool-specific data
    const toolData = {
        id: "favicon-generator",
        name: "Favicon Generator",
        description: "Create website favicons instantly",
        category: "image",
        route: "/favicon-generator",
    };

    // Breadcrumb navigation
    const breadcrumbs = [
        { name: "Image Tools", url: "/image-tools" },
        { name: "Favicon Generator", url: "/favicon-generator" },
    ];

    // Tool features
    const features = [
        "Text to Favicon conversion",
        "Emoji to Favicon conversion",
        "Image to Favicon conversion",
        "Real-time browser preview",
        "Custom colors & fonts",
        "High-resolution download",
        "Standard 32x32 support",
        "100% Free",
    ];

    // Usage examples
    const examples = [
        {
            title: "Brand Initials",
            description: "Simple text icon",
            input: "Text 'AB' + Blue Background",
            output: "Professional Letter Icon",
        },
        {
            title: "Emoji Icon",
            description: "Fun and expressive",
            input: "Rocket Emoji 🚀",
            output: "Emoji Favicon",
        },
        {
            title: "Logo Conversion",
            description: "From existing logo",
            input: "Upload Logo Image",
            output: "Optimized Favicon",
        },
    ];

    // FAQ data
    const faqs = getImageToolFAQs("favicon-generator");

    // Related tools
    const relatedTools = [
        {
            id: "logo-generator",
            name: "Logo Generator",
            description: "Create a full logo",
            route: "/logo-generator",
            category: "image",
        },
        {
            id: "image-resizer",
            name: "Image Resizer",
            description: "Resize for social media",
            route: "/image-resizer",
            category: "image",
        },
        {
            id: "image-converter",
            name: "Image Converter",
            description: "Convert image formats",
            route: "/image-converter",
            category: "image",
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
                        Free Online Favicon Generator
                    </h1>
                    <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
                        Create the perfect favicon for your website. Convert text, emojis, or
                        upload your own image to generate a professional browser tab icon in
                        seconds.
                    </p>

                    <QuickActions
                        toolName="Favicon Generator"
                        toolUrl="https://30tools.com/favicon-generator"
                        showBookmark={true}
                        showShare={true}
                    />
                </div>

                {/* Tool Interface */}
                <div className="mb-12">
                    <FaviconGeneratorTool />
                </div>

                {/* Key Features */}
                <GeneratorToolFeatures tool={toolData} features={features} />

                {/* Usage Examples */}
                <GeneratorToolExamples
                    tool={toolData}
                    examples={examples}
                    title="Favicon Ideas"
                />

                {/* User Reviews */}
                <div className="mb-12">
                    <ReviewSnippets
                        toolId="favicon-generator"
                        title="User Reviews"
                        showRatingSummary={true}
                        variant="grid"
                        limit={6}
                    />
                </div>

                {/* How to Use Section */}
                <div className="mb-12 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        How to Create a Favicon
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-card p-6 rounded-xl border text-center relative">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                1
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Choose Mode</h3>
                            <p className="text-muted-foreground text-sm">
                                Select Text, Emoji, or Image mode. Enter your content or upload a
                                file.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-xl border text-center relative">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                2
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Customize</h3>
                            <p className="text-muted-foreground text-sm">
                                Adjust colors, fonts, size, and shape (square or rounded).
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-xl border text-center relative">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                3
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Download</h3>
                            <p className="text-muted-foreground text-sm">
                                Download your favicon in standard 32x32 size or high-resolution
                                512x512.
                            </p>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mb-12">
                    <FAQSection
                        faqs={faqs}
                        title="Favicon Generator FAQ"
                        categoryTitle="Favicons"
                        variant="accordion"
                        showSchema={true}
                    />
                </div>

                {/* Related Tools */}
                <div className="mb-12">
                    <RelatedTools
                        currentTool="favicon-generator"
                        category="image"
                        tools={relatedTools}
                        title="More Web Tools"
                    />
                </div>

                {/* User Comments */}
                <UserComments
                    toolId="favicon-generator"
                    toolName="Favicon Generator"
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
                            name: "Free Favicon Generator",
                            description:
                                "Create custom favicons for your website in seconds. Convert text, emojis, or images to high-quality favicons.",
                            url: "https://30tools.com/favicon-generator",
                            applicationCategory: "DesignApplication",
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
                            screenshot:
                                "https://30tools.com/screenshots/favicon-generator.jpg",
                            aggregateRating: {
                                "@type": "AggregateRating",
                                ratingValue: "4.9",
                                reviewCount: "876",
                                bestRating: "5",
                                worstRating: "1",
                            },
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "HowTo",
                            name: "How to Create a Website Favicon",
                            step: [
                                {
                                    "@type": "HowToStep",
                                    name: "Choose Mode",
                                    text: "Select Text, Emoji, or Image mode. Enter your content or upload a file.",
                                    url: "https://30tools.com/favicon-generator#step1",
                                },
                                {
                                    "@type": "HowToStep",
                                    name: "Customize",
                                    text: "Adjust colors, fonts, size, and shape (square or rounded).",
                                    url: "https://30tools.com/favicon-generator#step2",
                                },
                                {
                                    "@type": "HowToStep",
                                    name: "Download",
                                    text: "Download your favicon in standard 32x32 size or high-resolution 512x512.",
                                    url: "https://30tools.com/favicon-generator#step3",
                                },
                            ],
                        },
                    ]),
                }}
            />
        </div>
    );
}
