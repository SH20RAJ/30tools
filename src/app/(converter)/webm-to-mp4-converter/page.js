import FileConverter from "@/components/tools/converter/FileConverter";

export async function generateMetadata() {
    const title = "WebM to MP4 Converter - Free Online Tool";
    const description = "Convert WebM videos to MP4 format. High speed conversion for your web videos.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/webm-to-mp4-converter",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/webm-to-mp4-converter",
            siteName: "30tools",
            type: "website",
        },
    };
}

export default function WebmToMp4Page() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    WebM to MP4 <span className="text-primary">Converter</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Convert WebM videos to MP4 for better compatibility across devices.
                </p>
            </div>
            <FileConverter fromFormat="webm" toFormat="mp4" type="video" />
        </div>
    );
}
