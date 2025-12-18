import PhotoCollageMakerTool from "@/components/tools/image/PhotoCollageMakerTool";
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
    title: "Free Photo Collage Maker - Create Collages Online | 30tools",
    description:
        "Create beautiful photo collages online for free. Combine multiple photos into grids, rows, or columns. Customize spacing, borders, and background colors.",
    keywords:
        "photo collage maker, free collage maker, online photo collage, picture collage, grid maker, combine photos, photo grid, instagram layout, collage creator",
    alternates: {
        canonical: "https://30tools.com/photo-collage-maker",
    },
    openGraph: {
        title: "Free Photo Collage Maker - Create Collages Online",
        description:
            "Create beautiful photo collages online for free. Combine multiple photos into grids, rows, or columns.",
        url: "https://30tools.com/photo-collage-maker",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/photo-collage-maker.jpg",
                width: 1200,
                height: 630,
                alt: "Photo Collage Maker - 30tools",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Free Photo Collage Maker - Create Collages Online",
        description:
            "Create beautiful photo collages online for free. Combine multiple photos into grids, rows, or columns.",
        images: ["/og-images/photo-collage-maker.jpg"],
        creator: "@30tools",
    },
    category: "Image Tools",
};

export default function PhotoCollageMakerPage() {
    // Tool-specific data
    const toolData = {
        id: "photo-collage-maker",
        name: "Photo Collage Maker",
        description: "Create photo collages online",
        category: "image",
        route: "/photo-collage-maker",
    };

    // Breadcrumb navigation
    const breadcrumbs = [
        { name: "Image Tools", url: "/image-tools" },
        { name: "Collage Maker", url: "/photo-collage-maker" },
    ];

    // Tool features
    const features = [
        "Combine unlimited photos",
        "Multiple layout options (Grid, Row, Column)",
        "Customizable spacing and padding",
        "Adjustable border radius",
        "Custom background colors",
        "High-resolution download",
        "No watermark",
        "100% Free",
    ];

    // Usage examples
    const examples = [
        {
            title: "Before & After",
            description: "Side-by-side comparison",
            input: "2 Photos + Row Layout",
            output: "Comparison Collage",
        },
        {
            title: "Instagram Grid",
            description: "Classic 3x3 layout",
            input: "9 Photos + Grid Layout",
            output: "Perfect Square Grid",
        },
        {
            title: "Photo Strip",
            description: "Vertical photo booth style",
            input: "4 Photos + Column Layout",
            output: "Vertical Photo Strip",
        },
    ];

    // FAQ data
    const faqs = getImageToolFAQs("photo-collage-maker");

    // Related tools
    const relatedTools = [
        {
            id: "image-cropper",
            name: "Image Cropper",
            description: "Crop individual photos",
            route: "/image-cropper",
            category: "image",
        },
        {
            id: "social-media-resizer",
            name: "Social Media Resizer",
            description: "Resize your collage",
            route: "/social-media-resizer",
            category: "image",
        },
        {
            id: "photo-enhancer",
            name: "Photo Enhancer",
            description: "Enhance photos before collage",
            route: "/photo-enhancer",
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
                        Free Online Photo Collage Maker
                    </h1>
                    <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
                        Combine your favorite photos into beautiful collages instantly.
                        Choose from various layouts, adjust spacing, and customize colors to
                        create the perfect memory board.
                    </p>

                    <QuickActions
                        toolName="Collage Maker"
                        toolUrl="https://30tools.com/photo-collage-maker"
                        showBookmark={true}
                        showShare={true}
                    />
                </div>

                {/* Tool Interface */}
                <div className="mb-12">
                    <PhotoCollageMakerTool />
                </div>

                {/* Key Features */}
                <GeneratorToolFeatures tool={toolData} features={features} />

                {/* Usage Examples */}
                <GeneratorToolExamples
                    tool={toolData}
                    examples={examples}
                    title="Collage Ideas"
                />

                {/* User Reviews */}
                <div className="mb-12">
                    <ReviewSnippets
                        toolId="photo-collage-maker"
                        title="User Reviews"
                        showRatingSummary={true}
                        variant="grid"
                        limit={6}
                    />
                </div>

                {/* How to Use Section */}
                <div className="mb-12 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        How to Make a Photo Collage
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-card p-6 rounded-xl border text-center relative">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                1
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Add Photos</h3>
                            <p className="text-muted-foreground text-sm">
                                Upload multiple photos from your device. You can add as many as
                                you like.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-xl border text-center relative">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                2
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Customize Layout</h3>
                            <p className="text-muted-foreground text-sm">
                                Choose a grid, row, or column layout. Adjust spacing, padding,
                                and roundness.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-xl border text-center relative">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                3
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Download</h3>
                            <p className="text-muted-foreground text-sm">
                                Save your high-resolution collage as a PNG file instantly.
                            </p>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mb-12">
                    <FAQSection
                        faqs={faqs}
                        title="Collage Maker FAQ"
                        categoryTitle="Photo Collages"
                        variant="accordion"
                        showSchema={true}
                    />
                </div>

                {/* Related Tools */}
                <div className="mb-12">
                    <RelatedTools
                        currentTool="photo-collage-maker"
                        category="image"
                        tools={relatedTools}
                        title="More Image Tools"
                    />
                </div>

                {/* User Comments */}
                <UserComments
                    toolId="photo-collage-maker"
                    toolName="Photo Collage Maker"
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
                            name: "Photo Collage Maker",
                            description:
                                "Create beautiful photo collages online for free. Combine multiple photos into grids, rows, or columns.",
                            url: "https://30tools.com/photo-collage-maker",
                            applicationCategory: "MultimediaApplication",
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
                                "https://30tools.com/screenshots/photo-collage-maker.jpg",
                            aggregateRating: {
                                "@type": "AggregateRating",
                                ratingValue: "4.7",
                                reviewCount: "945",
                                bestRating: "5",
                                worstRating: "1",
                            },
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "HowTo",
                            name: "How to Make a Photo Collage Online",
                            step: [
                                {
                                    "@type": "HowToStep",
                                    name: "Add Photos",
                                    text: "Upload multiple photos from your device. You can add as many as you like.",
                                    url: "https://30tools.com/photo-collage-maker#step1",
                                },
                                {
                                    "@type": "HowToStep",
                                    name: "Customize Layout",
                                    text: "Choose a grid, row, or column layout. Adjust spacing, padding, and roundness.",
                                    url: "https://30tools.com/photo-collage-maker#step2",
                                },
                                {
                                    "@type": "HowToStep",
                                    name: "Download",
                                    text: "Save your high-resolution collage as a PNG file instantly.",
                                    url: "https://30tools.com/photo-collage-maker#step3",
                                },
                            ],
                        },
                    ]),
                }}
            />
        </div>
    );
}
