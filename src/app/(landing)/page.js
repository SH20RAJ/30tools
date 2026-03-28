import {
	ArrowRightIcon,
	Heart,
	ImageIcon,
	LayoutGridIcon,
	RefreshCwIcon,
	SearchIcon,
	ShieldCheckIcon,
	StarIcon,
	ZapIcon,
} from "lucide-react";
import Link from "next/link";
import { GoogleNavbar } from "@/components/navigation/GoogleNavbar";
import { GoogleHero } from "@/components/landing/GoogleHero";
import { GoogleStats } from "@/components/landing/GoogleStats";
import { GoogleFooter } from "@/components/footers/GoogleFooter";
import { Button } from "@/components/ui/button";
import toolsData from "@/constants/tools.json";
import translateEngine from "@/lib/translate";

const TOOL_COUNT = Object.values(toolsData.categories || {}).reduce(
	(total, category) => total + (category.tools?.length || 0),
	0,
);

const CATEGORY_COUNT = Object.keys(toolsData.categories || {}).length;

export async function generateMetadata({ searchParams }) {
	const params = await searchParams;
	const lang = params.lang || "en";
	
	const title = await translateEngine.translate(`30tools - ${TOOL_COUNT}+ Free Online Tools | No Signup Required`, lang);
	const description = await translateEngine.translate(`Efficiently process files with ${TOOL_COUNT}+ free online tools. Image compressor, PDF editor, video downloader, SEO audit, and developer utilities. Fast, secure, and 100% free.`, lang);

	return {
		title: {
			absolute: title,
		},
		description: description,
		alternates: {
			canonical: `https://30tools.com${lang !== 'en' ? `?lang=${lang}` : ''}`,
		},
	};
}

export default async function LandingPage({ searchParams }) {
	const params = await searchParams;
	const lang = params.lang || "en";

	// Translate static content
	const heroTitle = await translateEngine.translate("Everything you need in one place.", lang);
	const heroSubtitle = await translateEngine.translate("Explore our comprehensive suite of tools, from AI-powered image editing to professional developer utilities.", lang);
	const viewAllText = await translateEngine.translate("View All Categories", lang);
	
	const privacyTitle = await translateEngine.translate("Your privacy is our number one priority.", lang);
	const donateTitle = await translateEngine.translate("Built for the internet, by the internet.", lang);
	const donateSubtitle = await translateEngine.translate("30tools is a free project. We don't run ads or sell your data. If you find these tools helpful, consider supporting our server costs.", lang);
	const supportButtonText = await translateEngine.translate("Support 30tools", lang);

	const iconMap = {
		ImageIcon,
		LayoutGridIcon,
		SearchIcon,
		StarIcon,
		UsersIcon: StarIcon, // Fallback
		ShieldCheckIcon,
		ZapIcon,
	};

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

	// Localize Tool Categories
	const toolCategories = await Promise.all(priorityOrder
		.map(async (key) => {
			const cat = toolsData.categories[key];
			if (!cat) return null;
			
			return {
				...cat,
				key,
				name: await translateEngine.translate(cat.name, lang),
				description: await translateEngine.translate(cat.description, lang),
				icon: iconMap[cat.icon] || LayoutGridIcon,
				tools: await Promise.all((cat.tools || []).slice(0, 5).map(async (tool) => ({
					...tool,
					name: await translateEngine.translate(tool.name, lang)
				})))
			};
		}));

	const filteredCategories = toolCategories.filter(Boolean);

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
		{ label: await translateEngine.translate("Tools Available", lang), value: `${TOOL_COUNT}+`, icon: LayoutGridIcon },
		{ label: await translateEngine.translate("Free Forever", lang), value: "100%", icon: StarIcon },
		{ label: await translateEngine.translate("Access Model", lang), value: "Always", icon: ShieldCheckIcon },
	];

	const privacyItems = await Promise.all([
		{ title: "Browser Based", desc: "Most processing happens purely in your browser. Files never even hit our servers.", icon: ZapIcon },
		{ title: "Auto-Deleted", desc: "For tools requiring our servers, files are deleted instantly after processing.", icon: RefreshCwIcon },
		{ title: "No Signups", desc: "No email, no login, no tracking. Just free tools accessible to everyone.", icon: StarIcon }
	].map(async (item) => ({
		...item,
		title: await translateEngine.translate(item.title, lang),
		desc: await translateEngine.translate(item.desc, lang)
	})));

	return (
		<div className="min-h-screen flex flex-col bg-background selection:bg-primary/10">
			<GoogleNavbar />

			<main className="flex-1">
				<GoogleHero 
					toolCount={TOOL_COUNT} 
					quickSearchTags={quickSearchTags} 
					lang={lang}
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
							<div className="max-w-xl text-left">
								<h2 className="text-3xl font-medium tracking-tight mb-4 text-[#3c4043] dark:text-foreground">
									{heroTitle}
								</h2>
								<p className="text-muted-foreground text-[16px]">
									{heroSubtitle}
								</p>
							</div>
							<Link href="/search">
								<Button variant="outline" className="rounded-full border-[#dadce0] hover:bg-secondary">
									{viewAllText}
									<ArrowRightIcon className="ml-2 h-4 w-4" />
								</Button>
							</Link>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
							{filteredCategories.map((category, index) => {
								const isFeatured = index < 2;

								return (
									<Link
										key={category.key}
										href={`/search?category=${category.key}&lang=${lang}`}
										className={`group relative overflow-hidden rounded-[24px] border border-border bg-card hover:shadow-lg transition-all duration-300 ${isFeatured ? "md:col-span-2 lg:col-span-2 aspect-[1.8/1]" : "aspect-square"}`}
									>
										<div className="relative h-full p-8 flex flex-col">
											<div
												className="mb-auto inline-flex p-3 rounded-2xl bg-secondary/50 text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 w-fit"
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
							{privacyTitle}
						</h2>
						<div className="grid md:grid-cols-3 gap-12 text-left mt-12">
							{privacyItems.map((item, i) => (
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
							<h2 className="text-3xl font-medium mb-6">{donateTitle}</h2>
							<p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
								{donateSubtitle}
							</p>
							<a
								href="https://payments.cashfree.com/forms/30tools"
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-secondary font-medium rounded-full hover:shadow-lg transition-all active:scale-95"
							>
								<span>{supportButtonText}</span>
								<Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
							</a>
						</div>
					</div>
				</section>
			</main>

			<GoogleFooter />
		</div>
	);
}
