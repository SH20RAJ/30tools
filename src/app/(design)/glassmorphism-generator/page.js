import GlassmorphismGenerator from "@/components/tools/design/GlassmorphismGenerator";

export const metadata = {
    title: "Glassmorphism CSS Generator | 30tools",
    description:
        "Free online Glassmorphism CSS generator. Create beautiful frosted-glass effects with blur, transparency, and borders. Copy clean CSS instantly.",
    keywords:
        "glassmorphism generator, css glass effect, frosted glass css, glassmorphism css generator, web design tools, ui design",
    openGraph: {
        title: "Glassmorphism Generator - Create Frosted Glass CSS | 30tools",
        description: "Create stunning glassmorphism effects for your UI visually.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Glassmorphism Generator - Free Online Tool",
        description:
            "Generate beautiful CSS glassmorphism effects instantly. Customize blur, opacity, and saturation.",
        creator: "@30tools",
    },
    alternates: {
        canonical: "https://30tools.com/glassmorphism-generator",
    },
};

const _jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Glassmorphism Generator",
    description:
        "Free online Glassmorphism CSS generator. Create beautiful frosted-glass effects with blur, transparency, and borders.",
    url: "https://30tools.com/glassmorphism-generator",
    applicationCategory: "DesignApplication",
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

export default function GlassmorphismPage() {
    return <GlassmorphismGenerator />;
}
