"use client";

import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { LanguageSelector } from "@/components/shared/LanguageSelector";
import { getRouteById, STATIC_ROUTES } from "@/lib/tools";

const languages = [
	{ name: "English", code: "en" },
	{ name: "Español", code: "es" },
	{ name: "Français", code: "fr" },
	{ name: "Deutsch", code: "de" },
	{ name: "हिन्दी", code: "hi" },
	{ name: "Indonesian", code: "id" },
	{ name: "Italiano", code: "it" },
	{ name: "日本語", code: "ja" },
	{ name: "한국어", code: "ko" },
	{ name: "Português", code: "pt" },
	{ name: "Русский", code: "ru" },
	{ name: "Türkçe", code: "tr" },
	{ name: "Tiếng Việt", code: "vi" },
	{ name: "中文", code: "zh" },
	{ name: "Polski", code: "pl" },
];

interface CategoryItem {
	label: string;
	href: string;
}

export function AppleFooter({ categories = [] }: { categories?: CategoryItem[] }) {
	const footerNav = [
		{ name: "About", href: getRouteById("about") },
		{ name: "Privacy Policy", href: getRouteById("privacy") },
		{ name: "Terms", href: getRouteById("terms") },
		{ name: "Contact", href: getRouteById("contact") },
	];

	return (
		<footer className="bg-[#f5f5f7] dark:bg-[#161617] text-[#1d1d1f] dark:text-[#f5f5f7] pt-16 pb-8 border-t border-black/5 dark:border-white/5">
			<div className="container mx-auto px-4 max-w-5xl">
				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
					<div className="col-span-2 lg:col-span-1">
						<Link href={STATIC_ROUTES.HOME} className="text-lg font-semibold tracking-tight mb-4 block">
							30tools
						</Link>
						<p className="text-[12px] leading-relaxed opacity-90 max-w-xs">
							200+ free tools for creators, developers, and professionals. 
							Fast, secure, and private.
						</p>
					</div>

					<div>
						<h4 className="text-[12px] font-semibold mb-4">Categories</h4>
						<ul className="space-y-2">
							{categories.slice(0, 6).map((item) => (
								<li key={item.label}>
									<Link href={item.href} className="text-[12px] opacity-90 hover:opacity-100 transition-opacity">
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="text-[12px] font-semibold mb-4">Company</h4>
						<ul className="space-y-2">
							{footerNav.map((item) => (
								<li key={item.name}>
									<Link href={item.href} className="text-[12px] opacity-90 hover:opacity-100 transition-opacity">
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="text-[12px] font-semibold mb-4 text-primary">Open Source</h4>
						<ul className="space-y-2">
							<li>
								<a href="https://github.com/sh20raj/30tools" target="_blank" rel="noopener noreferrer" className="text-[12px] opacity-90 hover:opacity-100 transition-opacity flex items-center gap-1 group">
									<Github className="h-3 w-3 group-hover:text-primary" /> GitHub Repository <ArrowUpRight className="h-3 w-3 opacity-50" />
								</a>
							</li>
							<li>
								<a href="https://github.com/sh20raj/30tools/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="text-[12px] opacity-90 hover:opacity-100 transition-opacity flex items-center gap-1">
									Contribute & Build <ArrowUpRight className="h-3 w-3 opacity-50" />
								</a>
							</li>
							<li>
								<a href="https://github.com/sh20raj/30tools/issues" target="_blank" rel="noopener noreferrer" className="text-[12px] opacity-90 hover:opacity-100 transition-opacity flex items-center gap-1">
									Report an Issue <ArrowUpRight className="h-3 w-3 opacity-50" />
								</a>
							</li>
						</ul>
					</div>

					<div className="hidden lg:block">
						<h4 className="text-[12px] font-semibold mb-4">Language</h4>
						<LanguageSelector languages={languages} />
					</div>
				</div>

				<div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
					<p className="text-[12px] opacity-80">
						Copyright © 2026 30tools Inc. All rights reserved.
					</p>
					<div className="flex flex-col md:flex-row items-center gap-6">
						<div className="flex gap-6 opacity-90">
							<Link href={getRouteById("privacy")} className="text-[12px] hover:underline underline-offset-4">Privacy Policy</Link>
							<Link href={getRouteById("terms")} className="text-[12px] hover:underline underline-offset-4">Terms of Use</Link>
							<Link href={getRouteById("contact")} className="text-[12px] hover:underline underline-offset-4">Contact</Link>
						</div>
						<a
							href="https://visitorbadge.io/status?path=https%3A%2F%2F30tools.com%2F"
							aria-label="Visitor Badge"
							className="block hover:opacity-80 transition-opacity"
						>
							<img
								src="https://api.visitorbadge.io/api/combined?path=https%3A%2F%2F30tools.com%2F&countColor=%23263759&style=flat-square"
								alt="Visitor badge"
								width="120"
								height="20"
								loading="lazy"
							/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
