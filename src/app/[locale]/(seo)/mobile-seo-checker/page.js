import SeoAnalyzer from "@/components/tools/seo/SeoAnalyzer";

export async function generateMetadata() {
    const title = "Mobile SEO Checker - Test Mobile Friendliness";
    const description = "Check if your website is optimized for mobile devices. Analyze responsiveness and mobile usability for better rankings.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/mobile-seo-checker",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/mobile-seo-checker",
            siteName: "30tools",
            type: "website",
        },
    };
}

export default function MobileSeoCheckerPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    Mobile SEO <span className="text-primary">Checker</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Ensure your website provides a great user experience on mobile devices.
                </p>
            </div>
            <SeoAnalyzer type="mobile" title="Check Mobile" />
        </div>
    );
}
