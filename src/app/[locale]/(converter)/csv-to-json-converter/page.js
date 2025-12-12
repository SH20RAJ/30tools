import DataConverter from "@/components/tools/converter/DataConverter";

export async function generateMetadata() {
    const title = "CSV to JSON Converter - Free Online Data Tool";
    const description = "Convert CSV (Comma Separated Values) data to structured JSON format instantly. Great for developers and data analysts.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/csv-to-json-converter",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/csv-to-json-converter",
            siteName: "30tools",
            type: "website",
        },
    };
}

export default function CsvToJsonPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    CSV to JSON <span className="text-primary">Converter</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Transform your CSV spreadsheets into JSON format for web applications.
                </p>
            </div>
            <DataConverter fromFormat="csv" toFormat="json" />
        </div>
    );
}
