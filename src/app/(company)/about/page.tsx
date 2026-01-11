import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Globe2, Layers, ShieldCheck, Zap } from "lucide-react";

export const metadata = {
    title: "About 30Tools - Free Online Tools for Everyone",
    description: "Learn about 30Tools, your go-to destination for free, high-quality online tools. We provide image, PDF, video, and developer tools to simplify your workflow.",
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-8 md:py-16 max-w-5xl">
            {/* Back Button */}
            <div className="mb-8">
                <Button variant="ghost" asChild className="pl-0 hover:bg-transparent hover:text-primary">
                    <Link href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Tools
                    </Link>
                </Button>
            </div>

            {/* Hero Section */}
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 pb-2">
                    About 30Tools
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Empowering creators, developers, and professionals with free, high-quality utilities that just work.
                </p>
            </div>

            {/* Mission Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="space-y-6">
                    <h2 className="text-3xl font-semibold tracking-tight">Our Mission</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        At 30Tools, we believe that essential digital utilities should be accessible to everyone, everywhere, for free. In a world cluttered with paywalls and complicated software, we stand for simplicity and accessibility.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Whether you're a student compressing a PDF, a designer removing a background, or a developer formatting JSON, we're here to save you time and effort with tools that are fast, secure, and easy to use.
                    </p>
                </div>
                <div className="bg-muted/50 rounded-2xl p-8 border border-border/50">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-3">
                            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                <Zap className="h-5 w-5" />
                            </div>
                            <h3 className="font-semibold">Fast & Efficient</h3>
                            <p className="text-sm text-muted-foreground">Optimized for speed, so you can get your work done instantly.</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                <ShieldCheck className="h-5 w-5" />
                            </div>
                            <h3 className="font-semibold">Privacy First</h3>
                            <p className="text-sm text-muted-foreground">Most tools run locally in your browser to keep your data safe.</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                <CheckCircle2 className="h-5 w-5" />
                            </div>
                            <h3 className="font-semibold">100% Free</h3>
                            <p className="text-sm text-muted-foreground">No hidden subscriptions. Just useful tools available 24/7.</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                <Globe2 className="h-5 w-5" />
                            </div>
                            <h3 className="font-semibold">Accessible</h3>
                            <p className="text-sm text-muted-foreground">Works on any device—mobile, tablet, or desktop.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Story Section */}
            <div className="max-w-3xl mx-auto text-center mb-20">
                <div className="inline-flex items-center justify-center p-3 mb-6 bg-accent/20 rounded-full">
                    <Layers className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-semibold mb-6">The Story So Far</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    30Tools started as a simple idea: collect the most useful web utilities in one place. What began as a small side project has grown into a comprehensive suite of over 50 tools trusted by thousands of users daily.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                    We are constantly adding new tools and improving existing ones based on community feedback. Our goal is to become the internet's most reliable toolbox.
                </p>
            </div>

            {/* Call to Action */}
            <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center border border-primary/10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Creating & Converting</h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    Explore our collection of tools and see how much time you can save today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild>
                        <Link href="/search">Explore All Tools</Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
