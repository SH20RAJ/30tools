import CodeMinifier from "@/components/tools/developer/CodeMinifier";

export const metadata = {
    title: "CSS Minifier (2026) - Compress CSS Online | 30Tools",
    description: "Minify CSS files online for free (Updated 2026). Compress stylesheets to reduce file size & improve website speed. Instant & restore feature.",
    keywords: [
        "css minifier 2026",
        "compress css online",
        "minify css file",
        "css optimizer tool",
        "reduce css size",
        "stylesheet compressor",
        "updated 2026",
        "web performance tools"
    ].join(", "),
    alternates: {
        canonical: "https://30tools.com/css-minifier",
    },
    openGraph: {
        title: "CSS Minifier (2026) - Free CSS Compressor",
        description: "⚡ Minify CSS code instantly! Reduce file size & boost page load speed (Updated 2026).",
        url: "https://30tools.com/css-minifier",
        siteName: "30tools",
        type: "website",
        images: [
            {
                url: "/og-images/css-minifier.jpg",
                width: 1200,
                height: 630,
                alt: "Free CSS Minifier 2026",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "CSS Minifier (2026) - Compress Code Free",
        description: "⚡ Minify & Optimize CSS instantly. Updated 2026!",
        images: ["/og-images/css-minifier.jpg"],
        creator: "@30tools",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function CssMinifierPage() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    CSS <span className="text-primary">Minifier</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Minify your Stylesheets (CSS) to reduce file size and improve performance.
                </p>
            </div>
            <CodeMinifier language="css" />
        </div>
    );
}
