"use client";

import { ArrowUpRight, Facebook, Github, Twitter } from "lucide-react";
import Link from "next/link";
import { GoogleLogo } from "@/components/shared/GoogleLogo";
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

export function GoogleFooter() {
	const categories = Object.entries(toolsData.categories || {}).map(
		([key, cat]) => ({
			label: cat.name,
			href: `/search?category=${key}`,
		}),
	);

	const youtubeTools = [
		{ label: "YouTube Tag Extractor", href: "/youtube-tag-extractor" },
		{ label: "YouTube Tag Generator", href: "/youtube-tag-generator" },
		{ label: "YouTube Hashtag Extractor", href: "/youtube-hashtag-extractor" },
		{ label: "YouTube Hashtag Generator", href: "/youtube-hashtag-generator" },
		{ label: "YouTube Title Extractor", href: "/youtube-title-extractor" },
		{ label: "YouTube Title Generator", href: "/youtube-title-generator" },
		{ label: "YouTube Video Statistics", href: "/youtube-video-statistics" },
	];

	const trendingTools = [
		{ label: "Text Repeater", href: "/text-repeater" },
		{ label: "Decimal to HEX", href: "/decimal-to-hex" },
		{ label: "Domain to IP", href: "/domain-to-ip" },
		{ label: "Word to Number", href: "/word-to-number" },
		{ label: "JSON Validator", href: "/json-validator" },
		{ label: "Credit Card Validator", href: "/credit-card-validator" },
		{ label: "Case Converter", href: "/case-converter" },
	];

	const footerNav = [
		{ name: "About Us", href: "/about" },
		{ name: "Privacy Policy", href: "/privacy" },
		{ name: "Terms of Service", href: "/terms" },
		{ name: "Contact Us", href: "/contact" },
	];

	return (
		<footer className="bg-card border-t border-border mt-auto pt-16 pb-8">
			<div className="container mx-auto px-6 max-w-7xl">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
					{/* Brand Column */}
					<div className="lg:col-span-3">
						<div className="mb-6">
							<GoogleLogo />
						</div>
						<p className="text-sm text-muted-foreground leading-relaxed mb-8">
							30Tools provides over 200 free tools for SEO experts, developers,
							students, and writers. Everything you need to process files,
							optimize content, and streamline your workflow — all for free.
						</p>

						<h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">
							Company
						</h4>
						<ul className="space-y-3 mb-8">
							{footerNav.map((item) => (
								<li key={item.name}>
									<Link
										href={item.href}
										className="text-sm text-muted-foreground hover:text-primary transition-colors no-underline"
									>
										{item.name}
									</Link>
								</li>
							))}
							<li>
								<a
									href="https://github.com/sh20raj/30tools"
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm text-muted-foreground hover:text-primary transition-colors no-underline flex items-center gap-1"
								>
									Open Source <ArrowUpRight className="w-3 h-3" />
								</a>
							</li>
						</ul>

						<div className="flex items-center gap-4">
							<a
								href="#"
								className="text-muted-foreground hover:text-primary transition-colors"
							>
								<Facebook className="w-5 h-5" />
							</a>
							<a
								href="#"
								className="text-muted-foreground hover:text-primary transition-colors"
							>
								<Twitter className="w-5 h-5" />
							</a>
							<a
								href="https://github.com/sh20raj/30tools"
								className="text-muted-foreground hover:text-primary transition-colors"
							>
								<Github className="w-5 h-5" />
							</a>
						</div>
					</div>

					{/* Categories Column */}
					<div className="lg:col-span-3 lg:pl-8">
						<h4 className="text-sm font-bold text-foreground mb-6 uppercase tracking-wider">
							Tools Categories
						</h4>
						<ul className="grid grid-cols-1 gap-3">
							{categories.slice(0, 10).map((item) => (
								<li key={item.label}>
									<Link
										href={item.href}
										className="text-sm text-muted-foreground hover:text-primary transition-colors no-underline"
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>

						<h4 className="text-sm font-bold text-foreground mt-8 mb-6 uppercase tracking-wider">
							Resources
						</h4>
						<ul className="space-y-3">
							<li>
								<Link
									href="/blog"
									className="text-sm text-muted-foreground hover:text-primary transition-colors no-underline"
								>
									Blog & Guides
								</Link>
							</li>
							<li>
								<Link
									href="/other-tools"
									className="text-sm text-muted-foreground hover:text-primary transition-colors no-underline"
								>
									All Platforms
								</Link>
							</li>
						</ul>
					</div>

					{/* YouTube Tools Column */}
					<div className="lg:col-span-3">
						<h4 className="text-sm font-bold text-foreground mb-6 uppercase tracking-wider">
							Our YouTube Tools
						</h4>
						<ul className="space-y-3">
							{youtubeTools.map((item) => (
								<li key={item.label}>
									<Link
										href={item.href}
										className="text-sm text-muted-foreground hover:text-primary transition-colors no-underline"
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Trending Tools Column */}
					<div className="lg:col-span-3">
						<h4 className="text-sm font-bold text-foreground mb-6 uppercase tracking-wider">
							Other Trending Tools
						</h4>
						<ul className="space-y-3">
							{trendingTools.map((item) => (
								<li key={item.label}>
									<Link
										href={item.href}
										className="text-sm text-muted-foreground hover:text-primary transition-colors no-underline"
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
					<p className="text-xs text-muted-foreground font-medium">
						© 2026 30tools.com — All rights reserved. Made for the web.
					</p>

					<div className="flex flex-wrap items-center justify-center gap-6">
						<LanguageSelector languages={languages} />
						<div className="flex items-center gap-4">
							<Link
								href="/privacy"
								className="text-xs text-muted-foreground hover:text-foreground no-underline font-medium"
							>
								Privacy
							</Link>
							<Link
								href="/terms"
								className="text-xs text-muted-foreground hover:text-foreground no-underline font-medium"
							>
								Terms
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
