import FileConverter from "@/components/tools/converter/FileConverter";

export async function generateMetadata() {
    const title = "WAV to MP3 Converter - Lossless to Compressed Audio";
    const description = "Convert WAV audio files to MP3 format online. Save space while maintaining excellent audio quality.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/wav-to-mp3-converter",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/wav-to-mp3-converter",
            siteName: "30tools",
            type: "website",
        },
    };
}

export default function WavToMp3Page() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    WAV to MP3 <span className="text-primary">Converter</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Compress large WAV files to MP3 without sacrificing quality.
                </p>
            </div>
            <FileConverter fromFormat="wav" toFormat="mp3" type="audio" />
        </div>
    );
}
