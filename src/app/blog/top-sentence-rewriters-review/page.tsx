
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Top 4 Sentence Rewriters: A Comprehensive Review - 30Tools",
    description: "Compare the best sentence rewriter tools to improve your content flow and clarity.",
};

export default function BlogPost() {
    return (
        <div className="container mx-auto px-4 py-8 md:py-16 max-w-4xl">
            <div className="mb-8">
                <Button variant="ghost" asChild className="pl-0 hover:bg-transparent hover:text-primary">
                    <Link href="/blog">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Blog
                    </Link>
                </Button>
            </div>

            <article className="prose prose-lg dark:prose-invert max-w-none">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Top 4 Sentence Rewriters: A Comprehensive Review</h1>
                <div className="flex items-center gap-4 text-muted-foreground mb-8">
                    <span>January 6, 2025</span>
                    <span>•</span>
                    <span>4 min read</span>
                </div>

                <p className="lead">
                    Sometimes you have the idea but not the right words. Sentence rewriters can help you polish your prose.
                </p>

                <h2>1. Grammarly</h2>
                <p>Not just a grammar checker, its premium suggestions often rewrite sentences for better clarity.</p>

                <h2>2. Ginger Software</h2>
                <p>Offers a sentence rephraser that is very effective for ESL speakers.</p>

                <h2>3. ProWritingAid</h2>
                <p>Providing in-depth style analysis to help you rewrite clunky sentences.</p>

                <h2>4. Hemingway Editor</h2>
                <p>Highlights complex sentences and suggests shortening them for better readability.</p>
            </article>
        </div>
    );
}
