
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Step-by-Step Guide to Cancel Your Netflix Membership - 30Tools",
    description: "Hassle-free guide to canceling your Netflix subscription in just a few clicks.",
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
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Step-by-Step Guide to Cancel Your Netflix Membership</h1>
                <div className="flex items-center gap-4 text-muted-foreground mb-8">
                    <span>January 10, 2025</span>
                    <span>•</span>
                    <span>3 min read</span>
                </div>

                <p className="lead">
                    Need to take a break from streaming? Canceling your Netflix membership is straightforward if you know where to look.
                </p>

                <h2>Steps to Cancel</h2>
                <ol>
                    <li>Sign in to Netflix.com.</li>
                    <li>Click on your profile icon and select <strong>Account</strong>.</li>
                    <li>Under "Membership & Billing", click <strong>Cancel Membership</strong>.</li>
                    <li>Confirm your cancellation.</li>
                </ol>

                <p>Your account will remain active until the end of the current billing period.</p>
            </article>
        </div>
    );
}
