"use client";

import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { LanguageSelector } from "@/components/shared/LanguageSelector";
import toolsData from "@/constants/tools.json";

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

export function AppleFooter() {
	const categories = Object.entries(toolsData.categories || {}).map(
		([key, cat]) => ({
			label: cat.name,
			href: `/search?category=${key}`,
		}),
	);

	const footerNav = [
		{ name: "About", href: "/about" },
		{ name: "Privacy Policy", href: "/privacy" },
		{ name: "Terms", href: "/terms" },
		{ name: "Contact", href: "/contact" },
	];

	return (
		<footer className="bg-[#f5f5f7] dark:bg-[#161617] text-[#1d1d1f] dark:text-[#f5f5f7] pt-16 pb-8 border-t border-black/5 dark:border-white/5">
			<div className="container mx-auto px-4 max-w-5xl">
				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
					<div className="col-span-2 lg:col-span-1">
						<Link href="/" className="text-lg font-semibold tracking-tight mb-4 block">
							30tools
						</Link>
						<p className="text-[12px] leading-relaxed opacity-60 max-w-xs">
							200+ free tools for creators, developers, and professionals. 
							Fast, secure, and private.
						</p>
					</div>

					<div>
						<h4 className="text-[12px] font-semibold mb-4 opacity-90">Categories</h4>
						<ul className="space-y-2">
							{categories.slice(0, 6).map((item) => (
								<li key={item.label}>
									<Link href={item.href} className="text-[12px] opacity-60 hover:opacity-100 transition-opacity">
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="text-[12px] font-semibold mb-4 opacity-90">Company</h4>
						<ul className="space-y-2">
							{footerNav.map((item) => (
								<li key={item.name}>
									<Link href={item.href} className="text-[12px] opacity-60 hover:opacity-100 transition-opacity">
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="text-[12px] font-semibold mb-4 opacity-90">Developer</h4>
						<ul className="space-y-2">
							<li>
								<a href="https://github.com/sh20raj/30tools" target="_blank" rel="noopener noreferrer" className="text-[12px] opacity-60 hover:opacity-100 transition-opacity flex items-center gap-1">
									GitHub <ArrowUpRight className="h-3 w-3" />
								</a>
							</li>
							<li>
								<Link href="/blog" className="text-[12px] opacity-60 hover:opacity-100 transition-opacity">
									Blog
								</Link>
							</li>
						</ul>
					</div>

					<div className="hidden lg:block">
						<h4 className="text-[12px] font-semibold mb-4 opacity-90">Language</h4>
						<LanguageSelector languages={languages} />
					</div>
				</div>

				<div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
					<p className="text-[12px] opacity-40">
						Copyright © 2026 30tools Inc. All rights reserved.
					</p>
					<div className="flex gap-6 opacity-60">
						<Link href="/privacy" className="text-[12px] hover:underline underline-offset-4">Privacy Policy</Link>
						<Link href="/terms" className="text-[12px] hover:underline underline-offset-4">Terms of Use</Link>
						<Link href="/contact" className="text-[12px] hover:underline underline-offset-4">Contact</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
