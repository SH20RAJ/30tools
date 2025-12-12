import CodeMinifier from "@/components/tools/developer/CodeMinifier";

export async function generateMetadata() {
    const title = "JavaScript Minifier - Minify JS Code Online";
    const description = "Compress and minify your JavaScript code online for free. Reduce file size and improve website loading speed.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/javascript-minifier",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/javascript-minifier",
            siteName: "30tools",
            type: "website",
        },
    };
}

export default function JsMinifierPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    JavaScript <span className="text-primary">Minifier</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Optimize your JavaScript code by removing unnecessary whitespace and comments.
                </p>
            </div>
            <CodeMinifier language="javascript" />
        </div>
    );
}
