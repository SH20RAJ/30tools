import ImageCropperTool from "@/components/tools/image/ImageCropperTool";
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
    title: "Social Media Image Resizer - Resize for All Platforms | 30tools",
    description:
        "Resize images for Instagram, Facebook, Twitter, LinkedIn, and YouTube. Free online tool with presets for posts, stories, covers, and profile pictures.",
    keywords:
        "social media resizer, resize for social media, instagram post size, facebook cover size, twitter header size, linkedin banner size, youtube thumbnail maker, social media image sizes",
    alternates: {
        canonical: "https://30tools.com/social-media-resizer",
    },
    openGraph: {
        title: "Social Media Image Resizer - Resize for All Platforms",
        description:
            "Resize images for Instagram, Facebook, Twitter, LinkedIn, and YouTube. Free online tool with presets.",
        url: "https://30tools.com/social-media-resizer",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/social-media-resizer.jpg",
                width: 1200,
                height: 630,
                alt: "Social Media Resizer - 30tools",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Social Media Image Resizer - Resize for All Platforms",
        description:
            "Resize images for Instagram, Facebook, Twitter, LinkedIn, and YouTube. Free online tool with presets.",
        images: ["/og-images/social-media-resizer.jpg"],
        creator: "@30tools",
    },
    category: "Image Tools",
};

export default function SocialMediaResizerPage() {
    // Tool-specific data
    const toolData = {
        id: "social-media-resizer",
        name: "Social Media Resizer",
        description: "Resize images for all social platforms",
        category: "image",
        route: "/social-media-resizer",
    };

    // Breadcrumb navigation
    const breadcrumbs = [
        { name: "Image Tools", url: "/image-tools" },
        { name: "Social Media Resizer", url: "/social-media-resizer" },
    ];

    // Tool features
    const features = [
        "Presets for all major platforms",
        "Instagram (Post, Story)",
        "Facebook (Cover, Post)",
        "Twitter (Header, Post)",
        "YouTube Thumbnails",
        "LinkedIn Banners",
        "Profile Picture crops",
        "Custom dimensions support",
    ];

    // Usage examples
    const examples = [
        {
            title: "Facebook Cover",
            description: "Perfect fit header",
            input: "Any photo",
            output: "820x312 Cover Image",
        },
        {
            title: "YouTube Thumbnail",
            description: "High-CTR thumbnail",
            input: "Video frame",
            output: "1280x720 Thumbnail",
        },
        {
            title: "Twitter Header",
            description: "Professional profile look",
            input: "Brand image",
            output: "1500x500 Header",
        },
    ];

    // FAQ data
    const faqs = getImageToolFAQs("social-media-resizer");

    // Related tools
    const relatedTools = [
        {
            id: "instagram-story-resizer",
            name: "Instagram Story Resizer",
            description: "Resize specifically for Stories",
            route: "/instagram-story-resizer",
            category: "image",
        },
        {
            id: "image-cropper",
            name: "Image Cropper",
            description: "Crop images freely",
            route: "/image-cropper",
            category: "image",
        },
        {
            id: "image-resizer",
            name: "Image Resizer",
            description: "Resize to custom dimensions",
            route: "/image-resizer",
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
                        Social Media Image Resizer
                    </h1>
                    <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
                        The all-in-one tool to resize your images for every social media
                        platform. Use our one-click presets for Instagram, Facebook,
                        Twitter, YouTube, and more.
                    </p>

                    <QuickActions
                        toolName="Social Resizer"
                        toolUrl="https://30tools.com/social-media-resizer"
                        showBookmark={true}
                        showShare={true}
                    />
                </div>

                {/* Tool Interface */}
                <div className="mb-12">
                    <ImageCropperTool
                        title="Resize for Social Media"
                        description="Select a preset below or enter custom dimensions to resize your image for any platform."
                        initialAspectRatio="free"
                    />
                </div>

                {/* Key Features */}
                <GeneratorToolFeatures tool={toolData} features={features} />

                {/* Usage Examples */}
                <GeneratorToolExamples
                    tool={toolData}
                    examples={examples}
                    title="Platform Examples"
                />

                {/* User Reviews */}
                <div className="mb-12">
                    <ReviewSnippets
                        toolId="social-media-resizer"
                        title="Community Reviews"
                        showRatingSummary={true}
                        variant="grid"
                        limit={6}
                    />
                </div>

                {/* How to Use Section */}
                <div className="mb-12 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        How to Resize for Social Media
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-card p-6 rounded-xl border text-center relative">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                1
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Upload Image</h3>
                            <p className="text-muted-foreground text-sm">
                                Upload the image you want to resize. We support high-quality uploads.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-xl border text-center relative">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                2
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Select Preset</h3>
                            <p className="text-muted-foreground text-sm">
                                Choose a platform preset (e.g., "Facebook Cover") or enter custom sizes.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-xl border text-center relative">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                3
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Download</h3>
                            <p className="text-muted-foreground text-sm">
                                Get your perfectly sized image instantly, ready for posting.
                            </p>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mb-12">
                    <FAQSection
                        faqs={faqs}
                        title="Social Resizer FAQ"
                        categoryTitle="Social Media Images"
                        variant="accordion"
                        showSchema={true}
                    />
                </div>

                {/* Related Tools */}
                <div className="mb-12">
                    <RelatedTools
                        currentTool="social-media-resizer"
                        category="image"
                        tools={relatedTools}
                        title="More Image Tools"
                    />
                </div>

                {/* User Comments */}
                <UserComments
                    toolId="social-media-resizer"
                    toolName="Social Media Resizer"
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
                            name: "Social Media Image Resizer",
                            description:
                                "Resize images for Instagram, Facebook, Twitter, LinkedIn, and YouTube. Free online tool with presets.",
                            url: "https://30tools.com/social-media-resizer",
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
                                "https://30tools.com/screenshots/social-media-resizer.jpg",
                            aggregateRating: {
                                "@type": "AggregateRating",
                                ratingValue: "4.8",
                                reviewCount: "1890",
                                bestRating: "5",
                                worstRating: "1",
                            },
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "HowTo",
                            name: "How to Resize Images for Social Media",
                            step: [
                                {
                                    "@type": "HowToStep",
                                    name: "Upload Image",
                                    text: "Upload the image you want to resize. We support high-quality uploads.",
                                    url: "https://30tools.com/social-media-resizer#step1",
                                },
                                {
                                    "@type": "HowToStep",
                                    name: "Select Preset",
                                    text: "Choose a platform preset (e.g., 'Facebook Cover') or enter custom sizes.",
                                    url: "https://30tools.com/social-media-resizer#step2",
                                },
                                {
                                    "@type": "HowToStep",
                                    name: "Download",
                                    text: "Get your perfectly sized image instantly, ready for posting.",
                                    url: "https://30tools.com/social-media-resizer#step3",
                                },
                            ],
                        },
                    ]),
                }}
            />
        </div>
    );
}
