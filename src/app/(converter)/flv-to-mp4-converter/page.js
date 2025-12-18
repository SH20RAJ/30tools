import FileConverter from "@/components/tools/converter/FileConverter";

export async function generateMetadata() {
    const title = "FLV to MP4 Converter - Flash Video to MP4";
    const description = "Convert FLV (Flash Video) files to MP4 format online. Modernize your old video library securely.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/flv-to-mp4-converter",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/flv-to-mp4-converter",
            siteName: "30tools",
            type: "website",
        },
    };
}

export default function FlvToMp4Page() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    FLV to MP4 <span className="text-primary">Converter</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Convert old Flash Video (FLV) files to modern MP4 format.
                </p>
            </div>
            <FileConverter fromFormat="flv" toFormat="mp4" type="video" />
        </div>
    );
}
