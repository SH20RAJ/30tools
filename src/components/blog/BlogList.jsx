"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon, Loader2Icon } from "lucide-react";

function ArticleCard({ article }) {
    return (
        <Link
            href={`/blogs/${article.user.username}/${article.slug}`}
            className="block h-full"
        >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden group">
                {article.cover_image && (
                    <div className="relative w-full h-48 overflow-hidden">
                        <img
                            src={article.cover_image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                        />
                    </div>
                )}
                <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {article.tag_list.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                                #{tag}
                            </Badge>
                        ))}
                    </div>
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                        {article.title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-muted-foreground line-clamp-3 text-sm">
                        {article.description}
                    </p>
                </CardContent>
                <CardFooter className="border-t pt-4 text-sm text-muted-foreground flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        {article.user.profile_image_90 && (
                            <img
                                src={article.user.profile_image_90}
                                alt={article.user.name}
                                width={24}
                                height={24}
                                className="rounded-full"
                                loading="lazy"
                            />
                        )}
                        <span className="truncate max-w-[100px]">{article.user.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <CalendarIcon className="h-3 w-3" />
                        <span>{new Date(article.published_at).toLocaleDateString()}</span>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
}

export default function BlogList() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [error, setError] = useState(null);
    const perPage = 12;

    const fetchArticles = useCallback(async (pageNum) => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(
                `https://dev.to/api/articles?tag=webdev&top=30&per_page=${perPage}&page=${pageNum}`
            );
            if (!res.ok) throw new Error("Failed to fetch articles");
            const data = await res.json();
            setArticles(data);
            setHasMore(data.length === perPage);
        } catch (err) {
            setError(err.message);
            setArticles([]);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchArticles(page);
    }, [page, fetchArticles]);

    const goToPage = (newPage) => {
        if (newPage < 1 || (newPage > page && !hasMore)) return;
        setPage(newPage);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div>
            {/* Loading State */}
            {loading && (
                <div className="flex justify-center items-center py-20">
                    <Loader2Icon className="h-8 w-8 animate-spin text-primary" />
                    <span className="ml-2 text-muted-foreground">Loading articles...</span>
                </div>
            )}

            {/* Error State */}
            {error && !loading && (
                <div className="text-center py-12">
                    <p className="text-destructive mb-4">{error}</p>
                    <Button onClick={() => fetchArticles(page)}>Try Again</Button>
                </div>
            )}

            {/* Articles Grid */}
            {!loading && !error && (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {articles.map((article) => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>

                    {articles.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground">No articles found.</p>
                        </div>
                    )}

                    {/* Pagination */}
                    {articles.length > 0 && (
                        <div className="flex justify-center items-center gap-4 mt-12">
                            <Button
                                variant="outline"
                                onClick={() => goToPage(page - 1)}
                                disabled={page === 1}
                            >
                                <ChevronLeftIcon className="h-4 w-4 mr-1" />
                                Previous
                            </Button>

                            <div className="flex items-center gap-2">
                                {[...Array(Math.min(5, page + 2))].map((_, i) => {
                                    const pageNum = Math.max(1, page - 2) + i;
                                    if (pageNum < 1) return null;
                                    return (
                                        <Button
                                            key={pageNum}
                                            variant={pageNum === page ? "default" : "ghost"}
                                            size="sm"
                                            onClick={() => goToPage(pageNum)}
                                            className="w-10 h-10"
                                        >
                                            {pageNum}
                                        </Button>
                                    );
                                })}
                            </div>

                            <Button
                                variant="outline"
                                onClick={() => goToPage(page + 1)}
                                disabled={!hasMore}
                            >
                                Next
                                <ChevronRightIcon className="h-4 w-4 ml-1" />
                            </Button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
