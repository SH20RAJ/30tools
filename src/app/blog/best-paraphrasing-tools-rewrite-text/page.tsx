
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Best Paraphrasing Tools to Rewrite Text Accurately - 30Tools",
    description: "Avoid plagiarism and enhance your writing with the best paraphrasing tools available online.",
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Best Paraphrasing Tools to Rewrite Text Accurately</h1>
                <div className="flex items-center gap-4 text-muted-foreground mb-8">
                    <span>January 7, 2025</span>
                    <span>•</span>
                    <span>4 min read</span>
                </div>

                <p className="lead">
                    Whether you are a student or a content writer, paraphrasing tools are essential for unique content.
                </p>

                <h2>1. QuillBot</h2>
                <p>The industry standard for AI paraphrasing, offering multiple modes like Standard, Fluency, and Creative.</p>

                <h2>2. Spinbot</h2>
                <p>A classic free article spinner that gets the job done.</p>

                <h2>3. Wordtune</h2>
                <p>More of a writing assistant that suggests better ways to phrase your sentences.</p>
            </article>
        </div>
    );
}
