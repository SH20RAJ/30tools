"use client";

import { Github, LayoutGrid, Search, HelpCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export function AppleNavbar() {
	const router = useRouter();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		const handleKeyDown = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key === "k") {
				e.preventDefault();
				router.push("/search");
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [router]);

	const navLinks = [
		{ name: "Image", href: "/image-compressor" },
		{ name: "PDF", href: "/pdf-to-word" },
		{ name: "Video", href: "/video-downloader" },
		{ name: "Developer", href: "/json-formatter" },
		{ name: "SEO", href: "/seo-audit-tool" },
	];

	return (
		<TooltipProvider>
			<header className="sticky top-0 z-50 w-full h-[48px] apple-glass text-white border-b border-white/10 transition-all duration-300">
				<div className="container mx-auto h-full flex items-center justify-between px-4 max-w-5xl">
					{/* Logo */}
					<Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
						<span className="text-lg font-semibold tracking-tight">30tools</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center gap-8">
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className="text-[12px] font-normal text-white/80 hover:text-white transition-colors"
							>
								{link.name}
							</Link>
						))}
					</nav>

					{/* Actions */}
					<div className="flex items-center gap-4">
						<Tooltip>
							<TooltipTrigger asChild>
								<Link href="/search" className="text-white/80 hover:text-white transition-colors">
									<Search className="h-4 w-4" />
								</Link>
							</TooltipTrigger>
							<TooltipContent>Search (⌘K)</TooltipContent>
						</Tooltip>

						<div className="hidden sm:flex items-center gap-4">
							<ThemeToggle />
							
							<Tooltip>
								<TooltipTrigger asChild>
									<a
										href="https://github.com/sh20raj/30tools"
										target="_blank"
										rel="noopener noreferrer"
										className="text-white/80 hover:text-white transition-colors"
									>
										<Github className="h-4 w-4" />
									</a>
								</TooltipTrigger>
								<TooltipContent>GitHub</TooltipContent>
							</Tooltip>

							<Tooltip>
								<TooltipTrigger asChild>
									<Link href="/search" className="text-white/80 hover:text-white transition-colors">
										<LayoutGrid className="h-4 w-4" />
									</Link>
								</TooltipTrigger>
								<TooltipContent>Browse All</TooltipContent>
							</Tooltip>
						</div>
					</div>
				</div>
			</header>
		</TooltipProvider>
	);
}
