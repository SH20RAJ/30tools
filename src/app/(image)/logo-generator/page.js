import LogoGeneratorTool from "@/components/tools/image/LogoGeneratorTool";
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
    title: "Logo Generator - AI Powered | 30tools",
    description:
        "Create professional logos for your business or brand in seconds. Free online logo maker with customizable icons, fonts, and colors. Download high-quality PNGs.",
    keywords:
        "logo generator, free logo maker, online logo creator, business logo design, brand logo maker, company logo creator, custom logo design, free branding tool, twitch logo maker, youtube channel logo creator, gaming logo maker, esign logo free",
    alternates: {
        canonical: "https://30tools.com/logo-generator",
    },
    openGraph: {
        title: "Free Logo Generator - Create Professional Logos Online",
        description:
            "Create professional logos for your business or brand in seconds. Free online logo maker with customizable icons, fonts, and colors.",
        url: "https://30tools.com/logo-generator",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/logo-generator.jpg",
                width: 1200,
                height: 630,
                alt: "Logo Generator - 30tools",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Free Logo Generator - Create Professional Logos Online",
        description:
            "Create professional logos for your business or brand in seconds. Free online logo maker with customizable icons, fonts, and colors.",
        images: ["/og-images/logo-generator.jpg"],
        creator: "@30tools",
    },
    category: "Image Tools",
};

export default function LogoGeneratorPage() {
    // Tool-specific data
    const toolData = {
        id: "logo-generator",
        name: "Logo Generator",
        description: "Create professional logos instantly",
        category: "image",
        route: "/logo-generator",
    };

    // Breadcrumb navigation
    const breadcrumbs = [
        { name: "Image Tools", url: "/image-tools" },
        { name: "Logo Generator", url: "/logo-generator" },
    ];

    // Tool features
    const features = [
        "Instant logo generation",
        "Professional icon library",
        "Curated font selection",
        "Customizable colors",
        "Adjustable layout & spacing",
        "High-resolution PNG download",
        "Transparent background",
        "100% Free for commercial use",
    ];

    // Usage examples
    const examples = [
        {
            title: "Tech Startup",
            description: "Modern and clean",
            input: "Rocket Icon + Inter Font",
            output: "Minimalist Tech Logo",
        },
        {
            title: "Coffee Shop",
            description: "Warm and inviting",
            input: "Coffee Icon + Serif Font",
            output: "Classic Cafe Logo",
        },
        {
            title: "Creative Studio",
            description: "Bold and artistic",
            input: "Star Icon + Cursive Font",
            output: "Artistic Brand Logo",
        },
    ];

    // FAQ data
    const faqs = getImageToolFAQs("logo-generator");

    // Related tools
    const relatedTools = [
        {
            id: "favicon-generator",
            name: "Favicon Generator",
            description: "Create website favicons",
            route: "/favicon-generator",
            category: "image",
        },
        {
            id: "icon-generator",
            name: "Icon Generator",
            description: "Generate app icons",
            route: "/icon-generator",
            category: "image",
        },
        {
            id: "social-media-resizer",
            name: "Social Media Resizer",
            description: "Resize logo for social",
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
                        Free Online Logo Generator
                    </h1>
                    <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
                        Design a professional logo for your brand in minutes. Choose from our
                        library of icons and fonts, customize colors, and download your
                        high-resolution logo for free.
                    </p>

                    <QuickActions
                        toolName="Logo Generator"
                        toolUrl="https://30tools.com/logo-generator"
                        showBookmark={true}
                        showShare={true}
                    />
                </div>

                {/* Tool Interface */}
                <div className="mb-12">
                    <LogoGeneratorTool />
                </div>

                {/* Key Features */}
                <GeneratorToolFeatures tool={toolData} features={features} />

                {/* Usage Examples */}
                <GeneratorToolExamples
                    tool={toolData}
                    examples={examples}
                    title="Logo Inspiration"
                />

                {/* User Reviews */}
                <div className="mb-12">
                    <ReviewSnippets
                        toolId="logo-generator"
                        title="User Reviews"
                        showRatingSummary={true}
                        variant="grid"
                        limit={6}
                    />
                </div>

                {/* How to Use Section */}
                <div className="mb-12 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        How to Create a Logo
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-card p-6 rounded-xl border text-center relative">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                1
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Enter Name</h3>
                            <p className="text-muted-foreground text-sm">
                                Type your brand name and optional tagline. Choose a font style.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-xl border text-center relative">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                2
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Customize</h3>
                            <p className="text-muted-foreground text-sm">
                                Select an icon, adjust colors, and tweak the layout and spacing.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-xl border text-center relative">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                3
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Download</h3>
                            <p className="text-muted-foreground text-sm">
                                Get your logo as a high-quality transparent PNG instantly.
                            </p>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mb-12">
                    <FAQSection
                        faqs={faqs}
                        title="Logo Generator FAQ"
                        categoryTitle="Logo Design"
                        variant="accordion"
                        showSchema={true}
                    />
                </div>

                {/* Related Tools */}
                <div className="mb-12">
                    <RelatedTools
                        currentTool="logo-generator"
                        category="image"
                        tools={relatedTools}
                        title="More Branding Tools"
                    />
                </div>

                {/* User Comments */}
                <UserComments
                    toolId="logo-generator"
                    toolName="Logo Generator"
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
                            name: "Free Logo Generator",
                            description:
                                "Create professional logos for your business or brand in seconds. Free online logo maker with customizable icons, fonts, and colors.",
                            url: "https://30tools.com/logo-generator",
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
                            screenshot: "https://30tools.com/screenshots/logo-generator.jpg",
                            aggregateRating: {
                                "@type": "AggregateRating",
                                ratingValue: "4.8",
                                reviewCount: "1250",
                                bestRating: "5",
                                worstRating: "1",
                            },
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "HowTo",
                            name: "How to Create a Logo Online",
                            step: [
                                {
                                    "@type": "HowToStep",
                                    name: "Enter Name",
                                    text: "Type your brand name and optional tagline. Choose a font style.",
                                    url: "https://30tools.com/logo-generator#step1",
                                },
                                {
                                    "@type": "HowToStep",
                                    name: "Customize",
                                    text: "Select an icon, adjust colors, and tweak the layout and spacing.",
                                    url: "https://30tools.com/logo-generator#step2",
                                },
                                {
                                    "@type": "HowToStep",
                                    name: "Download",
                                    text: "Get your logo as a high-quality transparent PNG instantly.",
                                    url: "https://30tools.com/logo-generator#step3",
                                },
                            ],
                        },
                    ]),
                }}
            />
        </div>
    );
}
