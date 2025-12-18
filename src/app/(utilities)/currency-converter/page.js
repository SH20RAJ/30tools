import CurrencyConverter from "@/components/tools/utilities/CurrencyConverter";

export async function generateMetadata() {
    const title = "Free Currency Converter - Live Exchange Rates";
    const description = "Convert currencies online with live exchange rates. Free tool for USD, EUR, GBP, JPY, and more.";

    return {
        title,
        description,
        alternates: {
            canonical: "https://30tools.com/currency-converter",
        },
        openGraph: {
            title,
            description,
            url: "https://30tools.com/currency-converter",
            siteName: "30tools",
            type: "website",
        },
    };
}

export default function CurrencyConverterPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    Currency <span className="text-primary">Converter</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Get real-time exchange rates and convert amounts instantly.
                </p>
            </div>
            <CurrencyConverter />
        </div>
    );
}
