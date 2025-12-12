import FileConverter from "@/components/tools/converter/FileConverter";

export async function generateMetadata() {
    const title = "M4A to MP3 Converter - Free Audio Converter";
    const description = "Convert M4A audio (Apple format) to universally compatible MP3 format online for free.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/m4a-to-mp3-converter",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/m4a-to-mp3-converter",
            siteName: "30tools",
            type: "website",
        },
    };
}

export default function M4aToMp3Page() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    M4A to MP3 <span className="text-primary">Converter</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Convert Apple M4A files to MP3 for playback on any device.
                </p>
            </div>
            <FileConverter fromFormat="m4a" toFormat="mp3" type="audio" />
        </div>
    );
}
