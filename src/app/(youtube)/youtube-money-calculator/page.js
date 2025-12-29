import YouTubeMoneyCalculator from "@/components/tools/youtube/YouTubeMoneyCalculator";

export const metadata = {
    title: "YouTube Money Calculator | Estimated Earnings | 30tools",
    description:
        "Calculate your estimated YouTube earnings based on views and RPM/CPM. See daily, monthly, and yearly revenue potential for different niches.",
    keywords:
        "youtube money calculator, youtube income calculator, estimate youtube earnings, rpm calculator, cpm calculator, youtuber salary",
    openGraph: {
        title: "YouTube Money Calculator - Check Your Earnings",
        description: "Find out how much money you can make on YouTube.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "YouTube Money Calculator",
        description: "Calculate potential YouTube revenue instantly.",
        creator: "@30tools",
    },
    alternates: {
        canonical: "https://30tools.com/youtube-money-calculator",
    },
};

const _jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "YouTube Money Calculator",
    description:
        "Free tool to calculate estimated YouTube earnings based on daily views and RPM.",
    url: "https://30tools.com/youtube-money-calculator",
    applicationCategory: "FinanceApplication",
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

export default function YouTubeMoneyPage() {
    return <YouTubeMoneyCalculator />;
}
