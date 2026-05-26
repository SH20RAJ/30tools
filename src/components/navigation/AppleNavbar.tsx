"use client";

import { Github, LayoutGrid, Search, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import * as React from "react";
import { useEffect, useState, Suspense } from "react";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { AuthButton } from "./AuthButton";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { STATIC_ROUTES } from "@/lib/tools";

function SearchInput() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [query, setQuery] = useState(searchParams.get("q") || "");

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		if (query.trim()) {
			router.push(`${STATIC_ROUTES.SEARCH}?q=${encodeURIComponent(query)}`);
		} else {
			router.push(STATIC_ROUTES.SEARCH);
		}
	};

	return (
		<form onSubmit={handleSearch} className="relative w-full max-w-xs group hidden md:block">
			<div className="relative flex items-center">
				<Search className="absolute left-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
				<Input
					type="text"
					placeholder="Search tools... (⌘K)"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					className="bg-muted/40 border-border/40 text-foreground placeholder:text-muted-foreground/60 h-9 pl-9 pr-4 rounded-none focus-visible:ring-1 focus-visible:ring-primary/20 transition-all w-full"
				/>
			</div>
		</form>
	);
}

export function AppleNavbar() {
	const router = useRouter();
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};
		window.addEventListener("scroll", handleScroll);
		
		const handleKeyDown = (e: KeyboardEvent) => {
			if ((e.metaKey || e.ctrlKey) && e.key === "k") {
				e.preventDefault();
				const searchInput = document.querySelector('input[placeholder*="Search"]') as HTMLInputElement;
				if (searchInput) searchInput.focus();
				else router.push(STATIC_ROUTES.SEARCH);
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		
		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [router]);

	const categories = [
		{ name: "Image", href: `${STATIC_ROUTES.SEARCH}?category=image` },
		{ name: "PDF", href: `${STATIC_ROUTES.SEARCH}?category=pdf` },
		{ name: "Video", href: `${STATIC_ROUTES.SEARCH}?category=video` },
		{ name: "Developer", href: `${STATIC_ROUTES.SEARCH}?category=developer` },
	];

	return (
		<header 
			className={cn(
				"sticky top-0 z-50 w-full h-16 transition-all duration-300 border-b",
				isScrolled 
					? "bg-background/80 backdrop-blur-md border-border/80 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)]" 
					: "bg-background border-transparent"
			)}
		>
			<div className="container mx-auto h-full flex items-center justify-between px-4 max-w-7xl">
				{/* Left: Brand Logo & Navigation */}
				<div className="flex items-center gap-8">
					<Link
						href={STATIC_ROUTES.HOME}
						className="flex items-center gap-2 group"
					>
						<span className="text-xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/75 group-hover:to-primary transition-all duration-300">
							30tools
						</span>
					</Link>

					{/* Navigation Links */}
					<nav className="hidden lg:flex items-center gap-5">
						{categories.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className="text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors hover:scale-105 duration-200"
							>
								{link.name}
							</Link>
						))}
					</nav>
				</div>

				{/* Center: Clean Search Bar */}
				<Suspense fallback={<div className="hidden md:block w-64 h-9 bg-muted/40 rounded-none animate-pulse" />}>
					<SearchInput />
				</Suspense>

				{/* Right: Actions */}
				<div className="flex items-center gap-3">
					<div className="hidden sm:flex items-center gap-3">
						<ThemeToggle />

						<a
							href="https://github.com/sh20raj/30tools"
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted/40 rounded-none transition-all flex items-center gap-2 border border-transparent hover:border-border/30"
							aria-label="GitHub Repository"
						>
							<Github className="h-4 w-4" />
							<span className="text-[10px] font-bold uppercase tracking-tighter hidden xl:block">GitHub</span>
						</a>

						<Link
							href={STATIC_ROUTES.SEARCH}
							className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted/40 rounded-none transition-all border border-transparent hover:border-border/30"
							aria-label="Browse all tools"
						>
							<LayoutGrid className="h-4 w-4" />
						</Link>

						<Suspense fallback={<div className="h-9 w-20 bg-muted/40 rounded-none" />}>
							<AuthButton />
						</Suspense>
					</div>

					{/* Mobile Menu Button */}
					<button 
						className="p-2 text-muted-foreground hover:text-foreground md:hidden rounded-none hover:bg-muted/40 transition-colors"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						aria-label="Toggle menu"
					>
						{mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
					</button>
				</div>
			</div>

			{/* Mobile Dropdown Menu */}
			{mobileMenuOpen && (
				<div className="absolute top-16 left-0 w-full bg-background/95 backdrop-blur-lg border-b border-border md:hidden animate-in slide-in-from-top duration-300">
					<div className="flex flex-col p-5 gap-4">
						<form 
							onSubmit={(e) => {
								e.preventDefault();
								const q = (e.currentTarget.elements.namedItem("q") as HTMLInputElement).value;
								router.push(`${STATIC_ROUTES.SEARCH}?q=${encodeURIComponent(q)}`);
								setMobileMenuOpen(false);
							}}
							className="relative"
						>
							<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
							<Input
								name="q"
								placeholder="Search tools..."
								className="bg-muted/60 border-transparent text-foreground pl-9 w-full rounded-none"
							/>
						</form>
						
						<div className="flex flex-col gap-2">
							{categories.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									className="text-sm font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground py-2 border-b border-border/20"
									onClick={() => setMobileMenuOpen(false)}
								>
									{link.name}
								</Link>
							))}
						</div>

						<div className="flex items-center justify-between gap-4 py-2 border-t border-border/40 mt-2 pt-4">
							<div className="flex items-center gap-3">
								<ThemeToggle />
								<a href="https://github.com/sh20raj/30tools" className="text-sm text-muted-foreground hover:text-foreground">GitHub</a>
							</div>
							<Suspense fallback={<div className="h-9 w-20 bg-muted/40 rounded-none" />}>
								<AuthButton />
							</Suspense>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
