import PregnancyCalculatorTool from "@/components/tools/calculators/PregnancyCalculatorTool";

export const metadata = {
    title: "Pregnancy Calculator - Calculate Due Date & Milestones | 30tools",
    description:
        "Free pregnancy calculator to calculate due date, conception date, and pregnancy milestones based on last menstrual period.",
    keywords: [
        "pregnancy calculator",
        "due date calculator",
        "pregnancy due date",
        "conception calculator",
    ].join(", "),
    alternates: {
        canonical: "https://30tools.com/pregnancy-calculator",
    },

    openGraph: {
        title: "Pregnancy Calculator - Calculate Due Date & Milestones",
        description:
            "Calculate due date and pregnancy milestones",
        url: "https://30tools.com/pregnancy-calculator",
        siteName: "30tools",
        images: [
            {
                url: "/og-images/pregnancy-calculator.jpg",
                width: 1200,
                height: 630,
                alt: "Pregnancy Calculator",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Pregnancy Calculator - Calculate Due Date & Milestones",
        description:
            "Calculate due date",
        images: ["/og-images/pregnancy-calculator.jpg"],
        creator: "@30tools",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Pregnancy Calculator",
    description:
        "Calculate due date and pregnancy milestones",
    url: "https://30tools.com/pregnancy-calculator",
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

export default function PregnancyCalculatorPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold mb-4">Pregnancy Calculator</h1>
                        <p className="text-xl text-muted-foreground">
                            Calculate due date and pregnancy milestones
                        </p>
                    </div>

                    <PregnancyCalculatorTool />

                    <div className="mt-12 space-y-8">
                        <div className="bg-card rounded-lg p-6 border">
                            <h2 className="text-2xl font-semibold mb-4">
                                Pregnancy Information
                            </h2>
                            <p className="text-muted-foreground">
                                This calculator estimates your due date based on the first day of your last menstrual period (LMP).
                                A typical pregnancy lasts about 40 weeks from LMP.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
