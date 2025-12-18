import SchemaTester from "@/components/tools/seo/SchemaTester";

export async function generateMetadata() {
    const title = "Structured Data Testing Tool - Validate JSON-LD";
    const description = "Test and validate your schema markup (JSON-LD). Ensure your structured data is error-free for rich results.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/structured-data-tester",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/structured-data-tester",
            siteName: "30tools",
            type: "website",
        },
    };
}

export default function StructuredDataTesterPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    Structured Data <span className="text-primary">Tester</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Validate your JSON-LD schema markup to ensure eligibility for rich snippets.
                </p>
            </div>
            <SchemaTester />
        </div>
    );
}
