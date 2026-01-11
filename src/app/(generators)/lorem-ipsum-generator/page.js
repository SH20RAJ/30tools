import LoremIpsumGeneratorTool from "@/components/tools/generators/LoremIpsumGeneratorTool";
import {
    FAQSection,
    RelatedTools,
    UserComments,
    QuickActions,
} from "@/components/seo";
import {
    GeneratorToolFeatures,
    GeneratorToolExamples,
} from "@/components/seo/GeneratorToolsHub";

export const metadata = {
    title: "Lorem Ipsum Generator (2026) - Free Placeholder Text | 30Tools",
    description:
        "Generate standard Lorem Ipsum placeholder text for web design, graphic design, and publishing. Customize paragraphs, words, or lists instantly.",
    keywords: [
        "lorem ipsum generator",
        "dummy text generator",
        "placeholder text",
        "filler text generator",
        "lipsum generator",
        "latin text generator",
        "random text generator",
        "design placeholder text",
        "web design test text"
    ].join(", "),
    openGraph: {
        title: "Lorem Ipsum Generator - Free Placeholder Text",
        description:
            "Generate standard Lorem Ipsum placeholder text for web design and publishing.",
        url: "https://30tools.com/lorem-ipsum-generator",
        siteName: "30tools",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Lorem Ipsum Generator - Free Placeholder Text",
        description:
            "Generate standard Lorem Ipsum placeholder text for web design.",
    },
    canonical: "https://30tools.com/lorem-ipsum-generator",
};

export default function LoremIpsumGeneratorPage() {
    const toolData = {
        id: "lorem-ipsum-generator",
        name: "Lorem Ipsum Generator",
        description: "Generate placeholder text",
        category: "generators",
        route: "/lorem-ipsum-generator",
    };

    const features = [
        "Generate Paragraphs, Sentences, or Words",
        "Start with standard 'Lorem Ipsum' phrase",
        "Copy to Clipboard Instantly",
        "Adjustable Length",
        "Clean, Unformatted Text",
        "Works Offline",
        "No Ads in Output",
        "Mobile Friendly"
    ];

    const examples = [
        {
            title: "Web Layouts",
            description: "Fill empty content blocks",
            input: "3 Paragraphs",
            output: "Lorem ipsum dolor sit amet...",
        },
        {
            title: "Typography Testing",
            description: "Test font readability",
            input: "50 Words",
            output: "Random latin words to test line height and kerning...",
        },
        {
            title: "Mockups",
            description: "Consistent text volume",
            input: "5 Sentences",
            output: "Realistic paragraph length for UI mockups...",
        }
    ];

    const faqs = [
        {
            question: "What is Lorem Ipsum?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s.",
        },
        {
            question: "Why do we use it?",
            answer: "It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. Lorem Ipsum provides a more-or-less normal distribution of letters.",
        },
        {
            question: "Where does it come from?",
            answer: "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor, discovered the source.",
        }
    ];

    const relatedTools = [
        {
            id: "text-to-speech",
            name: "Text to Speech",
            description: "Read text aloud",
            route: "/text-to-speech",
            category: "audio",
        },
        {
            id: "word-to-pdf",
            name: "Word to PDF",
            description: "Convert docs to PDF",
            route: "/word-to-pdf",
            category: "pdf",
        },
        {
            id: "json-formatter",
            name: "JSON Formatter",
            description: "Format code data",
            route: "/json-formatter",
            category: "developer",
        },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Lorem Ipsum Generator",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Any",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": "Free tool to generate Lorem Ipsum placeholder text."
    };

    return (
        <div className="min-h-screen bg-background">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <div className="container mx-auto px-4 py-12 md:py-20 max-w-5xl">
                <div className="text-center space-y-4 mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        Free <span className="text-primary">Lorem Ipsum Generator</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Create standard placeholder text for your design projects. The ultimate tool for web designers, developers, and graphic artists.
                    </p>
                    <QuickActions
                        toolName="Lorem Ipsum Generator"
                        toolUrl="https://30tools.com/lorem-ipsum-generator"
                        showBookmark={true}
                        showShare={true}
                    />
                </div>

                <div className="mb-20">
                    <LoremIpsumGeneratorTool />
                </div>

                {/* Content Sections */}
                <GeneratorToolFeatures tool={toolData} features={features} />
                <GeneratorToolExamples tool={toolData} examples={examples} title="Use Cases" />

                <div className="mb-20">
                    <FAQSection
                        faqs={faqs}
                        title="Lorem Ipsum FAQ"
                        categoryTitle="Typography"
                        variant="accordion"
                        showSchema={true}
                    />
                </div>

                <div className="mb-20">
                    <RelatedTools
                        currentTool="lorem-ipsum-generator"
                        category="generators"
                        tools={relatedTools}
                        title="Design Tools"
                    />
                </div>

                <UserComments
                    toolId="lorem-ipsum-generator"
                    toolName="Lorem Ipsum Generator"
                    showStats={true}
                    allowComments={true}
                />
            </div>
        </div>
    );
}
