import HtmlValidator from "@/components/tools/developer/HtmlValidator";

export async function generateMetadata() {
    const title = "Free HTML Validator - Check HTML Syntax Online";
    const description = "Validate your HTML code for free. Find missing tags, syntax errors, and improve your markup structure.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/html-validator",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/html-validator",
            siteName: "30tools",
            type: "website",
        },
    };
}

export default function HtmlValidatorPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    HTML <span className="text-primary">Validator</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Check your HTML code for common errors and structural issues instantly.
                </p>
            </div>
            <HtmlValidator />
        </div>
    );
}
