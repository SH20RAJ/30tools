import PasswordGeneratorTool from "@/components/tools/utilities/PasswordGeneratorTool";
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
    title: "Strong Password Generator (2026) - Secure & Random | 30Tools",
    description:
        "Generate strong, random passwords instantly. Protect your accounts with our free online password creator. Customizable length, symbols, and numbers. 100% Client-side secure.",
    keywords: [
        "password generator",
        "strong password generator",
        "random password maker",
        "secure password creator",
        "generate random password",
        "online password generator",
        "wifi password generator",
        "password strength checker",
        "client-side password tool"
    ].join(", "),
    openGraph: {
        title: "Strong Password Generator - Secure & Random",
        description:
            "Generate strong, random passwords instantly. Protect your accounts with our free online password creator.",
        url: "https://30tools.com/password-generator",
        siteName: "30tools",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Strong Password Generator - Secure & Random",
        description:
            "Generate strong, random passwords instantly to protect your accounts.",
    },
    canonical: "https://30tools.com/password-generator",
};

export default function PasswordGeneratorPage() {
    const toolData = {
        id: "password-generator",
        name: "Password Generator",
        description: "Create secure passwords instantly",
        category: "utilities",
        route: "/password-generator",
    };

    const features = [
        "Cryptographically Secure Randomness",
        "100% Client-Side (No server storage)",
        "Adjustable Password Length (up to 64)",
        "Include/Exclude Symbols & Numbers",
        "Real-time Strength Meter",
        "One-click Copy",
        "No Registration Required",
        "Works Offline"
    ];

    const examples = [
        {
            title: "Standard Secure",
            description: "16 chars, mixed case + numbers",
            input: "Default Settings",
            output: "Xy9#mK2$pL5@vN8q",
        },
        {
            title: "PIN Code",
            description: "Numeric only",
            input: "Numbers only selected",
            output: "849205",
        },
        {
            title: "Ultra Secure",
            description: "32 chars, full complexity",
            input: "All options enabled, max length",
            output: "H$k9&2Lm#P@1qZ*5vN8xR!3wY6bJ+4dC",
        }
    ];

    const faqs = [
        {
            question: "Is this password generator safe?",
            answer: "Yes, absolutely. The passwords are generated entirely within your browser using JavaScript's secure random number generator. We never see, store, or transmit your passwords.",
        },
        {
            question: "How long should a strong password be?",
            answer: "Security experts recommend a minimum of 16 characters for maximum security against brute-force attacks.",
        },
        {
            question: "Why do I need symbols in my password?",
            answer: "Adding symbols exponentially increases the possible combinations, making it significantly harder for hackers to guess your password.",
        }
    ];

    const relatedTools = [
        {
            id: "jwt-decoder",
            name: "JWT Decoder",
            description: "Decode security tokens",
            route: "/jwt-decoder",
            category: "developer",
        },
        {
            id: "base64-tool",
            name: "Base64 Tool",
            description: "Encode credentials",
            route: "/base64-tool",
            category: "developer",
        },
        {
            id: "pdf-protect",
            name: "PDF Protect",
            description: "Password protect PDFs",
            route: "/pdf-protect",
            category: "pdf",
        },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Password Generator",
        "applicationCategory": "SecurityApplication",
        "operatingSystem": "Any",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": "Free online tool to generate strong, secure random passwords."
    };

    return (
        <div className="min-h-screen bg-background">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <div className="container mx-auto px-4 py-12 md:py-20 max-w-5xl">
                <div className="text-center space-y-4 mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        Free <span className="text-primary">Strong Password Generator</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Generate uncrackable, cryptographically secure passwords instantly. Protect your data with military-grade randomness.
                    </p>
                    <QuickActions
                        toolName="Password Generator"
                        toolUrl="https://30tools.com/password-generator"
                        showBookmark={true}
                        showShare={true}
                    />
                </div>

                <div className="mb-20">
                    <PasswordGeneratorTool />
                </div>

                {/* Content Sections */}
                <GeneratorToolFeatures tool={toolData} features={features} />
                <GeneratorToolExamples tool={toolData} examples={examples} title="Password Types" />

                <div className="mb-20">
                    <FAQSection
                        faqs={faqs}
                        title="Password Security FAQ"
                        categoryTitle="Security"
                        variant="accordion"
                        showSchema={true}
                    />
                </div>

                <div className="mb-20">
                    <RelatedTools
                        currentTool="password-generator"
                        category="utilities"
                        tools={relatedTools}
                        title="Security Tools"
                    />
                </div>

                <UserComments
                    toolId="password-generator"
                    toolName="Password Generator"
                    showStats={true}
                    allowComments={true}
                />
            </div>
        </div>
    );
}
