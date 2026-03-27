import {
	ArrowRightIcon,
	BracesIcon,
	CodeIcon,
	DownloadIcon,
	FileIcon,
	FileTextIcon,
	Heart,
	ImageIcon,
	LayoutGridIcon,
	MusicIcon,
	PaletteIcon,
	PenToolIcon,
	RefreshCwIcon,
	SearchIcon,
	SettingsIcon,
	ShieldCheckIcon,
	Sparkles,
	StarIcon,
	TypeIcon,
	UsersIcon,
	VideoIcon,
	ZapIcon,
} from "lucide-react";
import Link from "next/link";
import FooterPartners from "@/components/shared/FooterPartners";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import UnstoryOpenmindCTA from "@/components/shared/UnstoryOpenmindCTA";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import toolsData from "@/constants/tools.json";

const TOOL_COUNT = Object.values(toolsData.categories || {}).reduce(
	(total, category) => total + (category.tools?.length || 0),
	0,
);

const CATEGORY_COUNT = Object.keys(toolsData.categories || {}).length;

export const metadata = {
	title: {
		absolute: `30tools - ${TOOL_COUNT}+ Free Online Tools | No Signup Required`,
	},
	description:
		`Efficiently process files with ${TOOL_COUNT}+ free online tools. Image compressor, PDF editor, video downloader, SEO audit, and developer utilities. Fast, secure, and 100% free.`,
	keywords:
		"free online tools, image compressor, pdf merger, youtube downloader, seo toolkit, developer utils, unit converter, base64 encoder, qr code generator, 30tools",
	alternates: {
		canonical: "https://30tools.com",
	},
	openGraph: {
		title: `30tools - ${TOOL_COUNT}+ High-Quality Online Tools`,
		description:
			`Access ${TOOL_COUNT}+ professional-grade tools for free. Fast browser-based processing for images, PDFs, videos, and dev tasks.`,
		url: "https://30tools.com",
		siteName: "30tools",
		type: "website",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "30Tools - Free Online Toolkit",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: `30tools - All-in-One Free Online Toolkit`,
		description:
			`${TOOL_COUNT}+ free tools for designers, developers, and creators. No signup, no ads.`,
		images: ["/og-image.jpg"],
		creator: "@30tools",
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "CollectionPage",
	name: `30tools - ${TOOL_COUNT}+ Free Online Tools`,
	description:
		`Browse ${TOOL_COUNT}+ free online tools across ${CATEGORY_COUNT} categories, including image, PDF, video, SEO, and developer tools.`,
	url: "https://30tools.com",
	isPartOf: {
		"@type": "WebSite",
		name: "30tools",
		url: "https://30tools.com",
	},
	mainEntity: {
		"@type": "ItemList",
		numberOfItems: CATEGORY_COUNT,
		itemListElement: Object.values(toolsData.categories || {})
			.slice(0, 8)
			.map((category, index) => ({
				"@type": "ListItem",
				position: index + 1,
				name: category.name,
				url: `https://30tools.com/${category.slug}`,
			})),
	},
};

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
		RefreshCwIcon,
		DownloadIcon,
		SparklesIcon: Sparkles,
	};

	// Sort categories to prioritize popular ones for the Bento Grid
	// Order: Image, PDF, Video, Downloaders, Utilities, etc.
	const priorityOrder = [
		"image",
		"pdf",
		"video",
		"downloaders",
		"audio",
		"utilities",
		"developer",
		"generators",
		"seo",
	];

	const toolCategories = priorityOrder
		.map((key) => ({ ...toolsData.categories[key], key }))
		.filter((cat) => cat.name) // Ensure category exists
		.map((category) => ({
			...category,
			icon: iconMap[category.icon] || ImageIcon,
		}));

	const quickSearchTags = [
		"image compressor",
		"video downloader",
		"pdf merger",
		"password generator",
		"utm builder",
	];

	const homepageStats = [
		{ label: "Tools Available", value: `${TOOL_COUNT}+`, icon: LayoutGridIcon },
		{ label: "Categories", value: `${CATEGORY_COUNT}`, icon: FileIcon },
		{ label: "Access Model", value: "Free", icon: UsersIcon },
		{ label: "Processing", value: "Browser-based", icon: StarIcon },
	];

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<div className="min-h-screen selection:bg-primary/20 animate-in">
				{/* Header */}
				<header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl supports-backdrop-filter:bg-background/60">
					<div className="container mx-auto px-4 py-4">
						<div className="flex items-center justify-between">
							<div className="flex items-center space-x-3 group cursor-pointer">
								<div className="relative flex items-center justify-center w-10 h-10 bg-linear-to-br from-primary to-blue-600 rounded-xl shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300">
									<ZapIcon className="h-6 w-6 text-white" aria-hidden="true" />
									<div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
								</div>
								<div>
									<div className="text-xl font-bold tracking-tight">
										30tools
									</div>
									<p className="text-xs text-muted-foreground font-medium">
										Free Online Toolkit
									</p>
								</div>
							</div>

							<div className="flex items-center gap-2 sm:gap-4">
								<div className="hidden md:flex items-center gap-1 text-sm font-medium text-muted-foreground">
									<Link
										href="/search"
										className="px-3 py-2 hover:text-foreground transition-colors"
									>
										Tools
									</Link>
									<Link
										href="/blog"
										className="px-3 py-2 hover:text-foreground transition-colors"
									>
										Blog
									</Link>
									<Link
										href="/about"
										className="px-3 py-2 hover:text-foreground transition-colors"
									>
										About
									</Link>
								</div>
								<div className="h-6 w-px bg-border/60 hidden md:block" />
								<ThemeToggle />
								<Link href="/search">
									<Button
										size="sm"
										className="hidden sm:flex rounded-full px-6 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
									>
										Get Started
									</Button>
									<Button size="icon" variant="ghost" className="sm:hidden">
										<SearchIcon className="h-5 w-5" aria-hidden="true" />
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</header>

				<main>
					{/* Modern Minimal Hero Section */}
					<section className="relative pt-20 pb-32 overflow-hidden">
						<div className="container mx-auto px-4 relative z-10 text-center">
							<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50 dark:opacity-20 animate-pulse"></div>
							
							<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 backdrop-blur-md transition-all hover:bg-primary/10 mb-8 animate-in slide-in-from-top-4 duration-1000">
								<span className="relative flex h-2 w-2">
									<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
									<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
								</span>
								<span className="text-sm font-semibold text-primary">
									Updated for 2026: New Tools Added
								</span>
							</div>

							<h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 bg-clip-text text-transparent bg-linear-to-r from-foreground via-foreground/90 to-foreground/70 dark:from-white dark:via-white/90 dark:to-white/70 animate-in fade-in slide-in-from-bottom-4 duration-1000">
								All Your Tools. <br className="hidden sm:block" />
								<span className="text-primary bg-clip-text text-transparent bg-linear-to-r from-primary to-blue-500">One Platform.</span>
							</h1>

							<p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
								Compress images, edit PDFs, download videos, and more.{" "}
								<br className="hidden sm:block" />
								100% free, private, and browser-based.
							</p>

							{/* Search Bar Hero CTA */}
							<div className="max-w-2xl mx-auto mb-12 relative group animate-in zoom-in-95 duration-700">
								<div className="absolute -inset-1 bg-linear-to-r from-primary/20 to-blue-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
								<div className="relative">
									<Link href="/search" className="block">
										<div className="flex items-center h-16 md:h-18 px-8 bg-card/50 backdrop-blur-xl rounded-2xl border border-border/50 shadow-2xl group-hover:border-primary/50 transition-all cursor-text overflow-hidden">
											<div className="absolute left-0 top-0 w-1 h-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
											<SearchIcon
												className="h-6 w-6 text-muted-foreground mr-4 group-hover:text-primary transition-colors"
												aria-hidden="true"
											/>
											<span className="text-muted-foreground text-xl text-left flex-1 font-medium">
												Search {TOOL_COUNT}+ tools...
											</span>
											<div className="hidden md:flex items-center gap-2 p-2 bg-muted/50 rounded-lg text-xs font-bold text-muted-foreground border border-border/50">
												<span className="px-1">⌘</span>
												<span>K</span>
											</div>
										</div>
									</Link>
								</div>
							</div>

							{/* Quick Tags */}
							<div className="flex flex-wrap justify-center gap-3 opacity-90">
								<span className="text-sm text-muted-foreground/60 py-1">
									Popular:
								</span>
								{quickSearchTags.map((tag) => (
									<Link key={tag} href={`/search?q=${encodeURIComponent(tag)}`}>
										<Badge
											variant="secondary"
											className="px-3 py-1 text-sm hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors bg-background/50 border-border/50 backdrop-blur-sm"
										>
											{tag}
										</Badge>
									</Link>
								))}
							</div>

							{/* Stats */}
							<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 mt-16 max-w-4xl mx-auto border-t border-border/40 pt-12">
								{homepageStats.map((stat, i) => (
									<div
										key={i}
										className="flex flex-col items-center gap-1 group"
									>
										<div className="p-3 bg-secondary/50 rounded-full mb-2 group-hover:bg-primary/10 transition-colors">
											<stat.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
										</div>
										<div className="text-2xl font-bold">{stat.value}</div>
										<div className="text-sm text-muted-foreground font-medium">
											{stat.label}
										</div>
									</div>
								))}
							</div>
						</div>
					</section>

					{/* Bento Grid Categories Section */}
					<section className="py-24 bg-muted/30">
						<div className="container mx-auto px-4">
							<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
								<div>
									<h2 className="text-3xl font-bold mb-4">
										Explore Categories
									</h2>
									<p className="text-muted-foreground max-w-xl">
										Everything you need to work with files, media, and data.
										Organized for efficiency.
									</p>
								</div>
								<Link href="/search">
									<Button variant="outline" className="group">
										View All Categories
										<ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
									</Button>
								</Link>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
								{toolCategories.map((category, index) => {
									// Bento Grid Logic: Make first two items span larger if desired,
									// or just use a uniform clean grid. Let's Stick to a clean uniform grid
									// but with "featured" styling for the first few.
									const isFeatured = index < 2;

									return (
										<Link
											key={category.key}
											href={`/search?category=${category.key}`}
											className={`group relative overflow-hidden rounded-3xl border bg-background hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 ${isFeatured ? "md:col-span-2 lg:col-span-2 aspect-[1.5/1]" : "aspect-square"}`}
										>
											<div className="absolute inset-0 bg-linear-to-br from-transparent to-muted/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

											<div className="relative h-full p-8 flex flex-col">
												<div
													className={`mb-auto inline-flex p-3 rounded-2xl bg-secondary/50 w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300`}
												>
													<category.icon
														className="h-6 w-6"
														aria-hidden="true"
													/>
												</div>

												<div className="mt-6">
													<h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
														{category.name}
													</h3>
													<p className="text-muted-foreground line-clamp-2 text-sm">
														{category.description}
													</p>
												</div>

												<div className="mt-6 flex flex-wrap gap-2">
													{category.tools
														?.slice(0, isFeatured ? 5 : 2)
														.map((tool, i) => (
															<span
																key={i}
																className="px-2 py-1 bg-secondary/60 rounded-md text-xs font-medium text-muted-foreground"
															>
																{tool.name}
															</span>
														))}
													{category.tools?.length > (isFeatured ? 5 : 2) && (
														<span className="px-2 py-1 bg-secondary/60 rounded-md text-xs font-medium text-muted-foreground">
															+{category.tools.length - (isFeatured ? 5 : 2)}
														</span>
													)}
												</div>

												{/* Decorative background icon */}
												<category.icon
													className="absolute -bottom-8 -right-8 h-48 w-48 text-muted/20 -rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500 ease-in-out pointer-events-none"
													aria-hidden="true"
												/>
											</div>
										</Link>
									);
								})}
							</div>

							<div className="mt-8 text-center">
								<UnstoryOpenmindCTA />
							</div>
						</div>
					</section>

					{/* Why Choose Us */}
					<section className="py-24">
						<div className="container mx-auto px-4 text-center max-w-3xl">
							<div className="mb-4 inline-block p-2 bg-purple-500/10 rounded-full text-purple-600 dark:text-purple-400">
								<Sparkles className="h-5 w-5" />
							</div>
							<h2 className="text-3xl md:text-4xl font-bold mb-6">
								Designed for Modern Workflow
							</h2>
							<p className="text-lg text-muted-foreground mb-12">
								We believe tools should be fast, beautiful, and respect your
								privacy. That's why 30tools is different.
							</p>

							<div className="grid md:grid-cols-3 gap-8 text-left">
								<div className="p-6 rounded-2xl bg-muted/30 border border-border/50">
									<ShieldCheckIcon className="h-10 w-10 text-green-500 mb-4" />
									<h3 className="text-lg font-bold mb-2">Private by Design</h3>
									<p className="text-muted-foreground text-sm">
										Files never leave your browser for most tools. Server-side
										processing deletes files immediately.
									</p>
								</div>
								<div className="p-6 rounded-2xl bg-muted/30 border border-border/50">
									<ZapIcon className="h-10 w-10 text-blue-500 mb-4" />
									<h3 className="text-lg font-bold mb-2">No Waiting</h3>
									<p className="text-muted-foreground text-sm">
										Instant processing. No queues, no countdown timers, no
										"premium speed" gates.
									</p>
								</div>
								<div className="p-6 rounded-2xl bg-muted/30 border border-border/50">
									<SettingsIcon className="h-10 w-10 text-orange-500 mb-4" />
									<h3 className="text-lg font-bold mb-2">Professional Mode</h3>
									<p className="text-muted-foreground text-sm">
										Advanced settings for power users. Tweak compression ratios,
										formats, and more.
									</p>
								</div>
							</div>
						</div>
					</section>

					{/* Donation / Support Section */}
					<section className="py-24 bg-linear-to-b from-muted/30 to-background overflow-hidden relative">
						<div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

						<div className="container mx-auto px-4">
							<div className="max-w-4xl mx-auto relative">
								<div className="relative overflow-hidden rounded-[2.5rem] bg-card border border-border shadow-md p-10 md:p-16 text-center text-foreground">
									<div className="relative z-10">
										<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-indigo-200 mb-6">
											<Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
											<span>Community Supported</span>
										</div>

										<h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
											Keep the internet free.
										</h2>

										<p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
											30tools serves millions of students and creators for free.
											No ads, no paywalls. Your support keeps our servers
											running and the code flowing.
										</p>

										<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
											<a
												href="https://payments.cashfree.com/forms/30tools"
												target="_blank"
												rel="noopener noreferrer"
												className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-2xl shadow-sm transition-all duration-300 hover:scale-105"
											>
												<span>Donate to Support</span>
												<ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
											</a>
										</div>
										<p className="mt-8 text-sm text-muted-foreground">
											Every donation goes directly to server costs and coffee ☕️
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>
				</main>

				{/* Footer */}
				<footer className="border-t bg-muted/20 pt-16 pb-8">
					<div className="container mx-auto px-4">
						<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
							<div className="col-span-2 lg:col-span-2 space-y-4">
								<div className="flex items-center space-x-2">
									<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
										<ZapIcon className="h-5 w-5 text-primary-foreground" />
									</div>
									<h3 className="font-bold text-xl">30tools</h3>
								</div>
								<p className="text-sm text-muted-foreground max-w-xs">
									The modern, privacy-first toolkit for the web generation.
									Built to save you time, not track your data.
								</p>
								<div className="flex gap-4 pt-2">
									{/* Social placeholders */}
									<div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors cursor-pointer">
										<span className="sr-only">Twitter</span>
										<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
											<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
										</svg>
									</div>
								</div>
							</div>

							<div>
								<h4 className="font-semibold mb-4">Popular</h4>
								<ul className="space-y-3 text-sm text-muted-foreground">
									<li>
										<Link
											href="/image-compressor"
											className="hover:text-primary transition-colors"
										>
											Image Compressor
										</Link>
									</li>
									<li>
										<Link
											href="/youtube-downloader"
											className="hover:text-primary transition-colors"
										>
											YouTube Downloader
										</Link>
									</li>
									<li>
										<Link
											href="/pdf-merger"
											className="hover:text-primary transition-colors"
										>
											PDF Merger
										</Link>
									</li>
									<li>
										<Link
											href="/password-generator"
											className="hover:text-primary transition-colors"
										>
											Password Generator
										</Link>
									</li>
								</ul>
							</div>

							<div>
								<h4 className="font-semibold mb-4">Explore</h4>
								<ul className="space-y-3 text-sm text-muted-foreground">
									<li>
										<Link
											href="/search?category=image"
											className="hover:text-primary transition-colors"
										>
											Image Tools
										</Link>
									</li>
									<li>
										<Link
											href="/search?category=video"
											className="hover:text-primary transition-colors"
										>
											Video Tools
										</Link>
									</li>
									<li>
										<Link
											href="/search?category=pdf"
											className="hover:text-primary transition-colors"
										>
											PDF Tools
										</Link>
									</li>
									<li>
										<Link
											href="/search?category=developer"
											className="hover:text-primary transition-colors"
										>
											Developer Tools
										</Link>
									</li>
								</ul>
							</div>

							<div>
								<h4 className="font-semibold mb-4">Company</h4>
								<ul className="space-y-3 text-sm text-muted-foreground">
									<li>
										<Link
											href="/about"
											className="hover:text-primary transition-colors"
										>
											About Us
										</Link>
									</li>
									<li>
										<Link
											href="/blog"
											className="hover:text-primary transition-colors"
										>
											Blog
										</Link>
									</li>
									<li>
										<Link
											href="/privacy"
											className="hover:text-primary transition-colors"
										>
											Privacy Policy
										</Link>
									</li>
									<li>
										<Link
											href="/contact"
											className="hover:text-primary transition-colors"
										>
											Contact
										</Link>
									</li>
								</ul>
							</div>
						</div>

						<div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
							<p>&copy; 2026 30tools.com. All rights reserved.</p>
							<div className="flex items-center gap-6">
								<FooterPartners />
							</div>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
}
