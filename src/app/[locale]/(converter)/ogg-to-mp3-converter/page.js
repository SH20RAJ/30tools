import FileConverter from "@/components/tools/converter/FileConverter";

export async function generateMetadata() {
    const title = "OGG to MP3 Converter - Free Online Audio Tool";
    const description = "Convert OGG Vorbis audio files to standard MP3 format online securely and quickly.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/ogg-to-mp3-converter",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/ogg-to-mp3-converter",
            siteName: "30tools",
            type: "website",
        },
    };
}

export default function OggToMp3Page() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    OGG to MP3 <span className="text-primary">Converter</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Convert OGG audio files to MP3 format for better compatibility.
                </p>
            </div>
            <FileConverter fromFormat="ogg" toFormat="mp3" type="audio" />
        </div>
    );
}
