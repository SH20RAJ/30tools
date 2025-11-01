import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import toolsData from '@/constants/tools.json';
import {
    ImageIcon,
    VideoIcon,
    MusicIcon,
    FileTextIcon,
    FileIcon,
    ArrowRightIcon,
    ZapIcon,
    ShieldCheckIcon,
    UsersIcon,
    TrendingUpIcon,
    StarIcon,
    SearchIcon,
    PaletteIcon,
    PenToolIcon,
    CodeIcon,
    BracesIcon,
    TypeIcon,
    SettingsIcon,
    RefreshCwIcon
} from 'lucide-react';
import AuthComponent from '@/components/auth/AuthComponent';

export default function LandingPage() {
    const iconMap = {
        ImageIcon,
        VideoIcon,
        MusicIcon,
        FileTextIcon,
        FileIcon,
        PaletteIcon,
        PenToolIcon,
        SearchIcon,
        CodeIcon,
        BracesIcon,
        TypeIcon,
        SettingsIcon,
        RefreshCwIcon
    };

    const toolCategories = Object.entries(toolsData.categories).map(([key, category]) => ({
        ...category,
        icon: iconMap[category.icon] || ImageIcon,
        key
    }));

    // Get premium tools from all categories
    const premiumTools = Object.values(toolsData.categories)
        .flatMap(category => category.tools || [])
        .filter(tool => tool.premium === true)
        .slice(0, 6); // Show first 6 premium tools

    const quickSearchTags = ["image compressor", "video converter", "pdf merger", "text counter"];

    const stats = [
        { icon: UsersIcon, value: "10K+", label: "Happy Users" },
        { icon: TrendingUpIcon, value: "99.9%", label: "Uptime" },
        { icon: ZapIcon, value: "75+", label: "Free Tools" },
        { icon: StarIcon, value: "4.9", label: "User Rating" }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                                <ZapIcon className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold">30tools</h1>
                                <p className="text-sm text-muted-foreground">Free Online Toolkit</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <ThemeToggle />
                            <Link href="/search">
                                <Button variant="ghost">
                                    <SearchIcon className="h-4 w-4 mr-2" />
                                    Search
                                </Button>
                            </Link>
                            <Link href="/about">
                                <Button variant="outline">About</Button>
                            </Link>
                            <AuthComponent />
                        </div>
                    </div>
                </div>
            </header>

            <main>
                {/* Simplified Hero Section */}
                <section className="relative py-16 flex items-center justify-center overflow-hidden">
                    {/* Simple Background */}
                    <div className="absolute inset-0">
                        {/* Subtle Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
                                <ZapIcon className="h-4 w-4 text-primary" />
                                <span className="text-sm font-medium text-primary">140+ Professional Tools</span>
                                <Badge variant="secondary" className="text-xs">Free Forever</Badge>
                            </div>

                            {/* Main heading */}
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                <span className="block text-foreground">
                                    Your Ultimate
                                </span>
                                <span className="block text-primary">
                                    Online Toolkit
                                </span>
                            </h1>

                            {/* Subheading */}
                            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                                <span className="font-semibold text-foreground">Fast, free, and privacy-focused</span> tools for all your creative and professional needs.
                                <br className="hidden md:block" />
                                No sign-up required – No watermarks – No limits
                            </p>

                            {/* Feature highlights */}
                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-200 dark:border-green-800">
                                    <ShieldCheckIcon className="h-4 w-4 text-green-600" />
                                    <span className="text-sm font-medium text-green-700 dark:text-green-300">100% Private</span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-200 dark:border-blue-800">
                                    <ZapIcon className="h-4 w-4 text-blue-600" />
                                    <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Lightning Fast</span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-50 dark:bg-purple-900/20 rounded-full border border-purple-200 dark:border-purple-800">
                                    <StarIcon className="h-4 w-4 text-purple-600" />
                                    <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Professional Quality</span>
                                </div>
                            </div>

                            {/* Quick search tags */}
                            <div className="flex flex-wrap justify-center gap-3 mb-8">
                                {quickSearchTags.map((tag) => (
                                    <Link key={tag} href={`/search?q=${encodeURIComponent(tag)}`}>
                                        <Badge
                                            variant="outline"
                                            className="px-3 py-1.5 text-sm cursor-pointer hover:bg-primary/10"
                                        >
                                            {tag}
                                        </Badge>
                                    </Link>
                                ))}
                            </div>

                            {/* CTA buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/search">
                                    <Button
                                        size="lg"
                                        className="min-w-[180px] bg-primary hover:bg-primary/90"
                                    >
                                        <SearchIcon className="mr-2 h-4 w-4" />
                                        Explore All Tools
                                    </Button>
                                </Link>
                                <Link href="/image-compressor">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="min-w-[180px]"
                                    >
                                        <ImageIcon className="mr-2 h-4 w-4" />
                                        Try Image Tools
                                    </Button>
                                </Link>
                            </div>

                            {/* Trust indicators */}
                            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <UsersIcon className="h-4 w-4" />
                                    <span>Trusted by 2M+ users</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <TrendingUpIcon className="h-4 w-4" />
                                    <span>50M+ files processed</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <StarIcon className="h-4 w-4 fill-current text-yellow-500" />
                                    <span>4.9/5 user rating</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


 

                {/* Categories Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Tool Categories</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Choose from our comprehensive collection of free online tools,
                                organized by category for easy discovery.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {toolCategories.map((category) => (
                                <Link key={category.key} href={`/search?category=${category.key}`}>
                                    <Card className="hover:shadow-lg transition-shadow cursor-pointer group h-full">
                                        <CardHeader>
                                            <div className="flex items-center space-x-3">
                                                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                                                    <category.icon className="h-6 w-6 text-primary" />
                                                </div>
                                                <div>
                                                    <CardTitle className="text-lg group-hover:text-primary transition-colors">{category.name}</CardTitle>
                                                    <CardDescription className="group-hover:text-foreground transition-colors">{category.description}</CardDescription>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-3">
                                                <div className="flex flex-wrap gap-1">
                                                    {category.tools?.slice(0, 4).map((tool, i) => (
                                                        <Badge key={i} variant="outline" className="text-xs">
                                                            {tool.name}
                                                        </Badge>
                                                    ))}
                                                    {category.tools?.length > 4 && (
                                                        <Badge variant="outline" className="text-xs">
                                                            +{category.tools.length - 4} more
                                                        </Badge>
                                                    )}
                                                </div>

                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm text-muted-foreground">
                                                        {category.tools?.length || 0} tools
                                                    </span>
                                                    <Button variant="ghost" size="sm" className="group-hover:bg-primary/10">
                                                        View All
                                                        <ArrowRightIcon className="ml-1 h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 bg-muted/50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Why Choose 30tools?</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Built with privacy, speed, and user experience in mind.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                                        <ShieldCheckIcon className="h-8 w-8 text-primary" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
                                <p className="text-muted-foreground">
                                    All processing happens in your browser. Your files never leave your device.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                                        <ZapIcon className="h-8 w-8 text-primary" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                                <p className="text-muted-foreground">
                                    Optimized for speed with instant processing and no server delays.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                                        <StarIcon className="h-8 w-8 text-primary" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Always Free</h3>
                                <p className="text-muted-foreground">
                                    No subscriptions, no hidden fees. All tools are completely free forever.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4 text-center">
                        <div className="max-w-2xl mx-auto">
                            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                            <p className="text-muted-foreground mb-8">
                                Join thousands of users who trust 30tools for their daily file processing needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/search">
                                    <Button size="lg">
                                        Explore All Tools
                                        <ArrowRightIcon className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link href="/image-compressor">
                                    <Button variant="outline" size="lg">
                                        Start with Image Compressor
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t bg-muted/50">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                                    <ZapIcon className="h-5 w-5 text-primary-foreground" />
                                </div>
                                <div>
                                    <h3 className="font-bold">30tools</h3>
                                    <p className="text-sm text-muted-foreground">Free Online Toolkit</p>
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Your ultimate destination for free online tools. Fast, secure, and always free.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Popular Tools</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/image-compressor" className="text-muted-foreground hover:text-foreground">Image Compressor</Link></li>
                                <li><Link href="/search?q=video converter" className="text-muted-foreground hover:text-foreground">Video Converter</Link></li>
                                <li><Link href="/search?q=pdf merger" className="text-muted-foreground hover:text-foreground">PDF Merger</Link></li>
                                <li><Link href="/search?q=text counter" className="text-muted-foreground hover:text-foreground">Text Counter</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Categories</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/search?category=image" className="text-muted-foreground hover:text-foreground">Image Tools</Link></li>
                                <li><Link href="/search?category=video" className="text-muted-foreground hover:text-foreground">Video Tools</Link></li>
                                <li><Link href="/search?category=audio" className="text-muted-foreground hover:text-foreground">Audio Tools</Link></li>
                                <li><Link href="/search?category=pdf" className="text-muted-foreground hover:text-foreground">PDF Tools</Link></li>
                                <li><Link href="/search?" className="text-muted-foreground hover:text-foreground">Other Tools</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
                                <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                                <li><Link href="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
                                <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                        <p>&copy; 2025 30tools.com - All rights reserved. Made with ❤️ for the web.</p>
                    </div>
                    <a href="https://visitorbadge.io/status?path=https%3A%2F%2F30tools.com%2F"><img src="https://api.visitorbadge.io/api/combined?path=https%3A%2F%2F30tools.com%2F&countColor=%23263759&style=flat-square" /></a>
                </div>
            </footer>
        </div>
    );
}
