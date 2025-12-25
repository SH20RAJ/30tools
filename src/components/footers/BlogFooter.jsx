import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ZapIcon, TwitterIcon, GithubIcon, HeartIcon } from "lucide-react";
import FooterPartners from "@/components/shared/FooterPartners";


export default function BlogFooter() {
    return (
        <footer className="border-t bg-muted/50 mt-auto">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                                <ZapIcon className="h-5 w-5 text-primary-foreground" />
                            </div>
                            <span className="font-bold text-lg">30tools</span>
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            Professional online toolkit with 135+ free tools. No registration required.
                        </p>
                        <div className="flex space-x-2">
                            <Link
                                href="https://twitter.com/sh20raj"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                <TwitterIcon className="h-5 w-5" />
                            </Link>
                            <Link
                                href="https://github.com/sh20raj"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                <GithubIcon className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="text-muted-foreground hover:text-foreground">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/blogs" className="text-muted-foreground hover:text-foreground">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div className="space-y-4">
                        <h3 className="font-semibold">Categories</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/search?category=developer" className="text-muted-foreground hover:text-foreground">
                                    Developer Tools
                                </Link>
                            </li>
                            <li>
                                <Link href="/search?category=seo" className="text-muted-foreground hover:text-foreground">
                                    SEO Tools
                                </Link>
                            </li>
                            <li>
                                <Link href="/search?category=image" className="text-muted-foreground hover:text-foreground">
                                    Image Tools
                                </Link>
                            </li>
                            <li>
                                <Link href="/search?category=pdf" className="text-muted-foreground hover:text-foreground">
                                    PDF Tools
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-4">
                        <h3 className="font-semibold">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <Separator className="my-8" />

                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} 30tools.com - All rights reserved
                    </p>
                    <div className="flex flex-col items-center md:items-end text-sm text-muted-foreground">
                        <p className="mb-2 flex items-center">
                            Made with <HeartIcon className="h-4 w-4 mx-1 text-destructive fill-current" /> for the web.
                        </p>
                        <FooterPartners />
                    </div>

                </div>
            </div>
        </footer>
    );
}
