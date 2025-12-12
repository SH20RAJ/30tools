import CodeMinifier from "@/components/tools/developer/CodeMinifier";

export async function generateMetadata() {
    const title = "CSS Minifier - Compress CSS Online";
    const description = "Free online CSS minifier. Reduce CSS file size by removing whitespace and comments to boost page speed.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/css-minifier",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/css-minifier",
            siteName: "30tools",
            type: "website",
        },
    };
}

export default function CssMinifierPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    CSS <span className="text-primary">Minifier</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Minify your Stylesheets (CSS) to reduce file size and improve performance.
                </p>
            </div>
            <CodeMinifier language="css" />
        </div>
    );
}
