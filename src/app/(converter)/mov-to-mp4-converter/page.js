import FileConverter from "@/components/tools/converter/FileConverter";

export async function generateMetadata() {
    const title = "MOV to MP4 Converter - convert QuickTime to MP4";
    const description = "Convert MOV (QuickTime) videos to MP4 format online. Perfect for making iPhone videos compatible with all devices.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/mov-to-mp4-converter",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/mov-to-mp4-converter",
            siteName: "30tools",
            type: "website",
        },
    };
}

export default function MovToMp4Page() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    MOV to MP4 <span className="text-primary">Converter</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Make your MOV files compatible everywhere by converting them to MP4.
                </p>
            </div>
            <FileConverter fromFormat="mov" toFormat="mp4" type="video" />
        </div>
    );
}
