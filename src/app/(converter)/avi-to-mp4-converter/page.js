import FileConverter from "@/components/tools/converter/FileConverter";
import { getSEOConfig } from "@/constants/tools-utils";

export async function generateMetadata() {
    const title = "AVI to MP4 Converter - Free Online Video Converter";
    const description = "Convert AVI videos to MP4 format online for free. Fast, high-quality conversion with no watermarks.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/avi-to-mp4-converter",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/avi-to-mp4-converter",
            siteName: "30tools",
            type: "website",
        },
    };
}

export default function AviToMp4Page() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    AVI to MP4 <span className="text-primary">Converter</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Convert your AVI files to the widely supported MP4 format instantly.
                </p>
            </div>
            <FileConverter fromFormat="avi" toFormat="mp4" type="video" />
        </div>
    );
}
