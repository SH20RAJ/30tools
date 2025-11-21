import TemperatureConverterTool from "@/components/tools/calculators/TemperatureConverterTool";

export const metadata = {
    title: "Temperature Converter - Celsius, Fahrenheit, Kelvin | 30tools",
    description:
        "Free temperature converter to convert between Celsius, Fahrenheit, and Kelvin. Instant accurate temperature conversion.",
    keywords: [
        "temperature converter",
        "celsius to fahrenheit",
        "fahrenheit to celsius",
        "kelvin converter",
    ].join(", "),
    alternates: {
        canonical: "https://30tools.com/temperature-converter",
    },

    openGraph: {
        title: "Temperature Converter - Celsius, Fahrenheit, Kelvin",
        description:
            "Convert Celsius, Fahrenheit, and Kelvin temperatures",
        url: "https://30tools.com/temperature-converter",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/temperature-converter.jpg",
                width: 1200,
                height: 630,
                alt: "Temperature Converter",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Temperature Converter - Celsius, Fahrenheit, Kelvin",
        description:
            "Convert temperatures",
        images: ["/og-images/temperature-converter.jpg"],
        creator: "@30tools",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Temperature Converter",
    description:
        "Convert Celsius, Fahrenheit, and Kelvin temperatures",
    url: "https://30tools.com/temperature-converter",
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

export default function TemperatureConverterPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-4">Temperature Converter</h1>
                        <p className="text-xl text-muted-foreground">
                            Convert Celsius, Fahrenheit, and Kelvin temperatures
                        </p>
                    </div>

                    <TemperatureConverterTool />
                </div>
            </div>
        </>
    );
}
