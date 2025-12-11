import BlogList from "@/components/blog/BlogList";

export const metadata = {
    title: "Blog - Web Development Articles & Tutorials | 30tools",
    description: "Read the latest articles and tutorials on web development, JavaScript, React, Next.js, SEO, and productivity tools. Stay updated with industry trends and best practices.",
    keywords: "web development blog, javascript tutorials, react articles, nextjs guides, seo tips, programming tutorials, developer resources",
    openGraph: {
        title: "Blog - Web Development Articles & Tutorials | 30tools",
        description: "Read the latest articles and tutorials on web development, JavaScript, React, Next.js, SEO, and productivity tools.",
        type: "website",
        url: "https://30tools.com/blogs",
        images: [
            {
                url: "/og-images/blog.jpg",
                width: 1200,
                height: 630,
                alt: "30tools Blog - Web Development Articles",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog - Web Development Articles & Tutorials | 30tools",
        description: "Read the latest articles and tutorials on web development, JavaScript, React, Next.js, SEO, and productivity tools.",
        images: ["/og-images/blog.jpg"],
    },
    alternates: {
        canonical: "https://30tools.com/blogs",
    },
};

// JSON-LD structured data for the blog listing page
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "30tools Blog",
    description: "Read the latest articles and tutorials on web development, JavaScript, React, Next.js, SEO, and productivity tools.",
    url: "https://30tools.com/blogs",
    publisher: {
        "@type": "Organization",
        name: "30tools",
        url: "https://30tools.com",
        logo: {
            "@type": "ImageObject",
            url: "https://30tools.com/logo.png",
        },
    },
    blogPost: {
        "@type": "ItemList",
        itemListElement: [],
    },
};

export default function BlogPage() {
    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="container mx-auto px-4 py-12">
                {/* SEO-friendly header with static content */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Latest Articles</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Explore our collection of articles about web development, JavaScript, React,
                        Next.js, and productivity tools. Stay updated with the latest trends and best practices.
                    </p>
                </div>

                {/* Client-side blog list with pagination */}
                <BlogList />

                {/* SEO-friendly static content */}
                <section className="mt-16 border-t pt-12">
                    <h2 className="text-2xl font-bold mb-6 text-center">Why Read Our Blog?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">📚</span>
                            </div>
                            <h3 className="font-semibold mb-2">Expert Tutorials</h3>
                            <p className="text-sm text-muted-foreground">
                                Learn from detailed tutorials written by experienced developers.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🚀</span>
                            </div>
                            <h3 className="font-semibold mb-2">Latest Trends</h3>
                            <p className="text-sm text-muted-foreground">
                                Stay updated with the newest technologies and frameworks.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">💡</span>
                            </div>
                            <h3 className="font-semibold mb-2">Practical Tips</h3>
                            <p className="text-sm text-muted-foreground">
                                Get actionable advice you can apply to your projects today.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
