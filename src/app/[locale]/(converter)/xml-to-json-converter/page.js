import DataConverter from "@/components/tools/converter/DataConverter";

export async function generateMetadata() {
    const title = "XML to JSON Converter - Free Online Developer Tool";
    const description = "Convert XML data structures to JSON format easily. Free online tool for developers working with APIs and data integration.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/xml-to-json-converter",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/xml-to-json-converter",
            siteName: "30tools",
            type: "website",
        },
    };
}

export default function XmlToJsonPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    XML to JSON <span className="text-primary">Converter</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Convert complex XML data to simplified JSON format.
                </p>
            </div>
            <DataConverter fromFormat="xml" toFormat="json" />
        </div>
    );
}
