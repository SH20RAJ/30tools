import FileConverter from "@/components/tools/converter/FileConverter";

export async function generateMetadata() {
    const title = "MKV to MP4 Converter - Convert Matroska Video to MP4";
    const description = "Fast and free MKV to MP4 online converter. Convert your Matroska Multimedia Container files to standard MP4.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/mkv-to-mp4-converter",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/mkv-to-mp4-converter",
            siteName: "30tools",
            type: "website",
        },
    };
}

export default function MkvToMp4Page() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    MKV to MP4 <span className="text-primary">Converter</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Convert high-quality MKV files to MP4 without losing visual quality.
                </p>
            </div>
            <FileConverter fromFormat="mkv" toFormat="mp4" type="video" />
        </div>
    );
}
