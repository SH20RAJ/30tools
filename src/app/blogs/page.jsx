import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, UserIcon, ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: "Blog - 30tools",
    description: "Read the latest articles and tutorials on web development, SEO, and productivity tools.",
};

async function getArticles() {
    try {
        const res = await fetch("https://dev.to/api/articles?tag=webdev&top=7&per_page=30", {
            next: { revalidate: 3600 }, // Revalidate every hour
        });

        if (!res.ok) {
            throw new Error("Failed to fetch articles");
        }

        return res.json();
    } catch (error) {
        console.error("Error fetching articles:", error);
        return [];
    }
}

export default async function BlogPage() {
    const articles = await getArticles();

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Latest Articles</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Explore our collection of articles about web development, tools, and productivity.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                    <Link
                        key={article.id}
                        href={`/blogs/${article.user.username}/${article.slug}`}
                        className="block h-full"
                    >
                        <Card className="h-full hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden group">
                            {article.cover_image && (
                                <div className="relative w-full h-48 overflow-hidden">
                                    <img
                                        src={article.cover_image}
                                        alt={article.title}
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                ))}
            </div>

            {articles.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-muted-foreground">No articles found. Please try again later.</p>
                </div>
            )}
        </div>
    );
}
