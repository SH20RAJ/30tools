import FontPreviewer from "@/components/tools/design/FontPreviewer";

export async function generateMetadata() {
    const title = "Google Fonts Previewer - Test Fonts Online";
    const description = "Preview and test Google Fonts with your own text. Compare font styles, weights, and sizes instantly.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/font-previewer",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/font-previewer",
            siteName: "30tools",
            type: "website",
        },
    };
}

export default function FontPreviewerPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    Font <span className="text-primary">Previewer</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Test different typefaces with your own content before using them in your designs.
                </p>
            </div>
            <FontPreviewer />
        </div>
    );
}
