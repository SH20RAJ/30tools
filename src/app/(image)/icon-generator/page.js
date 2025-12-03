import IconGeneratorTool from "@/components/tools/image/IconGeneratorTool";
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
    title: "Free App Icon Generator - iOS & Android Icons | 30tools",
    description:
        "Generate professional app icons for iOS and Android. Create 1024x1024 icons from text, emojis, or images. Preview on different devices and download for free.",
    keywords:
        "app icon generator, ios icon maker, android icon creator, free app icon tool, emoji app icon, text to app icon, mobile app icon design, 1024x1024 icon",
    alternates: {
        canonical: "https://30tools.com/icon-generator",
    },
    openGraph: {
        title: "Free App Icon Generator - iOS & Android Icons",
        description:
            "Generate professional app icons for iOS and Android. Create 1024x1024 icons from text, emojis, or images.",
        url: "https://30tools.com/icon-generator",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/icon-generator.jpg",
                width: 1200,
                height: 630,
                alt: "Icon Generator - 30tools",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Free App Icon Generator - iOS & Android Icons",
        description:
            "Generate professional app icons for iOS and Android. Create 1024x1024 icons from text, emojis, or images.",
        images: ["/og-images/icon-generator.jpg"],
        creator: "@30tools",
    },
    category: "Image Tools",
};

export default function IconGeneratorPage() {
    // Tool-specific data
    const toolData = {
        id: "icon-generator",
        name: "Icon Generator",
        description: "Create app icons for iOS and Android",
        category: "image",
        route: "/icon-generator",
    };

    // Breadcrumb navigation
    const breadcrumbs = [
        { name: "Image Tools", url: "/image-tools" },
        { name: "Icon Generator", url: "/icon-generator" },
    ];

    // Tool features
    const features = [
        "Generate 1024x1024 Master Icon",
        "iOS & Android Previews",
        "Gradient Backgrounds",
        "Emoji to App Icon",
        "Text to App Icon",
        "Image Upload Support",
        "Instant Download",
        "No Watermark",
    ];

    // Usage examples
    const examples = [
        {
            title: "Minimalist App",
            description: "Simple text logo",
            input: "Letter 'M' + Ocean Gradient",
            output: "Modern App Icon",
        },
        {
            title: "Game Icon",
            description: "Fun and colorful",
            input: "Joystick Emoji 🕹️ + Purple BG",
            output: "Gaming App Icon",
        },
        {
            title: "Business App",
            description: "Professional look",
            input: "Upload Logo + White BG",
            output: "Corporate App Icon",
        },
    ];

    // FAQ data
    const faqs = getImageToolFAQs("icon-generator");

    // Related tools
    const relatedTools = [
        {
            id: "favicon-generator",
            name: "Favicon Generator",
            description: "Create website icons",
            route: "/favicon-generator",
            category: "image",
        },
        {
            id: "logo-generator",
            name: "Logo Generator",
            description: "Design brand logos",
            route: "/logo-generator",
            category: "image",
        },
        {
            id: "social-media-resizer",
            name: "Social Media Resizer",
            description: "Resize for marketing",
            route: "/social-media-resizer",
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
                        Free App Icon Generator
                    </h1>
                    <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
                        Design stunning app icons for iOS and Android in seconds. Use emojis,
                        text, or upload your own image to create the perfect 1024x1024
                        master icon for the App Store and Google Play.
                    </p>

                    <QuickActions
                        toolName="Icon Generator"
                        toolUrl="https://30tools.com/icon-generator"
                        showBookmark={true}
                        showShare={true}
                    />
                </div>

                {/* Tool Interface */}
                <div className="mb-12">
                    <IconGeneratorTool />
                </div>

                {/* Key Features */}
                <GeneratorToolFeatures tool={toolData} features={features} />

                {/* Usage Examples */}
                <GeneratorToolExamples
                    tool={toolData}
                    examples={examples}
                    title="Icon Inspiration"
                />

                {/* User Reviews */}
                <div className="mb-12">
                    <ReviewSnippets
                        toolId="icon-generator"
                        title="Developer Reviews"
                        showRatingSummary={true}
                        variant="grid"
                        limit={6}
                    />
                </div>

                {/* How to Use Section */}
                <div className="mb-12 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        How to Make an App Icon
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-card p-6 rounded-xl border text-center relative">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                1
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Design</h3>
                            <p className="text-muted-foreground text-sm">
                                Choose an emoji, enter text, or upload an image as your icon base.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-xl border text-center relative">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                2
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Style</h3>
                            <p className="text-muted-foreground text-sm">
                                Add a gradient background, adjust size, and preview on iOS/Android shapes.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-xl border text-center relative">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                3
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Export</h3>
                            <p className="text-muted-foreground text-sm">
                                Download the high-resolution 1024x1024 PNG, ready for submission.
                            </p>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mb-12">
                    <FAQSection
                        faqs={faqs}
                        title="Icon Generator FAQ"
                        categoryTitle="App Icons"
                        variant="accordion"
                        showSchema={true}
                    />
                </div>

                {/* Related Tools */}
                <div className="mb-12">
                    <RelatedTools
                        currentTool="icon-generator"
                        category="image"
                        tools={relatedTools}
                        title="More Developer Tools"
                    />
                </div>

                {/* User Comments */}
                <UserComments
                    toolId="icon-generator"
                    toolName="Icon Generator"
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
                            name: "Free App Icon Generator",
                            description:
                                "Generate professional app icons for iOS and Android. Create 1024x1024 icons from text, emojis, or images.",
                            url: "https://30tools.com/icon-generator",
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
                            screenshot: "https://30tools.com/screenshots/icon-generator.jpg",
                            aggregateRating: {
                                "@type": "AggregateRating",
                                ratingValue: "4.8",
                                reviewCount: "650",
                                bestRating: "5",
                                worstRating: "1",
                            },
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "HowTo",
                            name: "How to Create an App Icon",
                            step: [
                                {
                                    "@type": "HowToStep",
                                    name: "Design",
                                    text: "Choose an emoji, enter text, or upload an image as your icon base.",
                                    url: "https://30tools.com/icon-generator#step1",
                                },
                                {
                                    "@type": "HowToStep",
                                    name: "Style",
                                    text: "Add a gradient background, adjust size, and preview on iOS/Android shapes.",
                                    url: "https://30tools.com/icon-generator#step2",
                                },
                                {
                                    "@type": "HowToStep",
                                    name: "Export",
                                    text: "Download the high-resolution 1024x1024 PNG, ready for submission.",
                                    url: "https://30tools.com/icon-generator#step3",
                                },
                            ],
                        },
                    ]),
                }}
            />
        </div>
    );
}
