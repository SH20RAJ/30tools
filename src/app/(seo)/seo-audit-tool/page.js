import SeoAnalyzer from "@/components/tools/seo/SeoAnalyzer";

export async function generateMetadata() {
    const title = "Free SEO Audit Tool - Website Analysis Report";
    const description = "Perform a complete SEO audit of your website. Identify technical issues, on-page SEO errors, and improvements.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/seo-audit-tool",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/seo-audit-tool",
            siteName: "30tools",
            type: "website",
        },
    };
}

export default function SeoAuditToolPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    SEO Audit <span className="text-primary">Tool</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Get a comprehensive SEO score and actionable checklist for your website.
                </p>
            </div>
            <SeoAnalyzer type="audit" title="Run Audit" />
        </div>
    );
}
