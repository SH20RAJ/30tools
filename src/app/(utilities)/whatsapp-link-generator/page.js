import WhatsAppLinkGenerator from "@/components/tools/utilities/WhatsAppLinkGenerator";

export async function generateMetadata() {
    const title = "WhatsApp Link Generator - Create Chat Links";
    const description = "Create custom WhatsApp links with pre-filled messages. Perfect for businesses and Instagram bios. Free and instant.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/whatsapp-link-generator",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/whatsapp-link-generator",
            siteName: "30tools",
            type: "website",
        },
    };
}

export default function WhatsAppLinkGeneratorPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    WhatsApp Link <span className="text-primary">Generator</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Start chats instantly with a click. Create direct links to your WhatsApp number.
                </p>
            </div>
            <WhatsAppLinkGenerator />
        </div>
    );
}
