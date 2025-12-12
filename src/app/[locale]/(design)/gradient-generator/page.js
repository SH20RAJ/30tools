import GradientGenerator from "@/components/tools/design/GradientGenerator";

export async function generateMetadata() {
    const title = "CSS Gradient Generator - Free Online Color Tool";
    const description = "Create beautiful CSS gradients for your website or app. Copy CSS code instantly. Free, fast, and easy to use.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/gradient-generator",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/gradient-generator",
            siteName: "30tools",
            type: "website",
        },
    };
}

export default function GradientGeneratorPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    CSS Gradient <span className="text-primary">Generator</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Design stunning linear gradients and get the CSS code ready for your project.
                </p>
            </div>
            <GradientGenerator />
        </div>
    );
}
