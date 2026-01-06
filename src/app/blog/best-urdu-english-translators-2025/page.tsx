
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Best Urdu to English Translators You Can Use in 2025 - 30Tools",
    description: "Top translation tools for accurate Urdu to English conversion, featuring Google Translate and more.",
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Best Urdu to English Translators You Can Use in 2025</h1>
                <div className="flex items-center gap-4 text-muted-foreground mb-8">
                    <span>January 9, 2025</span>
                    <span>•</span>
                    <span>6 min read</span>
                </div>

                <p className="lead">
                    Finding accurate translation tools for Urdu can be challenging due to its complex script and grammar. Here are the best tools available in 2025.
                </p>

                <h2>1. Google Translate</h2>
                <p>Still the market leader with improved neural machine translation for Urdu.</p>

                <h2>2. Bing Microsoft Translator</h2>
                <p>A strong alternative with good support for formal Urdu similar to business contexts.</p>

                <h2>3. Easy Urdu Keyboard</h2>
                <p>Great for mobile users who want to type in Urdu and translate on the fly.</p>
            </article>
        </div>
    );
}
