import { Inter } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "SEO Toolkit - Free Online SEO Audit & Analysis",
    description: "Comprehensive SEO toolkit to analyze your website's performance, technical SEO, and on-page elements.",
};

export default function SeoToolkitLayout({ children }) {
    return (
        <div className={`min-h-screen flex flex-col bg-background ${inter.className}`}>
            {/* Minimal Navbar */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2 font-bold text-xl">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-primary">SEO</span> Toolkit
                        </Link>
                    </div>
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <Link href="/seotoolkit" className="transition-colors hover:text-primary">Bulk Scan</Link>
                        <Link href="/seotoolkit" className="transition-colors hover:text-primary">Compare</Link>
                        <Link href="/schema-generator" className="transition-colors hover:text-primary">Schema</Link>
                        <Link href="/seotoolkit" className="transition-colors hover:text-primary">SERP Preview</Link>
                        <Link href="/seotoolkit" className="transition-colors hover:text-primary">Web Vitals</Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <Button variant="default" size="sm">Start free audit</Button>
                    </div>
                </div>
            </header>

            <main className="flex-1">
                {children}
            </main>

            {/* Minimal Footer */}
            <footer className="border-t py-8">
                <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <p>© 2026 SEO Toolkit. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="hover:underline">Privacy</Link>
                        <Link href="/terms" className="hover:underline">Terms</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
