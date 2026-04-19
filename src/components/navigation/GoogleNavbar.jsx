"use client";

import { Github, HelpCircle, LayoutGrid, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GoogleLogo } from "@/components/shared/GoogleLogo";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export function GoogleNavbar() {
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

	return (
		<TooltipProvider>
			<header className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-xl border-b border-border/50 transition-all duration-300">
				<div className="flex h-20 items-center px-6 sm:px-10 gap-6">
					{/* Logo */}
					<div className="flex items-center">
						<GoogleLogo />
					</div>

					{/* Search Bar – desktop only */}
					<Link
						href="/search"
						className="hidden lg:flex flex-1 max-w-[640px] items-center px-6 py-2.5 secondary/30 hover:bg-secondary/80 hover:border-primary/20 hover:shadow-inner transition-all duration-300 group no-underline"
					>
						<Search className="text-muted-foreground group-hover:text-primary transition-colors mr-4 w-5 h-5" />
						<span className="flex-1 text-sm font-medium text-muted-foreground">
							Search 600+ tools...
						</span>
						<div className="flex items-center gap-1.5 px-2.5 py-1 border border-border/60 shadow-sm text-[11px] font-black text-muted-foreground group-hover:text-primary transition-colors">
							<span>⌘</span>
							<span>K</span>
						</div>
					</Link>

					{/* Spacer */}
					<div className="flex-1 lg:hidden" />

					{/* Desktop/Mobile actions */}
					<div className="flex items-center gap-1">
						{/* Mobile search button */}
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									asChild
									variant="ghost"
									size="icon"
									className="md:hidden "
									aria-label="Search Tools"
								>
									<Link href="/search">
										<Search className="h-4 w-4" />
									</Link>
								</Button>
							</TooltipTrigger>
							<TooltipContent>Search</TooltipContent>
						</Tooltip>

						<ThemeToggle aria-label="Toggle Theme" />

						{/* Help */}
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="hidden sm:inline-flex "
									aria-label="Help and Documentation"
								>
									<HelpCircle className="h-4 w-4" />
								</Button>
							</TooltipTrigger>
							<TooltipContent>Help</TooltipContent>
						</Tooltip>

						{/* GitHub */}
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									asChild
									variant="ghost"
									size="icon"
									className=""
									aria-label="GitHub Repository"
								>
									<a
										href="https://github.com/sh20raj/30tools"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Github className="h-4 w-4" />
									</a>
								</Button>
							</TooltipTrigger>
							<TooltipContent>Open Source - GitHub</TooltipContent>
						</Tooltip>

						{/* Apps */}
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									asChild
									variant="ghost"
									size="icon"
									className=""
									aria-label="Browse all tools"
								>
									<Link href="/search">
										<LayoutGrid className="h-4 w-4" />
									</Link>
								</Button>
							</TooltipTrigger>
							<TooltipContent>Browse Tools</TooltipContent>
						</Tooltip>

						{/* Divider */}
						<div className="hidden sm:block w-px h-6 bg-border mx-1" />

						{/* Avatar badge */}
						{mounted && (
							<Avatar className="w-8 h-8 ml-1 border-2 border-primary/20">
								<AvatarFallback className="bg-primary text-primary-foreground text-[11px] font-bold">
									30
								</AvatarFallback>
							</Avatar>
						)}
					</div>
				</div>
			</header>
		</TooltipProvider>
	);
}
