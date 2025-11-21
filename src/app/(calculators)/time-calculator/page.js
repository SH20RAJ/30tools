import TimeCalculatorTool from "@/components/tools/calculators/TimeCalculatorTool";

export const metadata = {
    title: "Time Calculator - Add, Subtract, Convert Time Durations | 30tools",
    description:
        "Free time calculator to add, subtract, and convert time durations. Calculate hours, minutes, seconds with ease.",
    keywords: [
        "time calculator",
        "time duration calculator",
        "hours calculator",
    ].join(", "),
    alternates: {
        canonical: "https://30tools.com/time-calculator",
    },

    openGraph: {
        title: "Time Calculator - Add, Subtract, Convert Time Durations",
        description:
            "Add, subtract, and convert time durations",
        url: "https://30tools.com/time-calculator",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/time-calculator.jpg",
                width: 1200,
                height: 630,
                alt: "Time Calculator",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Time Calculator - Add, Subtract, Convert Time Durations",
        description:
            "Add and subtract time",
        images: ["/og-images/time-calculator.jpg"],
        creator: "@30tools",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Time Calculator",
    description:
        "Add, subtract, and convert time durations",
    url: "https://30tools.com/time-calculator",
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

export default function TimeCalculatorPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-4">Time Calculator</h1>
                        <p className="text-xl text-muted-foreground">
                            Add, subtract, and convert time durations
                        </p>
                    </div>

                    <TimeCalculatorTool />
                </div>
            </div>
        </>
    );
}
