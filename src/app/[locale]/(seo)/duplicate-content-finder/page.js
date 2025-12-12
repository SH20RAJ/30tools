import SeoAnalyzer from "@/components/tools/seo/SeoAnalyzer";

export async function generateMetadata() {
    const title = "Duplicate Content Checker - Free Plagiarism Check";
    const description = "Check your website for duplicate content issues. Avoid Google penalties by ensuring your content is unique and original.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/duplicate-content-finder",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/duplicate-content-finder",
            siteName: "30tools",
            type: "website",
        },
    };
}

export default function DuplicateContentFinderPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    Duplicate Content <span className="text-primary">Finder</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Identify duplicate content across your website to improve SEO rankings.
                </p>
            </div>
            <SeoAnalyzer type="audit" title="Check for Duplicates" />
        </div>
    );
}
