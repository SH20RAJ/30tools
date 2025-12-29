import CPMCalculator from "@/components/tools/youtube/CPMCalculator";

export const metadata = {
    title: "CPM Calculator | Calculate Cost Per Impressions | 30tools",
    description:
        "Free CPM (Cost Per Mille) calculator. Calculate CPM, Total Cost, or Impressions for advertising campaigns. Essential for marketers and creators.",
    keywords:
        "cpm calculator, cost per mille, ad cost calculator, calculate cpm, advertising calculator, marketing tools",
    openGraph: {
        title: "CPM Calculator - Ad Cost Calculator",
        description: "Calculate your ad costs and CPM instantly.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "CPM Calculator",
        description: "Free online CPM calculator for advertisers and creators.",
        creator: "@30tools",
    },
    alternates: {
        canonical: "https://30tools.com/cpm-calculator",
    },
};

const _jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "CPM Calculator",
    description:
        "Calculate Cost Per Mille (CPM), total cost, or impressions for your campaigns.",
    url: "https://30tools.com/cpm-calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
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

export default function CPMCalculatorPage() {
    return <CPMCalculator />;
}
