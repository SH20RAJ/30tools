import TimezoneConverter from "@/components/tools/utilities/TimezoneConverter";

export async function generateMetadata() {
    const title = "World Clock & Timezone Converter - Check Current Time";
    const description = "Check the current time in any major city worldwide. Simple and free online world clock and time zone converter.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/timezone-converter",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/timezone-converter",
            siteName: "30tools",
            type: "website",
        },
    };
}

export default function TimezoneConverterPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    Timezone <span className="text-primary">Converter</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Find the exact time in any city around the world.
                </p>
            </div>
            <TimezoneConverter />
        </div>
    );
}
