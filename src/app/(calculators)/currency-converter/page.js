import CurrencyConverterTool from "@/components/tools/calculators/CurrencyConverterTool";

export const metadata = {
    title: "Currency Converter - Convert Currencies with Live Rates | 30tools",
    description:
        "Free currency converter with live exchange rates. Convert between 150+ world currencies including USD, EUR, GBP, JPY, and more.",
    keywords: [
        "currency converter",
        "exchange rate calculator",
        "money converter",
        "forex calculator",
    ].join(", "),
    alternates: {
        canonical: "https://30tools.com/currency-converter",
    },

    openGraph: {
        title: "Currency Converter - Convert Currencies with Live Rates",
        description:
            "Convert between world currencies with live rates",
        url: "https://30tools.com/currency-converter",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/currency-converter.jpg",
                width: 1200,
                height: 630,
                alt: "Currency Converter",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Currency Converter - Convert Currencies with Live Rates",
        description:
            "Convert between world currencies",
        images: ["/og-images/currency-converter.jpg"],
        creator: "@30tools",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Currency Converter",
    description:
        "Convert between world currencies with live rates",
    url: "https://30tools.com/currency-converter",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    permissions: "browser",
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
    },
    author: {
        "@type": "Organization",
        name: "30tools",
        url: "https://30tools.com",
    },
};

export default function CurrencyConverterPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-4">Currency Converter</h1>
                        <p className="text-xl text-muted-foreground">
                            Convert between world currencies with live rates
                        </p>
                    </div>

                    <CurrencyConverterTool />
                </div>
            </div>
        </>
    );
}
