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
import { GoogleNavbar } from "@/components/navigation/GoogleNavbar";
import { GoogleHero } from "@/components/landing/GoogleHero";
import { GoogleStats } from "@/components/landing/GoogleStats";
import { GoogleFooter } from "@/components/footers/GoogleFooter";
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
			icon: iconMap[category.icon] || LayoutGridIcon,
		}));

	const quickSearchTags = [
		"PDF",
		"Video",
		"Images",
		"SEO",
		"Dev",
		"Generator",
		"QR Code",
		"YouTube",
	];

	const homepageStats = [
		{ label: "Tools Available", value: `${TOOL_COUNT}+`, icon: LayoutGridIcon },
		{ label: "Free Forever", value: "100%", icon: StarIcon },
		{ label: "Happy Users", value: "50k+", icon: UsersIcon },
		{ label: "No Signup", value: "Always", icon: ShieldCheckIcon },
	];

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<div className="min-h-screen flex flex-col bg-background selection:bg-primary/10">
				<GoogleNavbar />

				<main className="flex-1">
					<GoogleHero 
						toolCount={TOOL_COUNT} 
						quickSearchTags={quickSearchTags} 
					/>

					<section className="pb-24">
						<div className="container mx-auto px-4">
							<GoogleStats stats={homepageStats} />
						</div>
					</section>

					{/* Bento Grid Categories Section (Google M3 Cards) */}
					<section className="py-24 bg-secondary/20 dark:bg-muted/5 border-y border-border/40">
						<div className="container mx-auto px-4">
							<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
								<div className="max-w-xl">
									<h2 className="text-3xl font-medium tracking-tight mb-4 text-[#3c4043] dark:text-foreground">
										Everything you need in one place.
									</h2>
									<p className="text-muted-foreground">
										Explore our comprehensive suite of tools, from AI-powered image editing 
										to professional developer utilities.
									</p>
								</div>
								<Link href="/search">
									<Button variant="outline" className="rounded-full border-[#dadce0] hover:bg-secondary">
										View All Categories
										<ArrowRightIcon className="ml-2 h-4 w-4" />
									</Button>
								</Link>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
								{toolCategories.map((category, index) => {
									const isFeatured = index < 2;

									return (
										<Link
											key={category.key}
											href={`/search?category=${category.key}`}
											className={`group relative overflow-hidden rounded-[24px] border border-border bg-card hover:shadow-lg transition-all duration-300 ${isFeatured ? "md:col-span-2 lg:col-span-2 aspect-[1.8/1]" : "aspect-square"}`}
										>
											<div className="relative h-full p-8 flex flex-col">
												<div
													className="mb-auto inline-flex p-3 rounded-2xl bg-secondary/50 text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
												>
													<category.icon className="h-6 w-6" aria-hidden="true" />
												</div>

												<div className="mt-6">
													<h3 className="text-2xl font-semibold mb-2 text-[#3c4043] dark:text-foreground group-hover:text-primary transition-colors">
														{category.name}
													</h3>
													<p className="text-muted-foreground line-clamp-2 text-sm font-normal">
														{category.description}
													</p>
												</div>

												<div className="mt-6 flex flex-wrap gap-2">
													{category.tools?.slice(0, isFeatured ? 5 : 2).map((tool, i) => (
														<span
															key={i}
															className="px-3 py-1 bg-secondary/50 rounded-full text-[11px] font-medium text-muted-foreground border border-transparent group-hover:border-border transition-all"
														>
															{tool.name}
														</span>
													))}
												</div>
											</div>
										</Link>
									);
								})}
							</div>
						</div>
					</section>

					{/* Simple Privacy Promise Section */}
					<section className="py-24 border-b border-border/40">
						<div className="container mx-auto px-4 text-center max-w-4xl">
							<div className="inline-flex p-3 rounded-full bg-blue-500/5 mb-8">
								<ShieldCheckIcon className="h-10 w-10 text-primary" />
							</div>
							<h2 className="text-4xl font-medium tracking-tight mb-8">
								Your privacy is our number one priority.
							</h2>
							<div className="grid md:grid-cols-3 gap-12 text-left mt-12">
								{[
									{ title: "Browser Based", desc: "Most processing happens purely in your browser. Files never even hit our servers.", icon: ZapIcon },
									{ title: "Auto-Deleted", desc: "For tools requiring our servers, files are deleted instantly after processing.", icon: RefreshCwIcon },
									{ title: "No Signups", desc: "No email, no login, no tracking. Just free tools accessible to everyone.", icon: StarIcon }
								].map((item, i) => (
									<div key={i} className="space-y-4">
										<h3 className="text-lg font-bold flex items-center gap-2">
											<item.icon className="h-5 w-5 text-primary" />
											{item.title}
										</h3>
										<p className="text-muted-foreground text-[15px] leading-relaxed">
											{item.desc}
										</p>
									</div>
								))}
							</div>
						</div>
					</section>

					{/* Simple Community Donate */}
					<section className="py-24 bg-muted/5">
						<div className="container mx-auto px-4">
							<div className="max-w-4xl mx-auto rounded-[32px] border border-border bg-card p-12 text-center shadow-xs">
								<h2 className="text-3xl font-medium mb-6">Built for the internet, by the internet.</h2>
								<p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
									30tools is a free project. We don't run ads or sell your data. 
									If you find these tools helpful, consider supporting our server costs.
								</p>
								<a
									href="https://payments.cashfree.com/forms/30tools"
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-secondary font-medium rounded-full hover:shadow-lg transition-all active:scale-95"
								>
									<span>Support 30tools</span>
									<Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
								</a>
							</div>
						</div>
					</section>
				</main>

				<GoogleFooter />
			</div>
		</>
	);
}
