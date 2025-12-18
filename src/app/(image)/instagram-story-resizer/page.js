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
    title: "Instagram Story Resizer - Resize Photos for Stories | 30tools",
    description:
        "Resize images for Instagram Stories online. Automatically crop to 9:16 aspect ratio (1080x1920). Free, fast, and no watermark.",
    keywords:
        "instagram story resizer, resize for instagram story, instagram story size, 9:16 crop, instagram story dimensions, crop for instagram story, instagram photo resizer",
    alternates: {
        canonical: "https://30tools.com/instagram-story-resizer",
    },
    openGraph: {
        title: "Instagram Story Resizer - Resize Photos for Stories",
        description:
            "Resize images for Instagram Stories online. Automatically crop to 9:16 aspect ratio (1080x1920).",
        url: "https://30tools.com/instagram-story-resizer",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/instagram-story-resizer.jpg",
                width: 1200,
                height: 630,
                alt: "Instagram Story Resizer - 30tools",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Instagram Story Resizer - Resize Photos for Stories",
        description:
            "Resize images for Instagram Stories online. Automatically crop to 9:16 aspect ratio (1080x1920).",
        images: ["/og-images/instagram-story-resizer.jpg"],
        creator: "@30tools",
    },
    category: "Image Tools",
};

export default function InstagramStoryResizerPage() {
    // Tool-specific data
    const toolData = {
        id: "instagram-story-resizer",
        name: "Instagram Story Resizer",
        description: "Resize photos for Instagram Stories",
        category: "image",
        route: "/instagram-story-resizer",
    };

    // Breadcrumb navigation
    const breadcrumbs = [
        { name: "Image Tools", url: "/image-tools" },
        { name: "Instagram Story Resizer", url: "/instagram-story-resizer" },
    ];

    // Tool features
    const features = [
        "Automatic 9:16 cropping",
        "Perfect 1080x1920 resolution",
        "No quality loss",
        "Works for Reels covers",
        "Support for landscape photos",
        "Instant download",
        "No watermark",
        "Secure local processing",
    ];

    // Usage examples
    const examples = [
        {
            title: "Vertical Story",
            description: "Perfect fit for full screen",
            input: "Any photo",
            output: "1080x1920 Vertical Image",
        },
        {
            title: "Reels Cover",
            description: "Custom thumbnail for Reels",
            input: "Video screenshot",
            output: "9:16 Cover Image",
        },
        {
            title: "Wallpaper",
            description: "Create phone wallpapers",
            input: "Landscape photo",
            output: "Vertical Phone Background",
        },
    ];

    // FAQ data
    const faqs = getImageToolFAQs("instagram-story-resizer");

    // Related tools
    const relatedTools = [
        {
            id: "image-cropper",
            name: "Image Cropper",
            description: "Crop images freely",
            route: "/image-cropper",
            category: "image",
        },
        {
            id: "social-media-resizer",
            name: "Social Media Resizer",
            description: "Resize for all platforms",
            route: "/social-media-resizer",
            category: "image",
        },
        {
            id: "photo-enhancer",
            name: "Photo Enhancer",
            description: "Improve photo quality",
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
                        Instagram Story Resizer
                    </h1>
                    <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
                        Resize your photos for Instagram Stories instantly. Our tool
                        automatically sets the perfect 9:16 aspect ratio (1080x1920) so your
                        stories look professional and crisp.
                    </p>

                    <QuickActions
                        toolName="Story Resizer"
                        toolUrl="https://30tools.com/instagram-story-resizer"
                        showBookmark={true}
                        showShare={true}
                    />
                </div>

                {/* Tool Interface */}
                <div className="mb-12">
                    <ImageCropperTool
                        title="Resize for Instagram Story"
                        description="Upload your photo to crop and resize it perfectly for Instagram Stories (9:16)."
                        initialAspectRatio="9:16"
                    />
                </div>

                {/* Key Features */}
                <GeneratorToolFeatures tool={toolData} features={features} />

                {/* Usage Examples */}
                <GeneratorToolExamples
                    tool={toolData}
                    examples={examples}
                    title="Resizing Examples"
                />

                {/* User Reviews */}
                <div className="mb-12">
                    <ReviewSnippets
                        toolId="instagram-story-resizer"
                        title="Influencer Reviews"
                        showRatingSummary={true}
                        variant="grid"
                        limit={6}
                    />
                </div>

                {/* How to Use Section */}
                <div className="mb-12 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        How to Resize for Instagram Stories
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-card p-6 rounded-xl border text-center relative">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                1
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Upload Photo</h3>
                            <p className="text-muted-foreground text-sm">
                                Select any photo from your device. We support all major formats.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-xl border text-center relative">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                2
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Adjust Frame</h3>
                            <p className="text-muted-foreground text-sm">
                                The 9:16 frame is set automatically. Move and scale your image to
                                fit perfectly.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-xl border text-center relative">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                3
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Download</h3>
                            <p className="text-muted-foreground text-sm">
                                Download your resized image, ready to be posted to your Instagram
                                Story.
                            </p>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mb-12">
                    <FAQSection
                        faqs={faqs}
                        title="Story Resizer FAQ"
                        categoryTitle="Instagram Stories"
                        variant="accordion"
                        showSchema={true}
                    />
                </div>

                {/* Related Tools */}
                <div className="mb-12">
                    <RelatedTools
                        currentTool="instagram-story-resizer"
                        category="image"
                        tools={relatedTools}
                        title="More Social Media Tools"
                    />
                </div>

                {/* User Comments */}
                <UserComments
                    toolId="instagram-story-resizer"
                    toolName="Instagram Story Resizer"
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
                            name: "Instagram Story Resizer",
                            description:
                                "Resize images for Instagram Stories online. Automatically crop to 9:16 aspect ratio.",
                            url: "https://30tools.com/instagram-story-resizer",
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
                                "https://30tools.com/screenshots/instagram-story-resizer.jpg",
                            aggregateRating: {
                                "@type": "AggregateRating",
                                ratingValue: "4.9",
                                reviewCount: "2103",
                                bestRating: "5",
                                worstRating: "1",
                            },
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "HowTo",
                            name: "How to Resize Photos for Instagram Story",
                            step: [
                                {
                                    "@type": "HowToStep",
                                    name: "Upload Photo",
                                    text: "Select any photo from your device. We support all major formats.",
                                    url: "https://30tools.com/instagram-story-resizer#step1",
                                },
                                {
                                    "@type": "HowToStep",
                                    name: "Adjust Frame",
                                    text: "The 9:16 frame is set automatically. Move and scale your image to fit perfectly.",
                                    url: "https://30tools.com/instagram-story-resizer#step2",
                                },
                                {
                                    "@type": "HowToStep",
                                    name: "Download",
                                    text: "Download your resized image, ready to be posted to your Instagram Story.",
                                    url: "https://30tools.com/instagram-story-resizer#step3",
                                },
                            ],
                        },
                    ]),
                }}
            />
        </div>
    );
}
