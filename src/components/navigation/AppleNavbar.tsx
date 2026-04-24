"use client";

import { Github, LayoutGrid, Search, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import * as React from "react";
import { useEffect, useState, Suspense } from "react";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Input } from "@/components/ui/input";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
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
		<form onSubmit={handleSearch} className="relative w-full max-w-sm group hidden md:block">
			{/* <Search className="absolute left-3  h-4 w-4 text-muted-foreground group-focus-within:text-foreground transition-colors" /> */}
			<Input
				type="text"
				placeholder="Search tools... (⌘K)"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				className="bg-muted border-transparent text-foreground placeholder:text-muted-foreground h-9 pl-9 pr-4 rounded-none focus-visible:ring-1 focus-visible:ring-ring transition-all w-full md:w-[200px] lg:w-[300px]"
			/>
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

	const navLinks = [
		{ name: "All Tools", href: STATIC_ROUTES.SEARCH },
		{ name: "Image", href: `${STATIC_ROUTES.SEARCH}?category=image` },
		{ name: "PDF", href: `${STATIC_ROUTES.SEARCH}?category=pdf` },
		{ name: "Video", href: `${STATIC_ROUTES.SEARCH}?category=video` },
	];

	return (
		<TooltipProvider>
			<header 
				className={cn(
					"sticky top-0 z-50 w-full h-16 transition-all duration-300 border-b",
					isScrolled 
						? "bg-background/80 backdrop-blur-md border-border" 
						: "bg-background border-transparent"
				)}
			>
				<div className="container mx-auto h-full flex items-center justify-between px-4 max-w-7xl">
					{/* Left: Logo & Nav */}
					<div className="flex items-center gap-8">
						<Link
							href={STATIC_ROUTES.HOME}
							className="flex items-center gap-2 hover:opacity-80 transition-opacity"
						>
							<span className="text-xl font-bold tracking-tight text-foreground">
								30tools
							</span>
						</Link>

						{/* <nav className="hidden lg:flex items-center gap-6">
							{navLinks.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
								>
									{link.name}
								</Link>
							))}
						</nav> */}
					</div>

					{/* Center: Search */}
					<Suspense fallback={<div className="w-[300px] h-9 bg-muted rounded-none hidden md:block" />}>
						<SearchInput />
					</Suspense>

					{/* Right: Actions */}
					<div className="flex items-center gap-2 md:gap-4">
						<div className="hidden sm:flex items-center gap-2">
							<ThemeToggle />

							<Tooltip>
								<TooltipTrigger asChild>
									<a
										href="https://github.com/sh20raj/30tools"
										target="_blank"
										rel="noopener noreferrer"
										className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-none transition-all"
										aria-label="GitHub Repository"
									>
										<Github className="h-5 w-5" />
									</a>
								</TooltipTrigger>
								<TooltipContent>GitHub</TooltipContent>
							</Tooltip>

							<Tooltip>
								<TooltipTrigger asChild>
									<Link
										href={STATIC_ROUTES.SEARCH}
										className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-none transition-all"
										aria-label="Browse all tools"
									>
										<LayoutGrid className="h-5 w-4" />
									</Link>
								</TooltipTrigger>
								<TooltipContent>Browse All</TooltipContent>
							</Tooltip>
						</div>

						{/* Mobile Menu Button */}
						<button 
							className="p-2 text-muted-foreground hover:text-foreground md:hidden rounded-none"
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						>
							{mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{mobileMenuOpen && (
					<div className="absolute top-16 left-0 w-full bg-background border-b border-border md:hidden animate-in slide-in-from-top duration-300">
						<div className="flex flex-col p-4 gap-4">
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
									className="bg-muted border-transparent text-foreground pl-9 w-full rounded-none"
								/>
							</form>
							{navLinks.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									className="text-lg font-medium text-muted-foreground hover:text-foreground py-2"
									onClick={() => setMobileMenuOpen(false)}
								>
									{link.name}
								</Link>
							))}
							<div className="flex items-center gap-4 py-2 border-t border-border mt-2 pt-4">
								<ThemeToggle />
								<a href="https://github.com/sh20raj/30tools" className="text-muted-foreground">GitHub</a>
							</div>
						</div>
					</div>
				)}
			</header>
		</TooltipProvider>
	);
}
