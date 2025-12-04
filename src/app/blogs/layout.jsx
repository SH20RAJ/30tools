import BlogFooter from "@/components/footers/BlogFooter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { ZapIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import AuthComponent from "@/components/auth/AuthComponent";

export default function BlogLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                                <ZapIcon className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold">30tools</h1>
                                <p className="text-xs text-muted-foreground">Blog</p>
                            </div>
                        </Link>

                        <div className="flex items-center space-x-4">
                            <div className="hidden md:flex items-center space-x-4 mr-4">
                                <Link href="/blogs" className="text-sm font-medium hover:text-primary transition-colors">
                                    Articles
                                </Link>
                                <Link href="/search" className="text-sm font-medium hover:text-primary transition-colors">
                                    Tools
                                </Link>
                            </div>
                            <ThemeToggle />
                            <Link href="/search">
                                <Button variant="ghost" size="icon">
                                    <SearchIcon className="h-5 w-5" />
                                </Button>
                            </Link>
                            <AuthComponent />
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-grow">
                {children}
            </main>

            <BlogFooter />
        </div>
    );
}
