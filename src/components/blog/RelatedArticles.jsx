"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Loader2Icon } from "lucide-react";

function RelatedArticleCard({ article }) {
    return (
        <Link
            href={`/blogs/${article.user.username}/${article.slug}`}
            className="block"
        >
            <Card className="hover:shadow-md transition-shadow duration-300 overflow-hidden group h-full">
                <div className="flex flex-col sm:flex-row">
                    {article.cover_image && (
                        <div className="relative w-full sm:w-32 h-32 sm:h-auto overflow-hidden flex-shrink-0">
                            <img
                                src={article.cover_image}
                                alt={article.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                            />
                        </div>
                    )}
                    <div className="flex-1 p-4">
                        <div className="flex flex-wrap gap-1 mb-2">
                            {article.tag_list.slice(0, 2).map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                    #{tag}
                                </Badge>
                            ))}
                        </div>
                        <h4 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors text-sm">
                            {article.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                            <span>{article.user.name}</span>
                            <span>•</span>
                            <span>{article.reading_time_minutes} min read</span>
                        </div>
                    </div>
                </div>
            </Card>
        </Link>
    );
}

export default function RelatedArticles({ tags, currentArticleId }) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchRelated() {
            if (!tags || tags.length === 0) {
                setLoading(false);
                return;
            }

            try {
                // Fetch articles with the first tag
                const primaryTag = tags[0];
                const res = await fetch(
                    `https://dev.to/api/articles?tag=${encodeURIComponent(primaryTag)}&per_page=6`
                );

                if (!res.ok) throw new Error("Failed to fetch");

                const data = await res.json();
                // Filter out the current article
                const filtered = data.filter((a) => a.id !== currentArticleId).slice(0, 4);
                setArticles(filtered);
            } catch (err) {
                console.error("Error fetching related articles:", err);
                setArticles([]);
            } finally {
                setLoading(false);
            }
        }

        fetchRelated();
    }, [tags, currentArticleId]);

    if (loading) {
        return (
            <div className="flex justify-center items-center py-8">
                <Loader2Icon className="h-6 w-6 animate-spin text-primary" />
            </div>
        );
    }

    if (articles.length === 0) {
        return null;
    }

    return (
        <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {articles.map((article) => (
                    <RelatedArticleCard key={article.id} article={article} />
                ))}
            </div>
        </section>
    );
}
