import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { cn } from "@/lib/utils";
import RelatedTools from "./RelatedTools";

interface ToolLayoutProps {
	toolId: string; // ID from tools.json to fetch metadata
	title: string;
	description: string;
	children: React.ReactNode; // Content: Controls + Output
	controls?: React.ReactNode; // Controls specifically (for mobile sidebar/accordion)
	category?: {
		name: string;
		slug: string;
	};
}

export default function ToolLayout({
	toolId,
	title,
	description,
	children,
	controls,
	category,
}: ToolLayoutProps) {
	return (
		<div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl animate-in">
			{/* Breadcrumbs */}
			<nav
				aria-label="Breadcrumb"
				className="mb-8 text-[12px] text-[#1d1d1f]/60 dark:text-white/60"
			>
				<ol className="flex items-center gap-2">
					<li>
						<Link
							href="/"
							className="hover:text-[#0071e3] transition-colors flex items-center gap-1"
						>
							<Home className="w-3 h-3" /> Home
						</Link>
					</li>
					<ChevronRight className="w-3 h-3 opacity-40" />
					{category && (
						<>
							<li>
								<Link
									href={`/search?category=${category.slug}`}
									className="hover:text-[#0071e3] transition-colors"
								>
									{category.name}
								</Link>
							</li>
							<ChevronRight className="w-3 h-3 opacity-40" />
						</>
					)}
					<li
						aria-current="page"
						className="font-medium text-[#1d1d1f] dark:text-white truncate max-w-[200px]"
					>
						{title}
					</li>
				</ol>
			</nav>

			{/* Hero Section - Compact */}
			<header className="mb-12 md:mb-16 max-w-4xl">
				<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] dark:text-white mb-6">
					{title}
				</h1>
				<p className="text-xl text-[#1d1d1f]/60 dark:text-white/60 leading-relaxed font-normal">
					{description}
				</p>
			</header>

			{/* Main Layout: 2 Columns on Desktop, Stacked on Mobile */}
			<div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 relative items-start">
				{/* Left Column: Controls (Sticky on Desktop) */}
				{controls && (
					<aside className="md:col-span-4 lg:col-span-3 space-y-8">
						<div className="md:sticky md:top-24 space-y-8">
							<div className="bg-white dark:bg-[#1d1d1f] border border-black/5 dark:border-white/5 rounded-xl p-6 shadow-sm">
								<h2 className="text-lg font-semibold mb-6 flex items-center gap-2 tracking-tight">
									Controls
								</h2>
								<div className="space-y-4">
									{controls}
								</div>
							</div>
						</div>
					</aside>
				)}

				{/* Right Column: Output / Main Interface */}
				<main
					className={cn(
						"space-y-16",
						controls ? "md:col-span-8 lg:col-span-9" : "col-span-12",
					)}
				>
					<div className="min-h-[400px] bg-white dark:bg-[#1d1d1f] rounded-xl border border-black/5 dark:border-white/5 p-4 md:p-8 shadow-sm">
						{children}
					</div>

					{/* Related Tools Section */}
					<section className="border-t border-black/5 dark:border-white/5 pt-16">
						<h2 className="text-3xl font-semibold tracking-tight mb-8">Related Tools</h2>
						<RelatedTools
							currentToolId={toolId}
							categorySlug={category?.slug}
						/>
					</section>
				</main>
			</div>
		</div>
	);
}
