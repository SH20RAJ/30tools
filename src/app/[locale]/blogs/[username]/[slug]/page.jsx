import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ArrowLeftIcon, ExternalLinkIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import BlogContent from "@/components/BlogContent";
import RelatedArticles from "@/components/blog/RelatedArticles";

async function getArticle(username, slug) {
    try {
        const res = await fetch(`https://dev.to/api/articles/${username}/${slug}`, {
            next: { revalidate: 3600 },
            headers: {
                "User-Agent": "Mozilla/5.0 (compatible; 30tools/1.0; +https://30tools.com)",
            },
        });

        if (!res.ok) {
            console.error(`Fetch failed for ${username}/${slug}: ${res.status} ${res.statusText}`);
            if (res.status === 404) return null;
            throw new Error(`Failed to fetch article: ${res.status}`);
        }

        return res.json();
    } catch (error) {
        console.error("Error fetching article:", error);
        return null;
    }
}

// Safer JSON stringify to prevent script injection and syntax errors
function safeJsonStringify(value) {
    return JSON.stringify(value).replace(/</g, "\\u003c");
}

export async function generateMetadata({ params }) {
    const { username, slug } = await params;
    const article = await getArticle(username, slug);

    if (!article) {
        return {
            title: "Article Not Found",
        };
    }

    return {
        title: `${article.title} | 30tools Blog`,
        description: article.description,
        keywords: article.tags?.join(", "),
        authors: [{ name: article.user?.name }],
        openGraph: {
            title: article.title,
            description: article.description,
            type: "article",
            url: `https://30tools.com/blogs/${username}/${slug}`,
            publishedTime: article.published_at,
            authors: [article.user?.name],
            tags: article.tags,
            images: [
                {
                    url: article.cover_image || article.social_image,
                    width: 1200,
                    height: 630,
                    alt: article.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: article.title,
            description: article.description,
            images: [article.cover_image || article.social_image],
            creator: `@${article.user?.twitter_username || "30tools"}`,
        },
        alternates: {
            canonical: `https://30tools.com/blogs/${username}/${slug}`,
        },
    };
}

export default async function BlogPostPage({ params }) {
    const { username, slug } = await params;
    const article = await getArticle(username, slug);

    if (!article) {
        notFound();
    }

    // JSON-LD Article structured data for SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.description,
        image: article.cover_image || article.social_image,
        datePublished: article.published_at,
        dateModified: article.edited_at || article.published_at,
        author: {
            "@type": "Person",
            name: article.user?.name,
            url: `https://dev.to/${article.user?.username}`,
            image: article.user?.profile_image_90,
        },
        publisher: {
            "@type": "Organization",
            name: "30tools",
            url: "https://30tools.com",
            logo: {
                "@type": "ImageObject",
                url: "https://30tools.com/logo.png",
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://30tools.com/blogs/${username}/${slug}`,
        },
        keywords: article.tags?.join(", "),
        articleBody: article.body_markdown?.substring(0, 500) || "",
        wordCount: article.body_markdown?.split(/\s+/).length || 0,
        timeRequired: `PT${article.reading_time_minutes}M`,
    };

    // BreadcrumbList for SEO
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://30tools.com",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://30tools.com/blogs",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: article.title,
                item: `https://30tools.com/blogs/${username}/${slug}`,
            },
        ],
    };

    return (
        <>
            {/* JSON-LD Structured Data - Using safeJsonStringify */}
            {/* 
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: safeJsonStringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: safeJsonStringify(breadcrumbJsonLd) }}
            /> 
            */}

            <article className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="mb-8">
                    <Link href="/blogs">
                        <Button variant="ghost" className="pl-0 hover:pl-2 transition-all">
                            <ArrowLeftIcon className="mr-2 h-4 w-4" />
                            Back to Articles
                        </Button>
                    </Link>
                </div>

                <header className="mb-10 text-center">
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                        {article.tags?.map((tag) => (
                            <Badge key={tag} variant="secondary">
                                #{tag}
                            </Badge>
                        ))}
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        {article.title}
                    </h1>

                    <div className="flex items-center justify-center gap-4 text-muted-foreground mb-8 flex-wrap">
                        <div className="flex items-center gap-2">
                            {article.user.profile_image_90 && (
                                <img
                                    src={article.user.profile_image_90}
                                    alt={article.user.name}
                                    width={32}
                                    height={32}
                                    className="rounded-full"
                                />
                            )}
                            <span className="font-medium text-foreground">{article.user.name}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                            <CalendarIcon className="h-4 w-4" />
                            <time dateTime={article.published_at}>
                                {new Date(article.published_at).toLocaleDateString(undefined, {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </time>
                        </div>
                        <span>•</span>
                        <span>{article.reading_time_minutes} min read</span>
                    </div>

                    {article.cover_image && (
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                            <img
                                src={article.cover_image}
                                alt={article.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}
                </header>

                <BlogContent html={article.body_html} />
                {/* <div dangerouslySetInnerHTML={{ __html: article.body_html }} /> */}

                <Separator className="my-12" />

                {/* Related Articles - Client-side fetched */}
                <RelatedArticles tags={article.tags} currentArticleId={article.id} />

                <Separator className="my-12" />

                <div className="bg-muted/30 rounded-xl p-8 text-center">
                    <h3 className="text-xl font-bold mb-2">Enjoyed this article?</h3>
                    <p className="text-muted-foreground mb-6">
                        Read the original article on DEV.to or check out more tools on 30tools.
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <Link href={article.url} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline">
                                Read on DEV.to
                                <ExternalLinkIcon className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/blogs">
                            <Button>Read More Articles</Button>
                        </Link>
                    </div>
                </div>
            </article>
        </>
    );
}
